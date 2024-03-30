"use client"
import React, { useState } from "react";
import {CartContext} from "./context"

interface Obj {
    id: number
    name: string
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<Obj[]>([])

    const add = (obj: Obj) => setCart([...cart, obj])

    const del = (id: number) => {
        const newCart = cart.filter((val) => val.id !== id)
        return setCart([...newCart])
    }
    
    return (
    <div>
        <CartContext.Provider value={{cart,add,del}}>
            {children}
        </CartContext.Provider>
        </div>
    )
}

export default CartProvider