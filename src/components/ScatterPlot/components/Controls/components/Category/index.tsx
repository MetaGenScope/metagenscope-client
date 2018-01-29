import * as React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

import CategoryItem from './components/CategoryItem';
import './style.css';

type CategoryProps = {
  categories: string[];
  selectedCategoryName: string;
  categoryValues: {
    name: string;
    color: string;
  }[];
  colorByCategoryChanged(name: string): void;
  activeCategoryChanged(name?: string): void;
};

class Category extends React.Component<CategoryProps, {}> {
  constructor(props: CategoryProps) {
    super(props);

    this.focusChanged = this.focusChanged.bind(this);
    this.focusLost = this.focusLost.bind(this);
    this.handleColorByCategoryChange = this.handleColorByCategoryChange.bind(this);
  }

  focusLost() {
    this.props.activeCategoryChanged(undefined);
  }

  focusChanged(category: string) {
    this.props.activeCategoryChanged(category);
  }

  handleColorByCategoryChange(event: React.FormEvent<HTMLSelectElement>) {
    const newColorByCategory = event.currentTarget.value;
    this.props.colorByCategoryChanged(newColorByCategory);
  }

  render() {
    return(
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Color by category:</ControlLabel>
          <select
            className="form-control"
            value={this.props.selectedCategoryName}
            onChange={this.handleColorByCategoryChange}
          >
            {this.props.categories.map((categoryName, index) => {
              return (
                <option key={index} value={categoryName}>{categoryName.capitalize()}</option>
              );
            })}
          </select>
        </FormGroup>
        <FormGroup>
        <ul className="scatter-controls-categories" onMouseLeave={this.focusLost}>
          {this.props.categoryValues.map((categoryValue, index) => {
            return (
              <CategoryItem
                key={index}
                name={categoryValue.name}
                color={categoryValue.color}
                focusReceived={this.focusChanged}
              />
            );
          })}
        </ul>
        </FormGroup>
      </form>
    );
  }
}

export default Category;
