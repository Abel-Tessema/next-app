'use client';

import {useRouter} from "next/navigation";

function NewUserPage() {
  const {push} = useRouter();

  return (
    <button
      className='btn btn-primary'
      onClick={() => push('/users')}
    >
      Create
    </button>
  );
}

export default NewUserPage;