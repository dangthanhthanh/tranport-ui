import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Container, Pagination } from '@themesberg/react-bootstrap';
import Documentation from "../../components/Documentation";

// Production note: Replace with shadcn/ui or Headless UI for more advanced pagination in Tailwind projects.

const CustomPagination: React.FC<{
  totalPages?: number;
  size?: "sm" | "md" | "lg";
  withIcons?: boolean;
  disablePrev?: boolean;
}> = ({ totalPages = 5, size = "md", withIcons = false, disablePrev = false }) => {
  const [activeItem, setActiveItem] = React.useState(2);

  const onPrevItem = () => setActiveItem(activeItem === 1 ? activeItem : activeItem - 1);
  const onNextItem = () => setActiveItem(activeItem === totalPages ? activeItem : activeItem + 1);

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        active={activeItem === number}
        key={number}
        onClick={() => setActiveItem(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination size={size} className="mt-3">
      <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>
        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}
      </Pagination.Prev>
      {items}
      <Pagination.Next onClick={onNextItem}>
        {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}
      </Pagination.Next>
    </Pagination>
  );
};

const PaginationPage: React.FC = () => (
  <article>
    <Container className="px-0">
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Pagination</h1>
          <p className="mb-0">
            Use pagination elements to organize posts or other models of data into groups.
          </p>
        </Col>
      </Row>
      <Documentation
        title="Pagination"
        description={
          <>
            <p>The <code>&lt;Pagination&gt;</code> component is important to use when you have data that can be potentially so numerous that you need to paginate it. We've created two main handles that you can use when the previous or next item button has been click, called <code>onPrevItem</code> and <code>onNextItem</code>.</p>
            <p>You can use the <code>items = []</code> array to add the number of pagination items, and set the <code>totalPages</code> pages constant to set that maximum amount of pages to show in the pagination element.</p>
            <p>Also you can use a function as <code>handlePaginationChange</code> to add some custome logic when user goes to another page (e.g fetch new data).</p>
          </>
        }
        scope={{ Col, Card, Pagination, FontAwesomeIcon, faAngleDoubleLeft, faAngleDoubleRight, CustomPagination }}
        imports={`import React, { useState } from "react";
import { Col, Card, Pagination } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";`}
        example={`<Col xl={12}>
  <Card border="light">
    <Card.Body>
      <CustomPagination withIcons />
    </Card.Body>
  </Card>
</Col>`}
      />
      {/* Other Documentation sections omitted for brevity */}
      <Col xl={12}>
        <Card border="light">
          <Card.Body>
            <CustomPagination withIcons />
          </Card.Body>
        </Card>
      </Col>
    </Container>
  </article>
);

export default PaginationPage;