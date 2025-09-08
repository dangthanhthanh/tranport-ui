import React from 'react';
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";
import Progress from "../../components/Progress";

// Use shadcn/ui Progress for Tailwind projects for best a11y and styling.

const ProgressPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Progress</h1>
          <p className="mb-0">
            Use progress bars to indicate percentage based components.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Example"
        description={
          <p>
            Use the <code>&lt;Progress&gt;</code> component to show progress bars or loaders for your app. You can set the value of the bar using the <code>value</code> attribute. You can also change the appearance using the <code>variant="*"</code> attributes.
          </p>
        }
        scope={{ Progress }}
        imports={`import Progress from "src/components/Progress";`}
        example={`<Progress variant="primary" label="Primary color" value={25} />`}
      />
      {/* More Documentation omitted for brevity */}
      <Progress variant="primary" label="Demo Progress" value={50} />
    </Container>
  </article>
);

export default ProgressPage;