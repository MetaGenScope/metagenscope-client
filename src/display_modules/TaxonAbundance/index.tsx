import * as React from 'react';

import D3DisplayContainer from '../components/DisplayContainer/d3';
import { DisplayContainerProps } from '../components/DisplayContainer';
import { TaxonAbundanceResultType } from '../../services/api/models/queryResult';
import { getTaxonAbundance } from '../../services/api';

import TaxonAbundancePlot from './components/TaxonAbundancePlot';

export class TaxonAbundanceModule extends D3DisplayContainer<TaxonAbundanceResultType> {

  constructor(props: DisplayContainerProps) {
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

  /** @inheritdoc */
  fetchData() {
    return getTaxonAbundance(this.props.uuid);
  }

  /** @inheritdoc */
  plotContainer(data: TaxonAbundanceResultType): JSX.Element {
    // Plot has no controls so we do not need a container to manage controls state
    return <TaxonAbundancePlot data={data} svgRef={el => this.svgCanvas = el} />;
  }
}
