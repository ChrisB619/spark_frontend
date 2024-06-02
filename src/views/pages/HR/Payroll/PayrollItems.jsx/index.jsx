import React from "react";

import Breadcrumbs from "../../../../../components/Breadcrumbs";
import { Link } from "react-router-dom";
import AdditionTable from "./AdditionTable";
import OvertimeTable from "./OvertimeTable";
import DeductionTable from "./DeductionTable";
import AddAdditionModal from "../../../../../components/modelpopup/AddAdditionModal";
import EditAdditionModal from "../../../../../components/modelpopup/EditAdditionModal";
import AddandEditOvertime from "../../../../../components/modelpopup/AddandEditOvertime";
import DeleteModal from "../../../../../components/modelpopup/deletePopup";
import AddDeduction from "../../../../../components/modelpopup/AddDeduction";
import EditDeduction from "../../../../../components/modelpopup/EditDeduction";

const PayrollItems = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Payroll Items"
            title="Dashboard"
            subtitle="Payroll Items"
          />
          <div className="page-menu">
            <div className="row">
              <div className="col-sm-12">
                <ul className="nav nav-tabs nav-tabs-bottom">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="tab"
                      to="#tab_additions"
                    >
                      Additions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-bs-toggle="tab"
                      to="#tab_overtime"
                    >
                      Overtime
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      data-bs-toggle="tab"
                      to="#tab_deductions"
                    >
                      Deductions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane show active" id="tab_additions">
              <AdditionTable />
            </div>

            <div className="tab-pane" id="tab_overtime">
              <OvertimeTable />
            </div>

            <div className="tab-pane" id="tab_deductions">
              <DeductionTable />
            </div>
          </div>
        </div>
      </div>

      <AddAdditionModal />
      <EditAdditionModal />
      <AddandEditOvertime />
      <AddDeduction />
      <EditDeduction />
      <DeleteModal Name="Delete" />
    </>
  );
};

export default PayrollItems;
