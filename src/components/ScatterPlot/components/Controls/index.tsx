import * as React from 'react';
import * as d3 from 'd3';
import { Well, Row, Col } from 'react-bootstrap';

import Category from './components/Category';
import PlotSource from './components/PlotSource';

type ControlsProps = {
  activeSource: string;
  sources: string[];
  activeCategory: string;
  activeCategoryValues: string[];
  handleSourceChange(newSource: string): void;
  handleCategoryChange(category?: string): void;
};

class Controls extends React.Component<ControlsProps, {}> {
  constructor(props: ControlsProps) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleSourceChange(newSource: string) {
    this.props.handleSourceChange(newSource);
  }

  handleCategoryChange(category?: string) {
    this.props.handleCategoryChange(category);
  }

  render() {
    const color = d3.scaleOrdinal(d3.schemeCategory20);
    const values = this.props.activeCategoryValues.map(category => {
      return {
        name: category,
        color: color(category),
      };
    });

    return (
      <Well>
        <Row>
          <Col lg={12} md={4} sm={12}>         
            <Category
              categoryName={this.props.activeCategory}
              categoryValues={values}
              activeCategoryChanged={this.handleCategoryChange}
            />
          </Col>
          <Col lg={12} md={4} sm={12}>         
            <PlotSource {...this.props} />
          </Col>
        </Row>
      </Well>
    );
  }
}

export default Controls;
