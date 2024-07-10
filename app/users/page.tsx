import React from 'react';
import UsersTable from "@/app/users/UsersTable";

async function UsersPage() {
  return (
    <>
      <h1>Users</h1>
      <UsersTable/>
    </>
  );
}

export default UsersPage;