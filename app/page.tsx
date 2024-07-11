import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Yahallo!</h1>
      <Link href='users'>Users</Link>
      <ProductCard/>
    </main>
  )
}
