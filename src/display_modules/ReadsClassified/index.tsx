import * as React from 'react';

import { DisplayContainer } from '../components/DisplayContainer';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { ReadsClassifiedType } from '../../services/api/models/queryResult';
import { getReadsClassified } from '../../services/api';

import ReadsClassifiedContainer from './components/ReadsClassifiedContainer';

export class ReadsClassifiedModule extends DisplayContainer<ReadsClassifiedType> {

  constructor(props: DisplayContainerProps) {
    super(props);

    this.title = 'Reads Classified';
    this.description = (
      <p>This chart shows the proportion of reads in each sample {' '}
        assigned to different groups.</p>
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
