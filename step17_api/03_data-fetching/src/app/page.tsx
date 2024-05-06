import ClientFetching1 from "./client1";
import ClientFetching2 from "./client2";
import ServerStaticFetching from "./server1";
import ServerDynamicFetching from "./server2";

export default function Home() {
  return (
    <div>
      <ServerStaticFetching/>
      <br />
      <ServerDynamicFetching />
      <br />
      <ClientFetching1 />
      <br />
      <ClientFetching2 />
      <br />
    </div>
  )
}