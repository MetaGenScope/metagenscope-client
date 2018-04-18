import * as React from 'react';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import Footer from  './components/Footer';

// Themes
import { WorldQuantHeader, WorldQuantFooter } from './themes/WorldQuant';

interface LayoutProps {
  title: string;
  isAuthenticated: boolean;
  theme?: string;
}

const DefaultLayout: React.SFC<LayoutProps> = (props) => {
  let header = <Header title={props.title} isAuthenticated={props.isAuthenticated} />;
  let footer = <Footer />;
  if (props.theme !== undefined) {
    if (props.theme === 'world-quant') {
      header = (
        <div>
          <WorldQuantHeader />
          {header}
        </div>
      );
      footer = <WorldQuantFooter />;
    }
  }
  return (
    <Grid>
      {header}
      {props.children}
      {footer}
    </Grid>
  );
};

export default DefaultLayout;
