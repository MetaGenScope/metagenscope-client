import * as React from 'react';

import { SampleSimilarityResultType } from '../../services/api/models/queryResult';
import { getSampleSimilarity } from '../../services/api';

import {
  ScatterPlot,
  ScatterPlotDataType,
  CategoryType,
  ToolType,
  RecordType
} from '../ScatterPlot';
import { D3ResultPlot } from '../ResultPlot';

const SAMPLE_ID_KEY = 'SampleID';

export class SampleSimilarity extends D3ResultPlot<SampleSimilarityResultType> {

  constructor(props: { id: string }) {
    super(props);

    this.title = 'Sample Similarity';
    this.description = (
      <div>
        <p>This plot displays a dimensionality reduction of the data.</p>
        <p>Samples are drawn near to similar samples in high dimensional space using a {' '}
          machine learning algorithm: T-Stochastic Neighbours Embedding.</p>
        <p>The plot can be colored by different sample metadata and the position of the {' '}
          points can be adjust to reflect the analyses of different tools.</p>
      </div>
    );
  }

  fetchData() {
    return getSampleSimilarity(this.props.id);
  }

  renderPlot(data: SampleSimilarityResultType) {
    const scatterPlotData = this.convertSampleSimilarity(data);
    return <ScatterPlot data={scatterPlotData} svgRef={el => this.svgCanvas = el} />;
  }

  convertSampleSimilarity(source: SampleSimilarityResultType) {
    const categories: CategoryType[] = Object.keys(source.categories).map(k => {
      const values = source.categories[k] as string[];
      return {
        name: k,
        values,
      };
    });

    const tools: ToolType[] = Object.keys(source.tools).map(k => {
      const result = source.tools[k];
      return {
        name: k,
        labels: {
          x: result.x_label,
          y: result.y_label,
        },
      };
    });

    const records: RecordType[] = source.data_records.map(record => {
      const recordCategories = categories.map(category => {
        return {
          name: category.name,
          value: record[category.name],
        };
      });
      const coords = tools.map(tool => {
        return {
          tool: tool.name,
          x: record[`${tool.name}_x`],
          y: record[`${tool.name}_y`],
        };
      });
      return {
        sampleId: record[SAMPLE_ID_KEY],
        categories: recordCategories,
        coords,
      };
    });

    const data: ScatterPlotDataType = {
      categories,
      tools,
      records,
    };

    return data;
  }
}
