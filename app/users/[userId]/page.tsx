import React from 'react';
import {notFound} from "next/navigation";

interface Props {
  params: {userId: number}
}

function UserDetailPage({params: {userId}} :Props) {
  if (userId > 10) notFound();

  return (
    <div>User {userId}</div>
  );
}

export default UserDetailPage;