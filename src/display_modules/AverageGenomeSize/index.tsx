import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { AGSResultType } from '../../services/api/models/queryResult';
import { getAGS } from '../../services/api';

import AGSContainer from './components/AGSContainer';

export default class HMPModule extends HighchartsDisplayContainer<AGSResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Average Genome Size';
    this.description = (
      <p>This chart shows the average similarity between bacterial  {' '}
        communities in the samples and human body sites from the Human Microbiome Project.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getAGS(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: AGSResultType): JSX.Element {
    return <AGSContainer data={data} chartRef={el => this.chart = el} />;
  }
}
