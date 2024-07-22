'use client';

// import HeavyComponent from "@/app/components/HeavyComponent";
import {useState} from "react";
// import dynamic from "next/dynamic";
// import _ from 'lodash';

// const HeavyComponent = dynamic(
//   () => import('@/app/components/HeavyComponent'),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false // server-side rendering
//   }
// );

export default function Home() {
  const [isVisible, setVisible] = useState<boolean>(false);

  return (
    <main>
      <h1>Yahallo!</h1>
      {/*<button onClick={() => setVisible(true)} className='btn btn-primary'>Show</button>*/}
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default;
          const users = [
            {name: 'c'},
            {name: 'b'},
            {name: 'a'}
          ];
          const sorted = _.orderBy(users, ['name']);
          console.log(sorted);
        }}
        className='btn btn-primary'>Show
      </button>
      {/*{isVisible && <HeavyComponent/>}*/}
    </main>
  )
}