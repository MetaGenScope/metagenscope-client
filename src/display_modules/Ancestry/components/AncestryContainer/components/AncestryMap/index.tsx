import * as React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, CircleProps, Circle } from 'react-google-maps';

const API_KEY = 'AIzaSyDA8yTgTogBwNBm_YCSNQOZq1IFBflxBtg';

export interface AncestryMapProps {
  markers: CircleProps[];
}

const AncestryMapInnards = withScriptjs(withGoogleMap<AncestryMapProps>((props) => {
  // let foo: GoogleMap = undefined;
  return (
      <GoogleMap
        defaultZoom={1}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        // ref={el => foo = el}
      >
        {props.markers.map((anotationProps, index) => {
          // const projection = foo.getProjection(),
          //       bar = projection.fromLatLngToPoint(anotationProps.center as google.maps.LatLng);
          // anotationProps.center = bar;
          return (<Circle key={index} visible={true} {...anotationProps} />);
        })}
      </GoogleMap>
  );
}));

const AncestryMap: React.SFC<AncestryMapProps> = (props) => {
  return (
    <AncestryMapInnards
      markers={props.markers}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default AncestryMap;
