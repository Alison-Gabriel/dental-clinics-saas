import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div>
        <Hero />
      </div>
    </div>
  );
}
