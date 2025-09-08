import React from 'react';
import { Col, Row, Button, Popover, Container, OverlayTrigger } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

// For Tailwind/shadcn/ui, use Radix or Headless UI for popover.

const ExamplePopover = (
  <Popover>
    <Popover.Title as="h3">Popover on top</Popover.Title>
    <Popover.Content>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
    </Popover.Content>
  </Popover>
);

const PopoversPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Popovers</h1>
          <p className="mb-0">
            Use popovers to indicate extra content for your users when clicking on an element.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Example"
        description={
          <p>The <code>&lt;OverlayTrigger&gt;</code> and <code>&lt;Popover&gt;</code> component can be used to show extra information by clicking on a given element.</p>
        }
        scope={{ Button, Popover, OverlayTrigger }}
        imports={`import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';`}
        example={`<OverlayTrigger
  trigger="click"
  overlay={
    <Popover>
      <Popover.Title>Popover on top</Popover.Title>
      <Popover.Content>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Content>
    </Popover>
  }>
  <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>
</OverlayTrigger>`}
      />
      <Documentation
        title="Popover placement"
        description={
          <p>The <code>&lt;Popover&gt;</code> can also be positioned accordingly, using the <code>placement="*"</code> attribute.</p>
        }
        scope={{ Button, Popover, OverlayTrigger }}
        imports={`import { Button, Popover, OverlayTrigger } from '@themesberg/react-bootstrap';`}
        example={`<React.Fragment>
  <OverlayTrigger placement="top" trigger="click" overlay={...}><Button>Popover on top</Button></OverlayTrigger>
  <OverlayTrigger placement="right" trigger="click" overlay={...}><Button>Popover on right</Button></OverlayTrigger>
  <OverlayTrigger placement="bottom" trigger="click" overlay={...}><Button>Popover on bottom</Button></OverlayTrigger>
  <OverlayTrigger placement="left" trigger="click" overlay={...}><Button>Popover on left</Button></OverlayTrigger>
</React.Fragment>`}
      />
      <OverlayTrigger placement="top" trigger="click" overlay={ExamplePopover}>
        <Button variant="secondary" size="sm" className="m-2">Popover on top</Button>
      </OverlayTrigger>
    </Container>
  </article>
);

export default PopoversPage;