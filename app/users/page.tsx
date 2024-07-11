import React from 'react';
import UsersTable from "@/app/users/UsersTable";

export interface User {
  id: number,
  name: string,
  email: string,
}

async function UsersPage() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
  );
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      <UsersTable users={users}/>
    </>
  );
}

export default UsersPage;