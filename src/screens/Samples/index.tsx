import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AnalysisGroupDetail from './scenes/SampleDetail';

interface SamplesProps {
  isAuthenticated: boolean;
}

const Samples: React.SFC<SamplesProps> = (props) => {
  return (
    <Switch>
      <Route
        path="/samples/:uuid"
        render={(routeProps) => (
          <AnalysisGroupDetail
            sampleUuid={routeProps.match.params.uuid}
          />
        )}
      />
    </Switch>
  );
};

export default Samples;
