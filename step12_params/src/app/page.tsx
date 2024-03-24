import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Params</h1>
      <ul>

        <li><Link href = "/123">Product 1</Link></li>
        <li><Link href = "/456">Product 2</Link></li>
        <li><Link href = "/789">Product 3</Link></li>
// the value of href attributes are actually params that we passing

      </ul>
    </main>
  );
}
