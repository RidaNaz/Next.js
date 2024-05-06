"use client"
import { useEffect, useState } from "react"

export default function ClientFetching1() {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <h1>Client side data fetching</h1>
      <h1>useEffect</h1>
      {data.map((item)=>(item.name))}
    </div>
  )
}