import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { HMPResultType } from '../../services/api/models/queryResult';
import { getHMP } from '../../services/api';

import HMPContainer from './components/HMPContainer';

export default class HMPModule extends HighchartsDisplayContainer<HMPResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Human Body Sites';
    this.description = (
      <p>This chart shows the average similarity between bacterial  {' '}
        communities in the samples and human body sites from the Human Microbiome Project.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getHMP(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: HMPResultType): JSX.Element {
    return <HMPContainer data={data} chartRef={el => this.chart = el} />;
  }
}