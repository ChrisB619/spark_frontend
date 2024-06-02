import React from "react";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import InvoiceAddEdit from "./invoiceAddEdit";

const CreateInvoice = () => {
  return (
    <>
     
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Breadcrumbs
            maintitle="Create Invoice"
            title="Dashboard"
            subtitle="Create Invoice"
          />
          <InvoiceAddEdit />
        </div>
      </div>
    </>
  );
};

export default CreateInvoice;
