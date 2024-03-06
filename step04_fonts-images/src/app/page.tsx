import Image from 'next/image';

export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      <Image
        src="/dekstop-photo.jpg"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="dekstop image"
      />                                      // for dekstop image
      <Image
        src="/dekstop.png"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />                                     // for mobile image
    </div>
    //...
  );
}                                