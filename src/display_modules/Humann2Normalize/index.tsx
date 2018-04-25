import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getHumann2Normalize } from '../../services/api';

export default class Humann2NormalizeModule extends GenericGeneModule {

  constructor(props: GenericGeneProps) {
    super(props);

    this.title = 'Biochemical Pathway Abundance';
    this.description = (
      <p>The abundance of Humann2Normalizetransferase genes.</p>
    );

    this.chartId = 'humann2-normalize-chart';
    this.yAxisTitle = 'Abundance';
  }

  /** @inheritdoc */
  fetchData() {
    return getHumann2Normalize(this.props.uuid);
  }

}