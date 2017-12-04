import * as React from 'react';

import {
  sampleSimilarity,
  convertOldResults,
} from '../../services/api/mocks/sampleSimilarity';
import { ScatterPlot, ScatterPlotDataType } from '../ScatterPlot';
import { ResultPlot } from '../ResultPlot';

export interface SampleSimilarityProps {
  groupId: string;
}

class SampleSimilarity extends ResultPlot<ScatterPlotDataType, SampleSimilarityProps> {

  constructor(props: SampleSimilarityProps) {
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

  componentDidMount() {
    // Simulate network request
    setTimeout(
      () => {
        this.setState({
          data: convertOldResults(sampleSimilarity),
        });
      },
      1000);
  }

  renderPlot(data: ScatterPlotDataType) {
    return <ScatterPlot data={data} />;
  }
}

export default SampleSimilarity;
