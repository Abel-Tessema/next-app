import Image from "next/image";
import animeGirl from '@/public/images/Anime Girl.jpg'

export default async function Home() {
  return (
    <main className='relative h-screen'>
      {/*<Image src={animeGirl} alt='Anime girl' />*/}
      {/*<h1 className='font-poppins'>Yahallo!</h1>*/}
      <h1>Yahallo!</h1>
      {/*<Image*/}
      {/*  src='https://bit.ly/react-cover'*/}
      {/*  alt='Anime girl'*/}
      {/*  // width={300}*/}
      {/*  // height={170}*/}
      {/*  fill*/}
      {/*  // style={{objectFit: 'contain'}}*/}
      {/*  // style={{objectFit: 'cover'}}*/}
      {/*  className='object-cover'*/}
      {/*  // sizes='100vw'*/}
      {/*  sizes='(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw'*/}
      {/*  quality={100} // 1-100. Default is 75.*/}
      {/*  priority*/}
      {/*/>*/}
    </main>
  )
}
