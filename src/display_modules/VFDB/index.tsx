import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getAnalysisResult } from '../../services/api';
import { GenericGeneType } from '../../services/api/models/queryResult';

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
    return getAnalysisResult<GenericGeneType>(this.props.uuid, 'virulence_factors');
  }

}
