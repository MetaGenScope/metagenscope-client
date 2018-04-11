import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { AGSResultType } from '../../services/api/models/queryResult';
import { getAGS } from '../../services/api';

import AGSContainer from './components/AGSContainer';

export default class HMPModule extends HighchartsDisplayContainer<AGSResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Alpha Diversity';
    this.description = (
      <p>Generally a larger average genome size indicates a community   {' '}
        with broader function, as opposed to specific niches.</p>
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
