import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const metaUltra = require('./images/MetaUltra.png');

const pipelineStyle = {
  width: '100%',
};

class Docs extends React.Component {
  render() {
    return (
      <Row>
        <Helmet>
          <title>MetaGenScope :: Documenation</title>
        </Helmet>
        <Col lg={10} lgOffset={1}>
          <h1>The Pipeline</h1>
          <p>MetaGenScope obtains its results from a straightforward repeatable pipeline that we call MetaUltra.</p>
          <img src={metaUltra} style={pipelineStyle} />

          <hr />

          <h1>Tools and Projects</h1>
          <h4> MetaGenScope relies on publically available tools and projects</h4>
          <Link to="http://ccb.jhu.edu/software/kraken/">Kraken</Link><br />
          <Link to="https://bitbucket.org/biobakery/metaphlan2">MetaPhlAn2</Link><br/>
          <Link to="http://clark.cs.ucr.edu/">Clark</Link><br/>
          <Link to="https://bitbucket.org/biobakery/humann2/wiki/Home">HUMAnN2</Link><br/>
          <Link to="https://github.com/snayfach/MicrobeCensus">MicrobeCensus</Link><br/>
          <Link to="http://hmpdacc.org/">The Human Microbe Project</Link>

          <hr />

          <h1>Web API</h1>
          <h4>MetaGenScope provides an API to download processed data</h4>
          <p>This feature coming soon.</p>

          <hr />

          <h1>Citing MetaGenScope</h1>
          <p> MetaGenScope is not yet published.</p>
        </Col>
      </Row>
    );
  }
}

export default Docs;
