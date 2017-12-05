import * as React from 'react';

import { Data, createTaxonAbundance } from './util/taxon';

import './style.css';

export interface TaxonPlotDataType extends Data {}

export interface TaxonPlotProps {
  data: TaxonPlotDataType;
}

export class TaxonPlot extends React.Component<TaxonPlotProps, {}> {
  private rootDiv: HTMLDivElement | null;
  private scatterSVG: SVGSVGElement | null;
  
  componentDidMount() {
    this.renderScatter(this.props);
  }
  
  shouldComponentUpdate(nextProps: TaxonPlotProps) {
    // TODO: Animate this change
    this.renderScatter(nextProps);

    return false;
  }

  renderScatter(props: TaxonPlotProps) {
    if (this.rootDiv !== null && this.scatterSVG !== null) {
      createTaxonAbundance(this.rootDiv, this.scatterSVG, props.data);
    }
  }
  
  render() {
    return (
      <div ref={(elem) => { this.rootDiv = elem; }}>
        <svg ref={(elem) => { this.scatterSVG = elem; }} />
      </div>
    );
  }
}
