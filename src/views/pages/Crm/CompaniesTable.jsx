import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const CompaniesTable = ({ columns, data }) => (
  <Table
    className="table-striped"
    columns={columns}
    dataSource={data}
    rowKey={(record) => record.id}
  />
);

export default CompaniesTable;
