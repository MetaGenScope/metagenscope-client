import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getVFDB } from '../../services/api';

export default class VFDBModule extends GenericGeneModule {

  constructor(props: GenericGeneProps) {
    super(props);

    this.title = 'Virulence Factor Abundance';
    this.description = (
      <p>The abundance of VFDBtransferase genes.</p>
    );

    this.chartId = 'vfdb-chart';
    this.yAxisTitle = 'Abundance';
  }

  /** @inheritdoc */
  fetchData() {
    return getVFDB(this.props.uuid);
  }

}
