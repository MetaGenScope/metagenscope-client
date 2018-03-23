import * as React from 'react';

import { DisplayContainer } from '../components/DisplayContainer';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { ReadsClassifiedType } from '../../services/api/models/queryResult';
import { getReadsClassified } from '../../services/api';

import ReadsClassifiedContainer from './components/ReadsClassifiedContainer';

export class ReadsClassifiedModule extends DisplayContainer<ReadsClassifiedType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Taxon Abundance';
    this.description = (
      <div>
        <p>This plot shows the relative abundance of each different microbes found in {' '}
          each sample</p>
        <p>Hover over the plot to highlight connections. Thicker connections represent {' '}
          larger proportions of taxa in a given sample.</p>
      </div>
    );
  }

  /** @inheritdoc */
  fetchData() {
    return getReadsClassified(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: ReadsClassifiedType): JSX.Element {
    return <ReadsClassifiedContainer data={data} />;
  }
}
