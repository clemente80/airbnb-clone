import Image from "next/image";
import { Header } from "./components/header";
import { Card } from "./components/card";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#e7e7e2]">
      <div className='w-full flex justify-center text-[14px] py-5 font-semibold underline cursor-pointer'>Saiba mais sobre a categoria Icônicos</div>
      <main className="flex flex-1 h-fit flex-col items-center justify-between bg-white border border-t-[#d5d5d0] rounded-tr-3xl rounded-tl-3xl">
        <Header />
        <Card />
        <div>Inspiração para viagens futuras</div>
      </main>
    </div>
  );
}
