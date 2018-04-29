import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getAnalysisResult } from '../../services/api';
import { GenericGeneType } from '../../services/api/models/queryResult';

export default class CARDModule extends GenericGeneModule {

  constructor(props: GenericGeneProps) {
    super(props);

    this.title = 'Antimicrobial Resistance (AMR) Abundance';
    this.description = (
      <p>The abundance of CARDtransferase genes.</p>
    );

    this.chartId = 'card-amr-chart';
    this.yAxisTitle = 'Abundance';
  }

  /** @inheritdoc */
  fetchData() {
    return getAnalysisResult<GenericGeneType>(this.props.uuid, 'card_amr_genes');
  }

}
