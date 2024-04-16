export async function generateStaticParams() {
  const fetchData = await fetch ("https://jsonplaceholder.typicode.com/users")
  const res = await fetchData.json ()
   
    return res.map((user:any) => ({
      id: user.id.toString(),
    }))
  }
                // this function is always used in dynamic route only.
// the above code is used to generate dynamic page statically at build time.



const page = async ({params} : any) => {
    console.log (params.id)
    const fetchData = await fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const res = await fetchData.json ()
  return (
    <div>{res.name}</div>
  )
}

export default page