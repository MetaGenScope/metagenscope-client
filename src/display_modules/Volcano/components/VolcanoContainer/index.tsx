import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import HighChartsPlot from '../../../plots/HighChartsPlot';
import { VolcanoType } from '../../../../services/api/models/queryResult';
import { ChartRefProps } from '../../../components/DisplayContainer/highcharts';

import VolcanoControls from './components/VolcanoControls';

export interface VolcanoProps extends ChartRefProps {
  data: VolcanoType;
}

export interface VolcanoState {
  activeTool: string;
  activeCategory: string;
  activeCategoryValue: string;
}

export class VolcanoContainer extends React.Component<VolcanoProps, VolcanoState> {
  constructor(props: VolcanoProps) {
    super(props);

    this.handleToolChange = this.handleToolChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategoryValueChange = this.handleCategoryValueChange.bind(this);

    const tools = Object.keys(this.props.data.tools),
          activeTool = tools[0],
          categories = Object.keys(this.props.data.categories),
          activeCategory = categories[0],
          activeCategoryValue = this.props.data.categories[activeCategory][0];

    this.state = {
      activeTool,
      activeCategory,
      activeCategoryValue,
    };
  }

  handleToolChange(tool: string) {
    this.setState({
      activeTool: tool
    });
  }

  handleCategoryChange(category: string) {
    let newState: VolcanoState = Object.assign({}, this.state);
    newState.activeCategory = category;

    // Pass changes downward because we can't be sure that each branch of the
    // options tree is the same and may need to reset an invalid value
    newState = this.downstreamCategoryValue(newState);

    this.setState(newState);
  }

  handleCategoryValueChange(categoryValue: string) {
    this.setState({
      activeCategoryValue: categoryValue,
    });
  }

  downstreamCategoryValue(upstreamState: VolcanoState): VolcanoState {
    const {activeCategory, activeCategoryValue} = upstreamState,
          categoryValues = this.props.data.categories[activeCategory];

    if (categoryValues.indexOf(activeCategoryValue) < 0) {
      upstreamState.activeCategoryValue = categoryValues[0];
    }

    return upstreamState;
  }

  chartOptions(tool: string, category: string, categoryValue: string): Highcharts.Options {
    const data = this.props.data.tools[tool].tool_categories[category][categoryValue].scatter_plot;
    const seriesData: Highcharts.DataPoint[] = data.map(datum => {
      return {
        x: datum.xval,
        y: datum.yval,
        z: datum.zval,
        name: datum.name,
      };
    });
    return {
      chart: {
        type: 'bubble',
        zoomType: 'xy',
      },
      title: {
        text: `${category } |  ${categoryValue}`,
      },
      plotOptions: {
        series: {
            color: 'rgba(36,135,255,0.1)'
        }
      },
      xAxis: {
        title: {
          text: 'Log2 Fold Change'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: '-Log10 p-val'
        },
        plotLines: [{
          value: 1.3,
          color: 'red',
          width: 1,
          label: {
            text: 'P = 0.05',
            align: 'right',
            style: {
              color: 'grey'
            }
          }
        }],
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 
            '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>Log2 Fold Change (x):</th><td>{point.x}</td></tr>' +
            '<tr><th>Log10 P-Value (y):</th><td>{point.y}</td></tr>',
      },
      exporting: {
        enabled: false,
      },
      legend: { enabled: false},
      series: [{ data: seriesData }],
    };
  }

  render() {
    const {activeTool, activeCategory, activeCategoryValue} = this.state,
          activeCategoryValues = this.props.data.categories[activeCategory];
    const chartOptions = this.chartOptions(activeTool, activeCategory, activeCategoryValue);

    return (
      <Row>
        <Col lg={9}>
          <HighChartsPlot
            chartId="volcano"
            options={chartOptions}
            chartRef={this.props.chartRef}
          />
        </Col>
        <Col lg={3}>
          <VolcanoControls
            tools={Object.keys(this.props.data.tools)}
            activeTool={activeTool}
            handleToolChange={this.handleToolChange}
            categories={Object.keys(this.props.data.categories)}
            activeCategory={activeCategory}
            handleCategoryChange={this.handleCategoryChange}
            categoryValues={activeCategoryValues}
            activeCategoryValue={activeCategoryValue}
            handleCategoryValueChange={this.handleCategoryValueChange}
          />
        </Col>
      </Row>
    );
  }
}
