import Image from "next/image";
import Link from "next/link";

import heroImg from "@/public/doctor-hero.png";
import { Button } from "@/src/components/ui/button";

export function Hero() {
  return (
    <section className="bg-white pt-32 pb-16 lg:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col items-center justify-center lg:flex-row">
          <article className="max-w-3xl flex-2 space-y-6">
            <h1 className="text-3xl font-bold md:max-w-xl md:text-4xl lg:text-5xl">
              Encontre os melhores profissionais em um único local!
            </h1>

            <p className="text-sm text-zinc-700 md:max-w-xl md:text-lg lg:max-w-lg">
              Nós somos uma plataforma para profissionais da saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.
            </p>

            <Button asChild>
              <Link href="#clinics">Clínicas disponíveis</Link>
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={heroImg}
              alt=""
              className="object-cover lg:max-w-md"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  );
}
