import * as React from 'react';

import { TaxonAbundanceResultType } from '../../services/api/models/queryResult';
import { ResultPlot } from '../ResultPlot';
import { TaxonPlot, TaxonPlotDataType } from './components/TaxonPlot';

export interface TaxonAbundanceProps {
  taxonAbundance: TaxonAbundanceResultType;
}

export class TaxonAbundance extends ResultPlot<TaxonPlotDataType, TaxonAbundanceProps> {
  constructor(props: TaxonAbundanceProps) {
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

  componentDidMount() {
    this.setState({ data: this.props.taxonAbundance });
  }

  renderPlot(data: TaxonPlotDataType) {
    return <TaxonPlot data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
