import * as React from 'react';
import * as d3 from 'd3';
import { Well, Row, Col } from 'react-bootstrap';

import SelectCategory from '../../../../../controls/SelectCategory';

type ControlsProps = {
  propertyValues: string[];
  activeProperty: string;
};

export default class MicrobeDirectoryControls extends React.Component<ControlsProps, {}> {
  constructor(props: ControlsProps) {
    super(props);

    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.handleColorByCategoryChanged = this.handleColorByCategoryChanged.bind(this);
  }

  handlePropertyChange(category?: string) {
    // no-op
  }


  render() {
    const values = this.props.activeCategoryValues.map(category => {
      return {
        name: category,
        color: this.props.activeCategoryColor(category),
      };
    });

    return (
      <Well>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <SelectCategory
              categories={this.props.propertyValues}
              selectedCategoryName={this.props.activeProperty}
              activeCategoryChanged={this.handlePropertyChange}
            />
          </Col>
        </Row>
      </Well>
    );
  }
}