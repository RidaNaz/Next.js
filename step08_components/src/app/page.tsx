import Card from "../../components/Card";                // method 1
import {Card1,Card2} from "../../components/Card";             // method 2

export default function Home() {
  return (
    <>
    <h1>Hello Rida!</h1>
    <Card/>
    <Card1/>
    <Card2/>
    </>
  );
} 
// the component under `page.tsx` must be `export default`, either the component is named function or arrow function.