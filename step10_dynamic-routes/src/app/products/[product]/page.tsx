export /*default*/ function product0 (props:any) {

    return (
        <>
            <div>product details</div>
            <p>{props.params.product}</p>
        </>
    )
}

// when I pass props in this function,I get "params & search params" as its property. now, I want params only so its better practice to destructure the code.


// The "Destructured" code:
export default function product ({params}:{params:{product:string}}) {

    return (
        <>
            <div>product details</div>
            <p>{params.product}</p>
        </>
    )
}

// dynamic route with data fetching
export /*default*/ async function product2 ({params}:{params:{product:string}}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
    const res = await data.json()
    console.log (res)
    return (
        <>
            <div>product details</div>
            <p>{res.id}</p>
            <p>{res.title}</p>
            <p>{res.detail}</p>
            <p>{res.body}</p>
        </>
    )
}