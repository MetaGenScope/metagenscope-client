import * as React from 'react';

import { TaxonAbundanceResultType } from '../../services/api/models/queryResult';
import { getTaxonAbundance } from '../../services/api';
import { D3ResultPlot } from '../ResultPlot';
import { TaxonPlot } from './components/TaxonPlot';

export class TaxonAbundance extends D3ResultPlot<TaxonAbundanceResultType> {
  constructor(props: { id: string }) {
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

  fetchData() {
    return getTaxonAbundance(this.props.id);
  }

  renderPlot(data: TaxonAbundanceResultType) {
    return <TaxonPlot data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
