"use server"      // module level method

export  const getData = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await fetchData.json()
    return res
}

// I can use this action in any component weather it is server or client.
