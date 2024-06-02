import React from "react";
import Header from "../../../../layout/Header";
import Sidebar from "../../../../layout/Sidebar";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import InvoiceAddEdit from "./invoiceAddEdit";

const EditInvoice = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Edit Invoice"
            title="Dashboard"
            subtitle="Edit Invoice"
          />
          <InvoiceAddEdit />
        </div>
      </div>
    </div>
  );
};

export default EditInvoice;
