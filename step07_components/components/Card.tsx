const Card = () => {
    return (
        <p>component with arrow function</p>
    )
}                              // for arrow components

export default Card               //method 1 of export

// Arrow function must be `export default` in last like line no:7



export const Card1 = () => {        // method 2 of export
    return (
        <p>component with arrow function</p>
    )
}                              // for arrow components

export function Card2 () {
    return (
        <p>component with name function</p>
    )
}