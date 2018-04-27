import * as React from 'react';

import HighchartsDisplayContainer from '../components/DisplayContainer/highcharts';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { AncestryType } from '../../services/api/models/queryResult';
import { getAncestry } from '../../services/api';

import AncestryContainer from './components/AncestryContainer';

export default class AncestryModule extends HighchartsDisplayContainer<AncestryType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Ancestry';
    this.description = (
      <p>Description pending.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getAncestry(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: AncestryType): JSX.Element {
    return <AncestryContainer data={data} />;
  }
}