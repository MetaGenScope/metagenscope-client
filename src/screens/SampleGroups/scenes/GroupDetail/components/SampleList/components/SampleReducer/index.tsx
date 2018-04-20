import * as React from 'react';
import { FormGroup, ControlLabel } from 'react-bootstrap';

import { SampleType } from '../../../../../../../../services/api/models/sample';

import ExpandingSampleList from './components/ExpandingSampleList';

interface SampleReducerProps {
  samples: SampleType[];
}

interface SampleReducerState {
  sampleSearchString: string;
}

class SampleReducer extends React.Component<SampleReducerProps, SampleReducerState> {

  constructor(props: SampleReducerProps) {
    super(props);

    this.state = {
      sampleSearchString: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({sampleSearchString: event.currentTarget.value});
  }

  render() {
    const regex = this.state.sampleSearchString;
    let matchingSamples = this.props.samples;
    if (regex.length > 0) {
      matchingSamples = this.props.samples.filter(sample => {
        return sample.name.search(regex) > -1;
      });
    }

    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Search samples</ControlLabel>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Unique sample identifier"
              value={this.state.sampleSearchString}
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
        <ExpandingSampleList samples={matchingSamples} />
      </div>
    );
  }
}

export default SampleReducer;
