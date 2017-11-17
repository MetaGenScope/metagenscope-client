import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  (
  <Router>
    <Grid>
      <App />
    </Grid>
  </Router>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
