import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      <h1>Yahallo{session && `, ${session.user!.email}`}!</h1>
      <Link href='users'>Users</Link>
      <ProductCard/>
    </main>
  )
}
