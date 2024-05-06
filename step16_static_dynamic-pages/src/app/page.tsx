
// By default there is 'force-cache' it means that by default the page is static and will be rendered statically at build time.


const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology", {
    cache: "force-cache"          //static page
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
      <h1 >Static Page</h1>
      <p>{data.content}</p>
    </main>
  );
}
