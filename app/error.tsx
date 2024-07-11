'use client';

import React from 'react';

interface Props {
  error: Error,
  reset: () => void
}

function ErrorPage({ error, reset }: Props) {
  /*
  Normally, you log the error somewhere permanent using tools like Sentry.
  And the Retry button implemented here lets users try accessing any page,
  as many times as they hit the button. Meaning, the error is logged every
  time they do so. Thus, it is not a good idea to implement the retry logic
  here in a wide-encompassing error.tsx file.
   */
  console.log(error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  );
}

export default ErrorPage;