// "use server"        module-level method that is applied to all functions in module.

export default function Home() {

  const getData = async () => {
    "use server"    // inline function level method
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await fetchData.json()
    return res
  }
}

// In server components, you can use both methods.