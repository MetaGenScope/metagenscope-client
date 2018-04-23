import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './style.css';

const wordMark = require('./images/word_mark.svg');

export const WorldQuantHeader: React.SFC<{}> = (props) => {
  const paddingStyle: React.CSSProperties = {
    paddingTop: '155px',
    paddingBottom: '155px',
  };

  return (
    <Grid fluid={true}>
      <Row className="top-header">
        <Col lg={12}>
          <Grid>
            <Row style={paddingStyle}>
              <Col lg={8} md={12} sm={12}>
                <img src={wordMark} className="worldquant-logo" />
                <p>The WorldQuant Initiative for Quantitative Prediction at Weill Cornell Medicine would
                  like to thank you for your participation in the Global Antibiotic Resistance Mapping
                  Project at the 2018 Milken Global Conference.</p>
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
      <Row style={{backgroundColor: '#000000', marginBottom: '60px'}}>
        <Col lg={12}>
          <Grid>
            <Row className="bottom-header">
              <Col lg={6} md={12} sm={12}>
                <p>Your participation is accelerating our work on one of
                  humanity’s greatest health risks and the development of new treatments for
                  antibiotic-resistant bacteria.</p>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <p>Our scientists analyzed the bacterial and viral DNA present on your cell phone that
                  was gathered on-site.</p>
                <p>Anonymized results will be available after the conference.</p>
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};

export const WorldQuantSampleHeader: React.SFC<{}> = (props) => {
  const miniBackground = require('./images/inter-hero.jpg');
  const miniStyle: React.CSSProperties = {
    backgroundImage: `url( ${miniBackground} )`,
    backgroundSize: 'cover',
    backgroundPosition: 'auto',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <Grid fluid={true}>
      <Row style={{marginBottom: '60px', ...miniStyle}} className="top-header">
        <Col lg={12}>
          <Grid>
            <Row>
              <Col lg={8} md={12} sm={12}>
                <img src={wordMark} className="worldquant-logo" />
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};

export const WorldQuantFooter: React.SFC<{}> = (props) => {
  return (
    <Grid fluid={true}>
      <Row className="world-quant-footer">
        <Col lg={12}>
          <Grid>
            <Row>
              <Col lg={12} className="footer-wrapper">
                <img src={wordMark} className="worldquant-logo" />
                <p>&copy; Copyright 2018</p>
              </Col>
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};
