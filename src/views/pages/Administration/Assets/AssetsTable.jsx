import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AssetsTable = () => {
  const data = [
    {
      id: 1,
      assetuser: "Bernardo Galaviz",
      assetname: "Dell Laptop",
      assetid: "AST-0001",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 2,
      assetuser: "Catherine Manseau",
      assetname: "Canon Portable Printer",
      assetid: "AST-0002",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 3,
      assetuser: "Jeffery Lalor",
      assetname: "Dell Laptop",
      assetid: "AST-0003",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "1215",
      status: "Pending",
    },
    {
      id: 4,
      assetuser: "Jeffrey Warden",
      assetname: "Seagate Harddisk",
      assetid: "AST-0004",
      purchasedate: "5 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "300",
      status: "Pending",
    },
    {
      id: 5,
      assetuser: "John Due",
      assetname: "Canon Portable Printer",
      assetid: "AST-0005",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "300",
      status: "Approved",
    },
    {
      id: 6,
      assetuser: "John Smith",
      assetname: "Seagate Harddisk",
      assetid: "AST-0006",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "300",
      status: "Approved",
    },
    {
      id: 7,
      assetuser: "Lesley Grauer",
      assetname: "Dell Laptop",
      assetid: "AST-0007",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "300",
      status: "Approved",
    },
    {
      id: 8,
      assetuser: "Loren Gatlin",
      assetname: "Seagate Harddisk",
      assetid: "AST-0008",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "2500",
      status: "Approved",
    },
    {
      id: 9,
      assetuser: "Mike Litorus",
      assetname: "Canon Portable Printere",
      assetid: "AST-0009",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 10,
      assetuser: "Richard Miles",
      assetname: "Dell Laptop",
      assetid: "AST-00010",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 11,
      assetuser: "Tarah Shropshire",
      assetname: "Seagate Harddisk",
      assetid: "AST-00011",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "2500",
      status: "Returned",
    },
    {
      id: 12,
      assetuser: "Wilmer Deluna",
      assetname: "Canon Portable Printer",
      assetid: "AST-00012",
      purchasedate: "14 Jan 2019",
      warranty: "12 Months",
      warrantyend: "1 Jan 2023",
      amount: "2500",
      status: "Returned",
    },
  ];

  const columns = [
    {
      title: "Asset User",
      dataIndex: "assetuser",
      sorter: (a, b) => a.assetuser.length - b.assetuser.length,
    },
    {
      title: "Asset Name",
      dataIndex: "assetname",
      render: (text) => <strong>{text}</strong>,
      sorter: (a, b) => a.assetname.length - b.assetname.length,
    },
    {
      title: "Asset Id",
      dataIndex: "assetid",
      sorter: (a, b) => a.assetid.length - b.assetid.length,
    },
    {
      title: "Purchase Date",
      dataIndex: "purchasedate",
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },

    {
      title: "Warranty",
      dataIndex: "warranty",
      sorter: (a, b) => a.warranty.length - b.warranty.length,
    },

    {
      title: "Warranty End",
      dataIndex: "warrantyend",
      sorter: (a, b) => a.warrantyend.length - b.warrantyend.length,
    },

    {
      title: "Amount",
      dataIndex: "amount",
      render: (text) => <span>$ {text}</span>,
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => (
        <div className="dropdown action-label text-center">
          <Link
            className="btn btn-white btn-sm btn-rounded dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i
              className={
                text === "Pending"
                  ? "far fa-dot-circle text-danger"
                  : text === "Approved"
                  ? "far fa-dot-circle text-success"
                  : "far fa-dot-circle text-info"
              }
            />{" "}
            {text}
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-danger" /> Pending
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-success" /> Approved
            </Link>
            <Link className="dropdown-item" to="#">
              <i className="far fa-dot-circle text-info" /> Returned
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      render: () => (
        <div className="dropdown dropdown-action text-end">
          <Link
            to="#"
            className="action-icon dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="material-icons">more_vert</i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_asset"
            >
              <i className="fa fa-pencil m-r-5" /> Edit
            </Link>
            <Link
              className="dropdown-item"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete"
            >
              <i className="fa fa-trash m-r-5" /> Delete
            </Link>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
          <Table
            className="table-striped"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

export default AssetsTable;
