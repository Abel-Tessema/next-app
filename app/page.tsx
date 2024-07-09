import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Yahallo!</h1>
      <Link href='/users'>Users</Link>
    </main>
  )
}
