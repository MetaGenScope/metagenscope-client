import * as React from 'react';
import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import Footer from  './components/Footer';

interface LayoutProps {
  title: string;
  isAuthenticated: boolean;
}

class DefaultLayout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <Grid>
        <Header title={this.props.title} isAuthenticated={this.props.isAuthenticated} />
        {this.props.children}
        <Footer />
      </Grid>
    );
  }
}

export default DefaultLayout;
