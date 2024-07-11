'use client';

import React, {useState} from 'react';
import {sort} from "fast-sort";
import {User} from "@/app/users/page";

interface Props {
  users: User[]
}

function UsersTable({users}: Props) {
  const [sortedUsers, setSortedUsers] = useState(users);
  const sortByName = () => setSortedUsers(sort(users).asc(user => user.name));
  const sortByEmail = () => setSortedUsers(sort(users).asc(user => user.email));

  return (
    <table className='table table-bordered'>
      <thead>
      <tr>
        <th><button onClick={sortByName}>Name</button></th>
        <th><button onClick={sortByEmail}>Email</button></th>
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