import React from 'react';
import Link from "next/link";

function NavBar() {
  return (
    <div className='flex bg-slate-200 p-5 space-x-5'>
      <Link href='/' className='mr-5'>Next.js</Link>
      <Link href='users'>Users</Link>
      <Link href='api/auth/signin'>Log In</Link>
    </div>
  );
}

export default NavBar;