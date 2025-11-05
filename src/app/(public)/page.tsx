import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Clinics } from "./_components/clinics";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div>
        <Hero />
        <Clinics />
      </div>
    </div>
  );
}
