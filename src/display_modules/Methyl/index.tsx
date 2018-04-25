import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getMethyl } from '../../services/api';

export default class MethylModule extends GenericGeneModule {

  constructor(props: GenericGeneProps) {
    super(props);

    this.title = 'MethylTransferase Abundance';
    this.description = (
      <p>The abundance of methyltransferase genes.</p>
    );

    this.chartId = 'methyl-chart';
    this.yAxisTitle = 'Abundance';
  }

  /** @inheritdoc */
  fetchData() {
    return getMethyl(this.props.uuid);
  }

}
