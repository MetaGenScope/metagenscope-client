import * as React from 'react';

import { Data, createTaxonAbundance } from './util/taxon';
import { SvgRefProps } from '../../../components/DisplayContainer';

import './style.css';

export type TaxonAbundanceData = Data;

export interface TaxonAbundancePlotProps extends SvgRefProps {
  data: TaxonAbundanceData;
}

export default class TaxonAbundancePlot extends React.Component<TaxonAbundancePlotProps, {}> {
  private rootDiv: HTMLDivElement | null;
  private scatterSVG: SVGSVGElement | null;

  componentDidMount() {
    this.renderScatter(this.props);
  }

  shouldComponentUpdate(nextProps: TaxonAbundancePlotProps) {
    // TODO: Animate this change
    this.renderScatter(nextProps);

    return false;
  }

  renderScatter(props: TaxonAbundancePlotProps) {
    if (this.rootDiv !== null && this.scatterSVG !== null) {
      createTaxonAbundance(this.rootDiv, this.scatterSVG, props.data);
    }
  }

  render() {
    return (
      <div ref={(elem) => { this.rootDiv = elem; }}>
        <svg
          ref={(elem) => {
            this.scatterSVG = elem;
            this.props.svgRef(elem);
          }}
        />
      </div>
    );
  }
}
