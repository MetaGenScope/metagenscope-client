import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getCARD } from '../../services/api';

export default class CARDModule extends GenericGeneModule {

  constructor(props: GenericGeneProps) {
    super(props);

    this.title = 'CARDTransferase Abundance';
    this.description = (
      <p>The abundance of CARDtransferase genes.</p>
    );

    this.chartId = 'card-amr-chart';
    this.yAxisTitle = 'Abundance';
  }

  /** @inheritdoc */
  fetchData() {
    return getCARD(this.props.uuid);
  }

}
