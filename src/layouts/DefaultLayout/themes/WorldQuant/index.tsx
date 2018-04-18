import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import './style.css';

const heroBackground = require('./images/background.png');
const wordMark = require('./images/word_mark.png');

const rowStyle: React.CSSProperties = {
  backgroundImage: `url( ${heroBackground} )`,
};

export const WorldQuantHeader: React.SFC<{}> = (props) => {
  return (
    <div>
      <Row>
        <div className="top-header" style={rowStyle}>
          <img src={wordMark} />
          <p>The World Quant Initiative for Quantitative Prediction at Weill Cornell Medicine would
            like to thank you for your participation in the Global Antibiotic Resistance Mapping
            Project at the 2018 Milken Global Conference.</p>
        </div>
      </Row>
      <Row className="bottom-header">
        <Col lg={6}>
          <p style={{fontSize: '1.5em'}}>Your participation is accelerating our work on one of
            humanity’s greatest health risks and the development of new treatments for
            antibiotic-resistant bacteria.</p>
        </Col>
        <Col lg={6}>
          <p>Our scientists analyzed the bacterial and viral DNA present on your cell phone that
            was gathered on-site.
            <br /><br />
            Anonymized results will be available after the conference.</p>
        </Col>
      </Row>
    </div>
  );
};

export const WorldQuantFooter: React.SFC<{}> = (props) => {
  return (
    <Row className="world-quant-footer">
      <Col>
        <div className="footer-wrapper">
          <img src={wordMark} />
          <p>&copy; Copyright 2018</p>
        </div>
      </Col>
    </Row>
  );
};
