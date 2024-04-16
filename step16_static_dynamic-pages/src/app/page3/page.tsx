const getData = async () => {
    const res = await fetch("https://api.quotable.io/random?tags=technology", {

        // cache: "force-cache"    (there is no need to write this ISR)

        next: {                        //
            revalidate: 5              // ISR (incremental static regeneration)
        }                             //
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
        <main >
            <h1 >Incremental Static Regeneration</h1>
            <p>{data.content}</p>
        </main>
    );
}
