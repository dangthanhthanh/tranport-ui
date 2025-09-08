import React from 'react';
import { Col, Row, Badge, Button, Container } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

const BadgesPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Badges</h1>
          <p className="mb-0">
            Use badges to add extra labeling to alongside titles or to categorize items.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Example"
        description={
          <p>
            Use the <code>&lt;Badge&gt;</code> component to show and highlight labeled text. You can update the colors using the following modifier classes (ie. <code>bg-primary</code>, <code>bg-secondary</code>):
          </p>
        }
        scope={{ Badge }}
        imports={`import { Badge } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <Badge bg="primary" className="me-1">Primary</Badge>
  <Badge bg="secondary" className="me-1">Secondary</Badge>
  <Badge bg="success" className="me-1">Success</Badge>
  <Badge bg="danger" className="me-1">Danger</Badge>
  <Badge bg="warning" text="dark" className="me-1">Warning</Badge>
  <Badge bg="info" className="me-1">Info</Badge>
  <Badge bg="light" text="dark" className="me-1">Light</Badge>
  <Badge bg="dark">Dark</Badge>
</React.Fragment>`}
      />
      {/* More Documentation components for sizing, pill, notification, etc. */}
    </Container>
  </article>
);

export default BadgesPage;