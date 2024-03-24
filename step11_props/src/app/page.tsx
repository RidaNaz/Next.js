import PropsTest from "../app/components/PropsTest"

export default function Home() {
  return (
    <div>
      <PropsTest name="Rida" cast="Sheikh" />
      <PropsTest name="Naeem" />        // cast has a default value of "Sheikh"
    </div>
  );
}
