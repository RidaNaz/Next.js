import Cart from "./cart"
import Shop from "./shop"
import CartProvider from "./cartProvider"

export default function Home () {
    return (
        <div>
            <h1 className= "mt-10 mb-4 text-center text-[32px] text-white">Context API</h1>
            <h2 className= " text-center tetx-[24px]">Cart Functionality</h2>
            <CartProvider>
            <Shop />
            <hr />
            <Cart />
            </CartProvider>
        </div>
    )
}