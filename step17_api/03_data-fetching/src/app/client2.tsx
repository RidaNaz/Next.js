"use client"
import useSWR from "swr"

export default function ClientFetching2() {

// For normal RESTful APIs with JSON data, first you need to create a fetcher function, which is just a wrapper of the native `fetch`.
    const fetcher = (url: string) => fetch(url).then((res) => res.json())

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    // render data
    return (
        <div>
            <h1>Client side data fetching</h1>
            <h2>SWR Library</h2>
            <h3>{data[0].name}</h3>
        </div>
    )
}



