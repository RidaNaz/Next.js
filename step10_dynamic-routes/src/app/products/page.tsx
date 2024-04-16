import Link from "next/link"

export default function Products() {
    return (
        <>
            <h3>Product List</h3>
            <ul>
                <li>
                    <Link href="/products/product1">Product 1</Link>
                </li>
                <li>
                    <Link href="/products/product2">Product 2</Link>
                </li>
                <li>
                    <Link href="/products/product3">Product 3</Link>
                </li>
            </ul>
        </>
    )
}

// for data fetching
export /*default*/ async function Products2() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await data.json()
    console.log(res)
    return (
        <>
            <h3>Product List</h3>
            <br />
            <ol>
                {
                    res.map((item: any, i: number) => {
                        return (
                            <li>{<Link href={`/products/${item.id}`}>{item.title}</Link>}</li>
                        )
                    })
                }
            </ol>

        </>
    )
}