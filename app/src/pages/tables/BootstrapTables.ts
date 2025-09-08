import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';
import { PageTrafficTable, RankingTable } from "../../components/Tables";

// This page shows traffic and ranking tables for analytics.
// If you migrate to Tailwind/shadcn, replace classes and use Headless UI <Breadcrumbs>.

const BootstrapTables: React.FC = () => {
  return (
    <>
      <div className="d-xl-flex justify-between flex-wrap flex-md-nowrap items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Bootstrap tables</h4>
          <p className="mb-0">
            Dozens of reusable components built to provide buttons, alerts, popovers, and more.
          </p>
        </div>
      </div>
      <PageTrafficTable />
      <RankingTable />
    </>
  );
};

export default BootstrapTables;