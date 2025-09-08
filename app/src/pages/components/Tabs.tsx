import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Col, Row, Nav, Tab, Card, Container } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

// Use Headless UI Tabs or shadcn/ui Tabs for Tailwind production projects.

const TabsPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Tabs</h1>
          <p className="mb-0">
            Use tabs to partition important data into easily navigable and interchangeable elements.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Example"
        description={
          <>
            <p>The <code>&lt;Tab&gt;</code> component is great if you want to show multiple resources of content with an easy partitioning using nav tabs. First you need to use the <code>&lt;Tab.Container&gt;</code> component to wrap around the content.</p>
            <p>The first part of the component will be the <code>&lt;Nav&gt;</code> component where you can add as many <code>&lt;NavItem&gt;</code> components as you'd like. The <code>&lt;Nav.Link&gt;</code> component can then be used to set the tab panel that it should open up when clicking on it.</p>
            <p>The <code>&lt;Tab.Content&gt;</code> component and its subcomponents are the content that will be shown based on which <code>&lt;Nav.Link&gt;</code> is being clicked on. The <code>eventKey="*"</code> attribute should be used for both the <code>&lt;Nav.Link&gt;</code> and <code>&lt;Tab.Content&gt;</code> to link the two together.</p>
          </>
        }
        scope={{ Nav, Tab }}
        imports={`import { Nav, Tab } from '@themesberg/react-bootstrap';`}
        example={`<Tab.Container defaultActiveKey="home">
  <Nav fill variant="pills" className="flex-column flex-sm-row">
    <Nav.Item>
      <Nav.Link eventKey="home" className="mb-sm-3 mb-md-0">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="profile" className="mb-sm-3 mb-md-0">Profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="messages" className="mb-sm-3 mb-md-0">Messages</Nav.Link>
    </Nav.Item>
  </Nav>
  <Tab.Content>
    <Tab.Pane eventKey="home" className="py-4">...</Tab.Pane>
    <Tab.Pane eventKey="profile" className="py-4">...</Tab.Pane>
    <Tab.Pane eventKey="messages" className="py-4">...</Tab.Pane>
  </Tab.Content>
</Tab.Container>`}
      />
    </Container>
  </article>
);

export default TabsPage;