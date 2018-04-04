import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { BetaDiversityType } from '../../services/api/models/queryResult';
import { getBetaDiversity } from '../../services/api';

import BetaDiversityContainer from './components/BetaDiversityContainer';

export default class BetaDiversityModule extends D3DisplayContainer<BetaDiversityType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Beta Diverstiy';
    this.description = (
      <p>It's got colors and whatnot.</p>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getBetaDiversity(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: BetaDiversityType): JSX.Element {
    return <BetaDiversityContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
