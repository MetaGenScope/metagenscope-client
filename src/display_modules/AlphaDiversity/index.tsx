import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { AlphaDivResultType } from '../../services/api/models/queryResult';
import { getAlphaDiv } from '../../services/api';

import AlphaDiversityContainer from './components/AlphaDiversityContainer';

export default class AlphaDiversityModule extends HighchartsDisplayContainer<AlphaDivResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Alpha Diversity';
    this.description = (
      <p>Higher alpha diversity indicates a richer more  {' '}
        active community with more niches.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getAlphaDiv(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: AlphaDivResultType): JSX.Element {
    return <AlphaDiversityContainer data={data} chartRef={el => this.chart = el} />;
  }
}
