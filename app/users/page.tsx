import React, {Suspense} from 'react';
import UsersTable from "@/app/users/UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string }
}

function UsersPage({searchParams: {sortOrder}}: Props) {
  return (
    <>
      <h1>Users</h1>
      <Link href='users/new'>
        <button className='btn'>New</button>
      </Link>
      <Suspense fallback={<p>Loading…</p>}>
        <UsersTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  );
}

export default UsersPage;