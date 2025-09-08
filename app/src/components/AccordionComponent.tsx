import React from 'react';
import { Card, Accordion } from '@themesberg/react-bootstrap';

export interface AccordionItemProps {
  id: number | string;
  eventKey: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface AccordionComponentProps {
  defaultKey?: string;
  data?: AccordionItemProps[];
  className?: string;
}

export const AccordionComponent: React.FC<AccordionComponentProps> = ({
  defaultKey,
  data = [],
  className = "",
}) => {
  const AccordionItem: React.FC<AccordionItemProps> = ({
    eventKey,
    title,
    description,
  }) => (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Button variant="link" className="w-100 d-flex justify-content-between">
        <span className="h6 mb-0 fw-bold">{title}</span>
      </Accordion.Button>
      <Accordion.Body>
        <Card.Body className="py-2 px-0">
          <Card.Text className="mb-0">{description}</Card.Text>
        </Card.Body>
      </Accordion.Body>
    </Accordion.Item>
  );

  return (
    <Accordion className={className} defaultActiveKey={defaultKey}>
      {data.map((d) => (
        <AccordionItem key={`accordion-${d.id}`} {...d} />
      ))}
    </Accordion>
  );
};

export default AccordionComponent;