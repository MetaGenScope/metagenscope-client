import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { PathwaysType } from '../../services/api/models/queryResult';
import { getPathways } from '../../services/api';

import BetaDiversityContainer from './components/PathwaysContainer';

export default class PathwaysModule extends D3DisplayContainer<PathwaysType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Biochemical Functional Pathway Abundance';
    this.description = (
      <div>
        <p>The relative abundance of biochemical and metabolic pathways found in your sample.</p>
        <p>Source: <a href="https://bitbucket.org/biobakery/humann2/wiki/Home">Humann2</a></p>
      </div>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getPathways(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: PathwaysType): JSX.Element {
    return <BetaDiversityContainer data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
