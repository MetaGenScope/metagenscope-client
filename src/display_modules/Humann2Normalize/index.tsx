import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { Humann2NormalizeResultType } from '../../services/api/models/queryResult';
import { getHumann2Normalize } from '../../services/api';

import Humann2NormalizeContainer from './components/Humann2NormalizeContainer';

export default class Humann2NormalizeModule extends D3DisplayContainer<Humann2NormalizeResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Humann2NormalizeTransferase Abundance';
    this.description = (
      <p>The abundance of Humann2Normalizetransferase genes.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getHumann2Normalize(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: Humann2NormalizeResultType): JSX.Element {
    return <Humann2NormalizeContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}