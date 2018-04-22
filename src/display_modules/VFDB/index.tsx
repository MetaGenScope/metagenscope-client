import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { VFDBResultType } from '../../services/api/models/queryResult';
import { getVFDB } from '../../services/api';

import VFDBContainer from './components/VFDBContainer';

export default class VFDBModule extends D3DisplayContainer<VFDBResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'VFDBTransferase Abundance';
    this.description = (
      <p>The abundance of VFDBtransferase genes.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getVFDB(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: VFDBResultType): JSX.Element {
    return <VFDBContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
