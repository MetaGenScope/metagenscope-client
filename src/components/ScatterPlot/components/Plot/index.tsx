import * as React from 'react';

import { Entry, createScatter } from './util/scatter';
import { SvgRefProps } from '../../../ResultPlot/index';

import './style.css';

interface Props extends SvgRefProps {
  data: Entry[];
  focusedCategory?: string;
  xAxisTitle?: string;
  yAxisTitle?: string;
}

class Plot extends React.Component<Props, {}> {
  private rootDiv: HTMLDivElement | null;
  private scatterSVG: SVGSVGElement | null;

  componentDidMount() {
    this.renderScatter(this.props);
  }

  shouldComponentUpdate(nextProps: Props) {
    // TODO: Animate this change
    this.renderScatter(nextProps);

    return false;
  }

  renderScatter(props: Props) {
    const plotOptions = {
      xAxisTitle: props.xAxisTitle,
      yAxisTitle: props.yAxisTitle,
      focusedCategory: props.focusedCategory,
    };

    if (this.rootDiv !== null && this.scatterSVG !== null) {
      createScatter(this.rootDiv, this.scatterSVG, props.data, plotOptions);
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

export default Plot;
