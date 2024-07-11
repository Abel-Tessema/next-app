import React from 'react';
import UsersTable from "@/app/users/UsersTable";

interface Props {
  searchParams: {sortOrder: string}
}

function UsersPage({searchParams: {sortOrder}}: Props) {
  return (
    <>
      <h1>Users</h1>
      <UsersTable sortOrder={sortOrder}/>
    </>
  );
}

export default UsersPage;