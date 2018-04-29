import * as React from 'react';
import { CancelTokenSource } from 'axios';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { VolcanoType } from '../../services/api/models/queryResult';
import { getAnalysisResult } from '../../services/api';

import { VolcanoContainer } from './components/VolcanoContainer';

export class VolcanoModule extends HighchartsDisplayContainer<VolcanoType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Volcano';
    this.description = (
      <div>
        <p>This chart shows features that are both high abundance and consistently
          changed between conditions.</p>
        <p>Every sample with a matching condition will be grouped and compared to a
          group of every sample which does not have the selected condition. Size
          represents the average abundance of a feature</p>
      </div>
    );
  }

  /** @inheritdoc */
  fetchData(sourceToken: CancelTokenSource) {
    return getAnalysisResult<VolcanoType>(this.props.uuid, 'volcano', sourceToken);
  }

  /** @inheritdoc */
  plotContainer(data: VolcanoType): JSX.Element {
    return <VolcanoContainer data={data} chartRef={el => this.chart = el} />;
  }
}
