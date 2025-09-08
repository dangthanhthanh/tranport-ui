import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faThumbsUp, faAngleDown, faAngleUp, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Container, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

const ButtonsPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Buttons</h1>
          <p className="mb-0">
            Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
          </p>
        </Col>
      </Row>
      {/* Documentation components for examples, sizing, outline, link, icons, block level, disabled, dropdowns, sizing, direction */}
    </Container>
  </article>
);

export default ButtonsPage;