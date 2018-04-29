import * as React from 'react';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getAnalysisResult } from '../../services/api';
import { GenericGeneType } from '../../services/api/models/queryResult';

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
    return getAnalysisResult<GenericGeneType>(this.props.uuid, 'methyltransferases');
  }

}
