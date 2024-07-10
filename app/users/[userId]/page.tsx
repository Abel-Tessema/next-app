import React from 'react';

interface Props {
  params: {userId: number}
}

function UserDetailPage({params: {userId}} :Props) {
  return (
    <div>User {userId}</div>
  );
}

export default UserDetailPage;