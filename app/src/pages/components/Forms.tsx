import React from 'react';
import moment from "moment-timezone";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Container, InputGroup } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

const FormsPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Forms</h1>
          <p className="mb-0">
            Use form elements such as text inputs, textareas, file uploads and many more to get input from you users.
          </p>
        </Col>
      </Row>
      {/* Documentation components for input, validation, selects, textarea, file upload, checkbox, radio, datepicker */}
    </Container>
  </article>
);

export default FormsPage;