import * as React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import { getSampleGroupSamples } from '../../../../../../services/api';
import { SampleType } from '../../../../../../services/api/models/sample';

const SAMPLE_COUNT_THRESHOLD = 10;

interface SampleListProps {
  sampleGroupUuid: string;
}

interface SampleListState {
  error?: string;
  samples?: SampleType[];
  isExpanded: boolean;
}

class CollapsingSampleList extends React.Component<SampleListProps, SampleListState> {

  constructor(props: SampleListProps) {
    super(props);

    this.state = {
      error: undefined,
      samples: undefined,
      isExpanded: false,
    };
  }

  componentDidMount() {
    getSampleGroupSamples(this.props.sampleGroupUuid)
      .then((samples) => {
        const isExpanded = samples.length <= SAMPLE_COUNT_THRESHOLD;
        this.setState({ samples, isExpanded });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <Panel id="collapsible-panel-example-1" expanded={this.state.isExpanded}>
        <Panel.Heading onClick={() => this.setState({ isExpanded: !this.state.isExpanded })}>
          <b>Samples</b> <span style={{fontSize: '0.8em'}}>Click to expand</span>
        </Panel.Heading>
        {this.state.samples === undefined && this.state.error === undefined &&
          <Panel.Body>
            <h3>Loading...</h3>
          </Panel.Body>
        }
        {this.state.error !== undefined &&
          <Panel.Body>
            <h3>Error:</h3>
            <p>{this.state.error}</p>
          </Panel.Body>
        }
        {this.state.samples !== undefined &&
          <Panel.Collapse>
            <ListGroup>
              {this.state.samples.map((sample, index) => {
                const url = `/samples/${sample.uuid}`;
                return <ListGroupItem key={index} href={url}>{sample.name}</ListGroupItem>;
              })}
            </ListGroup>
          </Panel.Collapse>
        }
      </Panel>
    );
  }
}

export default CollapsingSampleList;
