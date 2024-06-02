import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import ScheduleTimingTable from "./ScheduleTimingTable";
import ScheduleTimingModal from "../../../../../components/ScheduleTiming/ScheduleTimingModal";

const ScheduleTiming = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Schedule timing"
            title="Dashboard"
            subtitle="Jobs / Schedule timing"
          />
          <ScheduleTimingTable />
          <ScheduleTimingModal />
        </div>
      </div>
    </>
  );
};

export default ScheduleTiming;
