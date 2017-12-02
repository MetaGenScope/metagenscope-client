import * as React from 'react';
import { FormGroup, Radio } from 'react-bootstrap';

type PlotSourceProps = {
  activeSource: string;
  sources: string[];
  handleSourceChange(newSource: string): void;
};

class PlotSource extends React.Component<PlotSourceProps, {}> {
  render() {
    return(
      <form>
        <p>Plot calculated similarity by</p>
        <FormGroup>
          {this.props.sources.map((source, index) => {
            const checked = source === this.props.activeSource;
            return (
              <Radio
                key={index}
                name="plotSource"
                checked={checked}
                onChange={() => this.props.handleSourceChange(source)}
              >
                {source}
              </Radio>
            );
          })}
        </FormGroup>
      </form>
    );
  }
}

export default PlotSource;
