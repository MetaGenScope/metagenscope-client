import * as React from 'react';
import * as Highcharts from 'highcharts';
import * as d3 from 'd3';
import { Row, Col } from 'react-bootstrap';

import HighChartsPlot from '../../../plots/HighChartsPlot';
import { AlphaDivResultType } from '../../../../services/api/models/queryResult';
import { ChartRefProps } from '../../../components/DisplayContainer/highcharts';

import AlphaDiversityControls from './components/AlphaDiversityControls';

export interface AlphaDivProps extends ChartRefProps {
  data: AlphaDivResultType;
}

export interface AlphaDivState {
  activeTool: string;
  activeTaxaRank: string;
  activeMetric: string;
  activeCategory: string;
}

export default class AlphaDivContainer extends React.Component<AlphaDivProps, AlphaDivState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: AlphaDivProps) {
    super(props);

    this.color = d3.scaleOrdinal(d3.schemeCategory20);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleColorByCategoryChanged = this.handleColorByCategoryChanged.bind(this);

    this.state = {
      activeCategory: Object.keys(this.props.data.categories)[0],
    };
  }

  handleToolChange(tool: string) {
    this.setState({
      activeTool: tool,
    });
  }

  handleTaxaRankChange(taxaRank: string) {
    this.setState({
      activeTaxaRank: taxaRank,
    });
  }

  handleMetricChange(metric: string) {
    this.setState({
      activeMetric: metric,
    });
  }

  handleCategoryChange(category: string) {
    this.setState({
      activeCategory: category,
    });
  }

  handleColorByCategoryChanged(category: string) {
    this.setState({
      activeCategory: category,
    });
  }

  chartOptions(activeCategory: string): Highcharts.Options {
    const data = this.props.data.by_tool[activeTool]
                  .by_taxa_rank[activeRank]
                  .by_category_name[activeCategory]
                  .by_metric[activeMetric];
    const categoryValues = Object.keys(data);

    const dataPoints: Highcharts.DataPoint[] = categoryValues.map(categoryValue => {
      const datum = data[categoryValue];
      return {
        low: datum.min_val,
        q1: datum.q1_val,
        median: datum.mean_val,
        q3: datum.q3_val,
        high: datum.max_val,
        color: this.color(categoryValue),
      };
    });
    const categorySeries = {
      name: activeCategory,
      data: dataPoints,
      showInLegend: false,
    };

    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'boxplot',
      },
      title: {
        text: null,
      },
      legend: {
        enabled: true,
      },
      xAxis: {
        categories: categoryValues,
      },
      yAxis: {
        title: {
          text: 'Base Pairs',
        },
      },
      exporting: {
        enabled: false,
      },
      series: [categorySeries],
    };

    return chartOptions;
  }

  render() {
    const activeCategory = this.state.activeCategory,
          activeCategoryValues = this.props.data.categories[activeCategory];
    const chartOptions = this.chartOptions(activeCategory);

    return (
      <Row>
        <Col lg={9}>
          <HighChartsPlot
            chartId="alpha-diversity"
            options={chartOptions}
            chartRef={this.props.chartRef}
          />
        </Col>
        <Col lg={3}>
          <AlphaDiversityControls
            categories={Object.keys(this.props.data.categories)}
            activeCategory={activeCategory}
            activeCategoryValues={activeCategoryValues}
            activeCategoryColor={this.color}
            handleCategoryChange={this.handleCategoryChange}
            handleColorByCategoryChanged={this.handleColorByCategoryChanged}
          />
        </Col>
      </Row>
    );
  }

}
