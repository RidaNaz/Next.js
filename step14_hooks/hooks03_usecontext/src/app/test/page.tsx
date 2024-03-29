// to get value of context in another route

"use client"
import React, {useContext} from 'react'
import { CountContext } from '../context'

const Test = () => {
    const page = useContext(CountContext)
  return (
    <div>{page.count}</div>
  )
}

export default Test
