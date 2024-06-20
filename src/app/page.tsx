import Image from "next/image";
import { Header } from "./components/header";
import { Card } from "./components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Card />
      <div>Inspiração para viagens futuras</div>
    </main>
  );
}
