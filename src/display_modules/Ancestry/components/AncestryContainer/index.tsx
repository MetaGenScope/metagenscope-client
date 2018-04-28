import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { AncestryType } from '../../../../services/api/models/queryResult';

import AncestryMap from './components/AncestryMap';
import { getAncestryId } from './components/AncestryMap/util';

const createAncestry = function(data: AncestryType) {
  type ReducerType = {[key: string]: number};

  const sampleName = Object.keys(data.samples)[0],
        trueData = data.samples[sampleName].populations,
        populationNames = Object.keys(trueData);

  const reducer = function(prev: ReducerType, populationName: string) {
    const value = trueData[populationName],
          regionId = getAncestryId(populationName),
          previousValue = prev[regionId] !== undefined ? prev[regionId] : 0;
    prev[regionId] = previousValue + value;
    return prev;
  };

  const regionValues = populationNames.reduce<ReducerType>(reducer, {});

  return regionValues;
};

export interface AncestryProps {
  data: AncestryType;
}

const AlphaDivContainer: React.SFC<AncestryProps> = (props) => {
  const ancestry = createAncestry(props.data);
  return (
    <Row>
      <Col lg={4}>
        <p>[Doughnut Chart]</p>
      </Col>
      <Col lg={8}>
        <AncestryMap ancestry={ancestry} />
      </Col>
    </Row>
  );
};

export default AlphaDivContainer;
