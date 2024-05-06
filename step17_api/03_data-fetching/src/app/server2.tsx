async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",     //to fetch data dynamically you just need to write this
    });
  
    // Recommendation: handle errors
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
  
  
  export default async function ServerDynamicFetching() {
    const data = await getData();
  
    return <div>
        <h1>Server side dynamic data fetching</h1>
        {data[2].name}
        </div>;
  }