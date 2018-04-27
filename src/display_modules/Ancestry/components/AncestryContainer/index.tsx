import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CircleProps } from 'react-google-maps';

import { AncestryType } from '../../../../services/api/models/queryResult';

import AncestryMap from './components/AncestryMap';
import references from './components/AncestryMap/util/ancestryReferences';
import detailReferences from './components/AncestryMap/util/detailReference';

const convertCentroid = function(centroid: string) {
  const bracketsRemoved = centroid.replace('[', '').replace(']', ''),
        components = bracketsRemoved.split(',').map(elem => parseFloat(elem));
  return {
    lat: components[0],
    lng: components[1],
  };
};

const getAncestryId = function(ambigId: string): string {
  // Try to look up directly
  const referenceById = references.find(elem => elem.ID === ambigId);
  if (referenceById !== undefined) {
    return referenceById.ID;
  }

  // Try ambiguous direct look up
  const ambigReferenceById = references.find(elem => elem.ID === `AMBIG_${ambigId}`);
  if (ambigReferenceById !== undefined) {
    return ambigReferenceById.ID;
  }

  // Try by subcategory
  const subcategoryId = detailReferences[ambigId][0],
        subcategory = references.find(elem => elem.ID === subcategoryId);
  if (subcategory !== undefined) {
    return subcategory.ID;
  }

  // Try by primary category
  const categoryId = detailReferences[ambigId][1],
        category = references.find(elem => elem.ID === categoryId);
  if (category !== undefined) {
    return category.ID;
  }

  throw new Error(`Could not find anything for ID: ${ambigId}`);
};

const createMapAnnotations = function(data: AncestryType): CircleProps[] {
  const sampleName = Object.keys(data.samples)[0];
  const trueData = data.samples[sampleName].populations;
  const populationNames = Object.keys(trueData);
  const circles: CircleProps[] = populationNames.map((populationName, index) => {
    // Try to look
    const regionId = getAncestryId(populationName),
          reference = references.find(elem => elem.ID === regionId)!;
    return {
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: reference.Color,
      fillOpacity: 0.35,
      center: convertCentroid(reference.Centroid),
      radius: trueData[populationName] * 1000,
    };
  });
  return circles;
};

export interface AncestryProps {
  data: AncestryType;
}

const AlphaDivContainer: React.SFC<AncestryProps> = (props) => {
  const markers = createMapAnnotations(props.data);

  console.log(markers);

  return (
    <Row>
      <Col lg={12}>
        <AncestryMap markers={markers} />
      </Col>
    </Row>
  );
};

export default AlphaDivContainer;
