import * as React from 'react';

import CategoryItem from './components/CategoryItem';
import './style.css';

type CategoryProps = {
  categoryName: string;
  categoryValues: {
    name: string;
    color: string;
  }[];
  activeCategoryChanged(name?: string): void;
};

class Category extends React.Component<CategoryProps, {}> {
  constructor(props: CategoryProps) {
    super(props);

    this.focusChanged = this.focusChanged.bind(this);
    this.focusLost = this.focusLost.bind(this);
  }

  focusLost() {
    this.props.activeCategoryChanged(undefined);
  }

  focusChanged(category: string) {
    this.props.activeCategoryChanged(category);
  }

  render() {
    return(
      <div>
        <p>{this.props.categoryName.capitalize()} category</p>
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
      </div>
    );
  }
}

export default Category;
