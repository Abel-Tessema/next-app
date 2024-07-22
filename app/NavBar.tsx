'use client';

import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

function NavBar() {
  const {status, data: session} = useSession();

  return (
    <div className='flex bg-slate-200 p-5 space-x-5'>
      <Link href='/' className='mr-5'>Next.js</Link>
      <Link href='users'>Users</Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' &&
          <>
              <div>{session?.user?.name}</div>
              <Link href='api/auth/signout'>Log Out</Link>
          </>
      }
      {status === 'unauthenticated' && <Link href='api/auth/signin'>Log In</Link>}
    </div>
  );
}

export default NavBar;