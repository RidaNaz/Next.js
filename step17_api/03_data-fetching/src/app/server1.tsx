// By default there is 'force-cache' it means that by default the page is static and
// the data will be fetched statically at build time.

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // cache: "force-cache"          //no need to write this
    return res.json();
  };
  
  export default async function ServerStaticFetching() {
    const data = await getData();
  
    console.log("data: ", data);
  
    return <div>
        <h1>Server side static data fetching</h1>
        {data[1].name}
        </div>;
  }