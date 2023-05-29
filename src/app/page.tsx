import Image from "next/image";

import Button from "components/Button";

export default function Home() {
  return (
    <main className="min-h-[80vh] flex-col items-center justify-between p-24">
      <div className="relative flex flex-col place-items-center">
        <Image
          className="relative rounded-full"
          src="/assets/images/calang-io.jpg"
          alt="Calangio Logo"
          width={300}
          height={250}
          priority
        />
        <h1 className="left-0 top-0 flex w-full justify-center text-5xl font-bold">
          Calang.io CheckList
        </h1>
        <Button name={"World"} className={"text-xl font-semibold"} />
      </div>
    </main>
  );
}
