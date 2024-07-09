import React from 'react';

interface User {
  id: number,
  name: string,
}

async function UsersPage() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // {cache: 'no-store'}
    {next: {revalidate: 10}} // Fetch data from the backend every 10 seconds
  );
  const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersPage;