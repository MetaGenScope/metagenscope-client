import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import Plot from './components/Plot';
import Controls from './components/Controls';
import { SvgRefProps } from '../ResultPlot/index';

export type CategoryType = {
  name: string;
  values: string[];
};

export type CategoryEntryType = {
  name: string;
  value: string;
};

export type ToolType = {
  name: string;
  labels: {
    x: string;
    y: string;
  };
};

export type CoordType = {
  tool: string;
  x: number;
  y: number;
};

export type RecordType = {
  sampleId: string;
  categories: CategoryEntryType[];  // ex: [ { name: 'city', value: 'Montevideo' } ]
  coords: CoordType[];       // ex: [ { name: kraken, x: 0, y: 0 } ]
};

export type ScatterPlotDataType = {
  categories: CategoryType[];   // ex: [ { name: 'city', values: ['Seoul', 'Oslo'] } ... ]
  tools: ToolType[];            // ex: [ { name: 'kraken', labels: { x: 0, y: 1 } } ]
  records: RecordType[];
};

export interface ScatterPlotProps extends SvgRefProps {
  data: ScatterPlotDataType;
}

export interface ScatterPlotState {
  activeTool: string;
  activeCategory: string;
  focusedCategory?: string;
}

export class ScatterPlot extends React.Component<ScatterPlotProps, ScatterPlotState> {
  constructor(props: ScatterPlotProps) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleColorByCategoryChange = this.handleColorByCategoryChange.bind(this);

    this.state = {
      activeTool: this.props.data.tools[0].name,
      activeCategory: this.props.data.categories[0].name,
    };
  }

  handleSourceChange(newSource: string) {
    this.setState({
      activeTool: newSource,
    });
  }

  handleCategoryChange(category?: string) {
    this.setState({
      focusedCategory: category,
    });
  }

  handleColorByCategoryChange(category: string) {
    this.setState({
      activeCategory: category,
    });
  }

  parsedData(toolName: string, categoryName: string) {
    return this.props.data.records.map((record) => {
      const coords = record.coords.find((coord, index) => {
        return coord.tool === toolName;
      });
      if (coords === undefined) {
        throw new Error(`Could not find coords for ${toolName} in `
          + `sample ${record.sampleId}`);
      }

      const categoryValue = record.categories.find((category) => {
        return category.name === categoryName;
      });
      if (categoryValue === undefined) {
        throw new Error(`Could not find category for ${categoryName} in `
          + `sample ${record.sampleId}`);
      }

      return {
        name: record.sampleId,
        category: categoryValue.value,
        x: coords.x,
        y: coords.y,
      };
    });
  }

  axisTitles(toolName: string) {
    const matchingTool = this.props.data.tools.find((tool) => {
      return tool.name === toolName;
    });
    if (matchingTool === undefined) {
      return {};
    }

    return {
      xAxisTitle: matchingTool.labels.x,
      yAxisTitle: matchingTool.labels.y,
    };
  }

  render() {
    let values: string[] = [];
    const activeCategory = this.props.data.categories.find(category => {
      return category.name === this.state.activeCategory;
    });
    if (activeCategory !== undefined) {
      values = activeCategory.values;
    }

    return (
      <Row>
        <Col lg={9}>
          <Plot
            data={this.parsedData(this.state.activeTool, this.state.activeCategory)}
            focusedCategory={this.state.focusedCategory}
            {...this.axisTitles(this.state.activeTool)}
            svgRef={this.props.svgRef}
          />
        </Col>
        <Col lg={3}>
          <Controls
            activeSource={this.state.activeTool}
            sources={this.props.data.tools.map((tool) => tool.name)}
            categories={this.props.data.categories.map((category) => category.name)}
            activeCategory={this.state.activeCategory}
            activeCategoryValues={values}
            handleSourceChange={this.handleSourceChange}
            handleCategoryChange={this.handleCategoryChange}
            handleColorByCategoryChanged={this.handleColorByCategoryChange}
          />
        </Col>
      </Row>
    );
  }
}
