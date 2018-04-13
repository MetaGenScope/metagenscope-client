import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { ReadStatsType } from '../../services/api/models/queryResult';
import { getReadStats } from '../../services/api';

import ReadStatsContainer from './components/ReadStatsContainer';

export class ReadStatsModule extends HighchartsDisplayContainer<ReadStatsType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Read Statistics';
    this.description = (
      <p>This chart shows various statistsics {' '}
        about the reads in each sample</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getReadStats(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: ReadStatsType): JSX.Element {
    return <ReadStatsContainer data={data} chartRef={el => this.chart = el} />;
  }
}
