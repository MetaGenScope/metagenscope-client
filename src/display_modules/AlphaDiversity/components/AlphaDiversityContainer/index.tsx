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

type CategoryDatum = {
  by_metric: {
    [key: string]: number[];
  };
};

export default class AlphaDivContainer extends React.Component<AlphaDivProps, AlphaDivState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: AlphaDivProps) {
    super(props);

    this.color = d3.scaleOrdinal(d3.schemeCategory20);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleColorByCategoryChanged = this.handleColorByCategoryChanged.bind(this);

    const categories = Object.keys(this.props.data.categories),
          activeCategory = categories[0],
          tools = this.props.data.tool_names,
          activeTool = tools[0],
          activeTaxaRank = this.props.data.by_tool[activeTool].taxa_ranks[0],
          rankData = this.props.data.by_tool[activeTool].by_taxa_rank[activeTaxaRank],
          metrics = rankData.by_category_name[activeCategory][0].metrics,
          activeMetric = metrics[0];
    this.state = {
      activeTool,
      activeTaxaRank,
      activeMetric,
      activeCategory,
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

  chartOptions(activeCategory: string, activeMetric: string, categoryData: CategoryDatum[]): Highcharts.Options {
    const categoryValues = this.props.data.categories[activeCategory];

    const dataPoints: Highcharts.DataPoint[] = categoryData.map((categoryDatum, index) => {
      const datum = categoryDatum.by_metric[activeMetric];
      return {
        low: datum[0],
        q1: datum[1],
        median: datum[2],
        q3: datum[3],
        high: datum[4],
        color: this.color(categoryValues[index]),
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
    const {activeTool, activeTaxaRank, activeMetric, activeCategory} = this.state,
          activeCategoryValues = this.props.data.categories[activeCategory],
          rankData = this.props.data.by_tool[activeTool].by_taxa_rank[activeTaxaRank],
          categoryData = rankData.by_category_name[activeCategory];

    const chartOptions = this.chartOptions(activeCategory, activeMetric, categoryData);

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
