import React from 'react';
import { Row, Col } from '@themesberg/react-bootstrap';
import CodeEditor from "./CodeEditor";

export interface DocumentationProps {
  title: string;
  description: React.ReactNode;
  example?: string | null;
  imports?: string | null;
  scope?: Record<string, any>;
  maxHeight?: string | null;
}

const Documentation: React.FC<DocumentationProps> = ({
  title,
  description,
  example = null,
  imports = null,
  scope = {},
  maxHeight = null
}) => (
  <>
    <div className="pt-2">
      <Row>
        <Col xs={12}>
          <h2 className="fs-5">{title}</h2>
          {description}
        </Col>
      </Row>
    </div>
    <div className="pb-5">
      <Row className="mt-4">
        <Col xs={12}>
          {example && (
            <CodeEditor code={example} scope={scope} imports={imports} maxHeight={maxHeight ?? undefined} />
          )}
        </Col>
      </Row>
    </div>
  </>
);

export default Documentation;