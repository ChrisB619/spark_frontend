import React from "react";

import Breadcrumbs from "../../../../components/Breadcrumbs";
import UserFilter from "./UserFilter";
import UsersTable from "./UsersTable";
import AddUserModal from "../../../../components/Administration/Users/AddUseModal";

const Users = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Breadcrumbs
          maintitle="Users "
          title="Dashboard"
          subtitle="Users"
          modal="#add_user"
          name="Add User"
        />
        <UserFilter />
        <UsersTable />
        <AddUserModal />
      </div>
    </div>
  );
};

export default Users;
