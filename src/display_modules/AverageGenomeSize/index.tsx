import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { AGSResultType } from '../../services/api/models/queryResult';
import { getAnalysisResult } from '../../services/api';

import AGSContainer from './components/AGSContainer';

export default class HMPModule extends HighchartsDisplayContainer<AGSResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Average Genome Size';
    this.description = (
      <p>Generally a larger average genome size indicates a community   {' '}
        with broader function, as opposed to specific niches.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getAnalysisResult<AGSResultType>(this.props.uuid, 'average_genome_size');
  }

  /** @inheritdoc */
  plotContainer(data: AGSResultType): JSX.Element {
    return <AGSContainer data={data} chartRef={el => this.chart = el} />;
  }
}
