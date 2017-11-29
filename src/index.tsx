import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  (
  <Router>
    <Grid>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MetaGenScope :: Home</title>
        <link rel="canonical" href="http://metagenscope.com/" />
      </Helmet>
      <App />
    </Grid>
  </Router>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
