import React from 'react';
import { Col, Row, Button, Tooltip, Container, OverlayTrigger } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

// For Tailwind/shadcn/ui, use Radix Tooltip or Headless UI Tooltip.

const TooltipsPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Tooltips</h1>
          <p className="mb-0">
            Use tooltips to indicate extra content for your users when hovering over an element.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Example"
        description={
          <p>
            Use the <code>&lt;OverlayTrigger&gt;</code> and <code>&lt;Tooltip&gt;</code> to show extra information when hovering or clicking on a given element.
          </p>
        }
        scope={{ Button, Tooltip, OverlayTrigger }}
        imports={`import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';`}
        example={`<OverlayTrigger
  trigger={['hover', 'focus']}
  overlay={<Tooltip>Tooltip on top</Tooltip>}>
  <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>
</OverlayTrigger>`}
      />
      <Documentation
        title="Tooltip placement"
        description={
          <p>
            You can also easily position the <code>&lt;Tooltip&gt;</code> component in any direction using the <code>placement="*"</code> attribute.
          </p>
        }
        scope={{ Button, Tooltip, OverlayTrigger }}
        imports={`import { Button, Tooltip, OverlayTrigger } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Tooltip on top</Tooltip>}>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>
  </OverlayTrigger>
  <OverlayTrigger placement="right" trigger={['hover', 'focus']} overlay={<Tooltip>Tooltip on right</Tooltip>}>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on right</Button>
  </OverlayTrigger>
  <OverlayTrigger placement="bottom" trigger={['hover', 'focus']} overlay={<Tooltip>Tooltip on bottom</Tooltip>}>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on bottom</Button>
  </OverlayTrigger>
  <OverlayTrigger placement="left" trigger={['hover', 'focus']} overlay={<Tooltip>Tooltip on left</Tooltip>}>
    <Button variant="secondary" size="sm" className="m-2">Tooltip on left</Button>
  </OverlayTrigger>
</React.Fragment>`}
      />
      <OverlayTrigger placement="top" trigger={['hover', 'focus']} overlay={<Tooltip>Tooltip on top</Tooltip>}>
        <Button variant="secondary" size="sm" className="m-2">Tooltip on top</Button>
      </OverlayTrigger>
    </Container>
  </article>
);

export default TooltipsPage;