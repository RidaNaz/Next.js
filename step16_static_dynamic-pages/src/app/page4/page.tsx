import Link from "next/link"

export default async function Home() {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await fetchData.json()
    console.log(res)

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl mb-10">Generate Static Params</h1>
            <div className="flex flex-col gap-2">
                {
                    res.map((user: any, i: number) => {
                        return (
                            <Link href={`/${user.id}`} key={i} >{user.name}</Link>
                        )
                    })
                }
            </div>
        </main>
    )
}