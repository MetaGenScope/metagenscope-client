import * as React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Circle } from 'react-google-maps';

import { parseLatLng } from './util';
import { default as regions, RegionType } from './util/ancestryReferences';

const API_KEY = 'AIzaSyDA8yTgTogBwNBm_YCSNQOZq1IFBflxBtg';

const circleFactory = function(key: number, region: RegionType, regionValue: number) {
  const circleProps = {
    options: {
      strokeColor: '#333333',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: region.Color,
      fillOpacity: 0.4,
    },
    center: parseLatLng(region.Centroid),
    radius: Math.sqrt(regionValue) * 2.7e6,
  };

  return <Circle key={key} {...circleProps} />;
};

export interface AncestryMapProps {
  ancestry: {[key: string]: number};
}

export interface AncestryMapState {
  activeRegionId?: string;
}

class StatefulAncestryMap extends React.Component<AncestryMapProps, AncestryMapState> {
  constructor(props: AncestryMapProps) {
    super(props);

    this.state = {
      activeRegionId: undefined,
    };
  }

  render() {
    const bounds = new google.maps.LatLngBounds({lat: 0, lng: 0}, {lat: 0, lng: 0});
    const regionIds = Object.keys(this.props.ancestry);
    regionIds.forEach(regionId => {
      const region = regions.find(elem => elem.ID === regionId)!,
            center = parseLatLng(region.Centroid);
      bounds.extend(center);
    });

    const markers = regionIds.map((regionId, index) => {
      const value = this.props.ancestry[regionId],
            region = regions.find(elem => elem.ID === regionId)!,
            center = parseLatLng(region.Centroid);

      // Side effect:
      bounds.extend(center);

      return circleFactory(index, region, value);
    });

    return (
        <GoogleMap
          options={{disableDefaultUI: true}}
          defaultZoom={2}
          defaultCenter={bounds.getCenter()}
        >
          {markers}
        </GoogleMap>
    );
  }
}

const AncestryMapInnards = withScriptjs(withGoogleMap<AncestryMapProps>((props) => {
  return <StatefulAncestryMap {...props} />;
}));

const AncestryMap: React.SFC<AncestryMapProps> = (props) => {
  return (
    <AncestryMapInnards
      ancestry={props.ancestry}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default AncestryMap;
