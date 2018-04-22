import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { MethylResultType } from '../../services/api/models/queryResult';
import { getMethyl } from '../../services/api';

import MethylContainer from './components/MethylContainer';

export default class MethylModule extends D3DisplayContainer<MethylResultType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'MethylTransferase Abundance';
    this.description = (
      <p>The abundance of methyltransferase genes.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getMethyl(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: MethylResultType): JSX.Element {
    return <MethylContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
