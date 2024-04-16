const getData = async () => {
    const res = await fetch("https://api.quotable.io/random?tags=technology", {
        cache: "no-store"     // dynamic page
    })
    const result = await res.json()
    return result
}

interface Data {
    _id: string
    content: string
}

export default async function Home() {
    const data: Data = await getData()
    return (
        <main>
            <h1>Dynamic Page</h1>
            <p>{data.content}</p>
        </main>
    );
}
