"use client";
import {useContext} from "react";
import {CartContext} from "./context"

const Shop = () => {
    const obj = useContext(CartContext)
    console.log (obj)

    const arr = [
        {name : "Tops", id:1},
        {name : "Shirts", id:2},
        {name : "Pants", id:3}
    ]

    return (
        <div className= "ml-10">
        <h1>Shopping</h1>
        <ol>
            {arr.map((val, i)=>{
                return(
                    <li key={i}>
                        <span className="mr-5 ">{val.id}</span>{val.name}{" "}
                        <span className="ml-5" onClick={()=>obj.add(val.id)}>Add to cart</span>
                    </li>
                )
            })}
        </ol>
        </div>
    )
}

export default Shop