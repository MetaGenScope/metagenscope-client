import * as React from 'react';

import Header from './components/Header';
import Footer from  './components/Footer';

interface LayoutProps {
  title: string;
  isAuthenticated: boolean;
}

class DefaultLayout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <div>
        <Header title={this.props.title} isAuthenticated={this.props.isAuthenticated} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
