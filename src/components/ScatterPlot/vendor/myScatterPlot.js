 // The MIT License (MIT)
// 
// Copyright (c) 2015 TennisVisuals
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function buildVizTable(vizcontrol, samples, tools, categories) {
  var viztable = vizcontrol.append('table').attr('align', 'center');
  var vizsearch = viztable.append('input')
    .attr('name', 'highlight')
    .attr('class', 'valid')
    .attr('type', 'text')
    .attr('value', '')
    .attr('id', 'highlight')
    .attr('placeholder', 'Search samples')
    .attr('tabindex', '3')
    .attr('spellcheck', 'false')
    .attr('autofocus');
    
  viztable.append('br');

  var autocompleteSource = samples.map(x => x.SampleID).concat(samples.map(x => 'P1'+x.SampleID));
  $("#highlight").autocomplete({
    source: autocompleteSource,
    select: function(event, ui) {
	    var val = ui.item.value;
	    if (val.includes('P1')) {
		    val = val .slice(2)
	    }
      $("input#highlight").val(val);
      sp.highlight(val);
    }
  });

  highlight.addEventListener("keyup", function(event) {
    if (!highlight.value) {
      sp.highlight(undefined);
    }
    if (event.keyCode == 13) {
      sp.highlight(highlight.value);
    }
  });

  viztable.append('tr')
    .append('td')
      .attr('align', 'left')
      .text("Plot calculated similarity by");
    
    /* positions */
    for (var i = 0; i < Object.keys(tools).length; i++) {
	    (function () { 
	      var tool = Object.keys(tools)[i];
	      var elName = tool + '_sctool_el';
	      var elLabel = tool + '_sctool_label';
	      var xlab = tools[tool].x_label;
	      var ylab = tools[tool].y_label;

        var filteredSamples = [];
        samples.map(function(sample) {
          if (sample.hasOwnProperty(tool + '_x')) {
            filteredSamples.push(sample)
          }
        });
	    
        var row = viztable.append('tr').append('td').attr('align', 'left');
        var inp = row.append('input')
		      .attr('name', 'myscatterPos')
		      .attr('id', elName)
		      .attr('type', 'radio')
		      .attr('value', elName);

        if (i === 0) {
          inp.attr('checked', 'checked');
        }

        row.append('label').html('&nbsp; ' + tool).attr('id', elLabel);

        document.getElementById(elName).addEventListener("change", function() {
          samplePos(xlab, ylab, filteredSamples, tool);
          sp.update();
        });
      }());
    }

    viztable.append('br');
    viztable.append('tr').append('td').attr('align', 'left').text("Samples colored by category");

    /* colors */
    for (var i = 0; i < Object.keys(categories).length; i++) {
	    (function () {
	      var category = Object.keys(categories)[i];
	      var elName = category + '_scdat_el';
	      var elLabel = category + '_scdat_label';

        var row = viztable.append('tr').append('td').attr('align', 'left');
        var inp = row.append('input').attr('name', 'scatterCol').attr('id', elName).attr('type', 'radio').attr('value', elName);
        if (i === 0) {
          inp.attr('checked', 'checked');
        }
      
        row.append('label').html('&nbsp; ' + category).attr('id', elLabel);

	      document.getElementById(elName).addEventListener("change", function() { 
          sampleColor(samples, category, categories[category]);
          sp.update();
        });
      }());
    }

    viztable.append('br');
}


function init(startX, startY, startXLab, startYLab) {
  sp.options({
    id : 'first',
    data: {
      identifier:    'SampleID',
	    identifierText:'SampleID',
      abbreviation:  'Pet',
      group:         'Pet',
      sub_group:     'SampleID',
      r_scale:       startX,
      x:             startX,
      y:             startY
    },
  
    axes : {
      x: { label:   startXLab },
      y: { label:   startYLab } 
    },

    datapoints: {
      radius: {
        default: [6, 8],
        mobile:  [3, 4]
      }
    },

    legend: { 
      dom_element: legend,
      title:   'Color category',
      text:    'Click legend to filter.<br> Click legend title to reset.',
    },

    display: {
      reset:         '#scatterPlot_legend',
      zoom:          true,
      bubble_legend: false,
      highlight: {
        radius:     15,
        fill:       undefined,
			  stroke:		'black',
			  stroke_width: 2
      },
		  highlightSelect: {
			  radius:     20,
        fill:       undefined,
			  stroke:		'red',
			  stroke_width: 5
		  }
    }
  });

  sp.events({
    'element': { 'click': highlightMatch },
    'voroni': { 'mouseover': showTooltip, 'mouseout': removeTooltip }
  });
   
  sp.duration(1000);
}

// return an array of <n> colors
function colorMap(n) {
  var colorFunc = function(color) {
    var hcl = color.hcl();
    return hcl[0] >= 0 && hcl[0] <= 360 && hcl[1] >= 30 && hcl[1] <= 80 && hcl[2] >= 35 && hcl[2] <= 80;
  }
  
  var colors = paletteGenerator.generate(n, colorFunc, false, 50, false, 'Default');
  colors = colors.map(function(col) {
    return chroma(col).hex();
  });
  return colors;
}


function samplePos(x_label, y_label, samples, tool) {
	sp.data(samples);
    
  sp.options({
    data: {
      x: tool + '_x',
      y: tool + '_y'
    },
    axes: {
	    x: { label: x_label},
      y: { label: y_label}
    }
  });
}


function sampleColor(samples, category, values) {
  sp.options({
    data: {
      abbreviation: category,
      group: category,
    }
  });
    
  cols = colorMap( values.length);
  vals2cols = {}
  for (var i=0; i<values.length; i++) {
	  val = values[i];
	  col = cols[i];
	  vals2cols[val] = col;
  }
  sp.colors(vals2cols);
}

/* 
The JSON object being passed encodes all the info necessary to plot 
points on the scatter plot.
{
  categories : {
    <category> : [<values>...],
	},
  tools : {
    <tool_name> : {
      x_label: <x_label>,
      y_label : <y_label>
    }
    ...
  },
  samples : [
    {
      sample_id : <sample_name>,    
      <tool_name>_x : <x>,
      <tool_name>_y : <y>,
      <category> : <value>
    }
    ...
  ]
}
*/
function startScatterPlot(jsonURL, dataRecords) {
  sp = scatterPlot();
  postDataRecords( jsonURL, dataRecords, function(err, data) {
    data = data.payload;
    samples = data['data_records'];
    categories = data['categories'];
    tools = data['tools'];
    tool_names = Object.keys(tools);
    default_tool = tool_names[0];
      

    var xAxis = default_tool + '_x',
        yAxis = default_tool + '_y',
        xAxisLabel = tools[default_tool]['x_label'],
        yAxisLabel = tools[default_tool]['y_label'];
    init(xAxis, yAxis, xAxisLabel, yAxisLabel);
    
    var categoryNames = Object.keys(categories);
    if (categoryNames.length > 0) {
      var firstCategory = categoryNames[0];
      var categoryValues = categories[firstCategory];
      sampleColor(samples, categoryOptions, categoryValues);
    }

    var filteredSamples = []
    samples.map(function(sample) {
      if (sample.hasOwnProperty(default_tool + '_x')) {
        filteredSamples.push(sample)
      }
    });
    
    sp.data(filteredSamples);
    container.call(sp);
    sp.update();

    $("#highlight").autocomplete({
      source: samples.map(x => x.SampleID),
      select: function(event, ui) { 
        $("input#highlight").val(ui.item.value);
        sp.highlight(ui.item.value);
      }
    });

	  buildVizTable(scatterViz, samples, tools, categories);
  });
}


function highlightMatch(d, i, element) {
  var group = [];
  location.replace('/view/datarec/' + d.SampleID);
}


function removeTooltip (d, i, element) {
  if (!$(element).popover) {
    return;
  }

  $('.popover').each(function() {
    $(this).remove();
  }); 
}


function showTooltip (d, i, element) {
  if (!$(element).popover) {
    return;
  }

  $(element).popover({
    placement: 'auto top',
	  container: '#scatterPlot',
	  trigger: 'manual',
	  html : true,
	  content: function() { 
	    return "<span style='font-size: 11px; text-align: center;'><strong>Click to see details</strong><br/>" + d.SampleID + "</span>";
	  }
  });

  $(element).popover('show');
}
