import * as React from 'react';
import { CancelTokenSource } from 'axios';

import GenericGeneModule, { GenericGeneProps } from '../components/GenericGeneModule';
import { getAnalysisResult } from '../../services/api';
import { GenericGeneType } from '../../services/api/models/queryResult';

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
  fetchData(sourceToken: CancelTokenSource) {
    return getAnalysisResult<GenericGeneType>(this.props.uuid, 'functional_genes', sourceToken);
  }

}