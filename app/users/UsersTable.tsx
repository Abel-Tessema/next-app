import React from 'react';
import {sort} from "fast-sort";
import Link from "next/link";

interface User {
  id: number,
  name: string,
  email: string,
}

interface Props {
  sortOrder: string
}

async function UsersTable({sortOrder}: Props) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
  );
  const users: User[] = await response.json();
  const sortedUsers = sort(users).asc(
    sortOrder === 'email'
      ? user => user.name
      : user => user.email
  );

  return (
    <table className='table table-bordered'>
      <thead>
      <tr>
        <th><Link href='?sortOrder=name'>Name</Link></th>
        <th><Link href='?sortOrder=email'>Email</Link></th>
      </tr>
      </thead>
      <tbody>
      {sortedUsers.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default UsersTable;