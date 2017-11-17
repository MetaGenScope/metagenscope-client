import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import FAQ from './FAQ';
import Team from './Team';

const content = 'The path from sequencing data to visualizations can be long '
  + 'and tedious. Researchers have to spend too much time running basic '
  + 'analyses and most tools rely on the command terminal. MetaGenScope '
  + 'takes the work out of routine analysis and serves a hub for '
  + 'metagenomics research. Researchers can use MetaGenScope to share data, '
  + 'share charts, and compare projects.';

class About extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={10} lgOffset={1}>
          <h1>About</h1>
          <p>MetaGenScope automatically visualizes metagenomic data.</p>
          <p>{content}</p>
          <hr/><br />
          <FAQ />
          <hr/><br />
          <Team />
        </Col>
      </Row>
    );
  }
}

export default About;
