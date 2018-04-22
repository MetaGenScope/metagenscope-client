import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { CARDResultType } from '../../services/api/models/queryResult';
import { getCARD } from '../../services/api';

import CARDContainer from './components/CARDContainer';

export default class CARDModule extends D3DisplayContainer<CARDResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'CARDTransferase Abundance';
    this.description = (
      <p>The abundance of CARDtransferase genes.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getCARD(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: CARDResultType): JSX.Element {
    return <CARDContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
