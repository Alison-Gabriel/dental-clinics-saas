import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import cardImg from "@/public/foto1.png";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

export function Clinics() {
  return (
    <section id="clinics" className="bg-zinc-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Clínicas disponíveis
        </h2>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden pt-0">
            <CardHeader className="relative h-60 w-full overflow-hidden p-0">
              <Image
                src={cardImg}
                alt=""
                fill
                className="object-cover transition-all hover:scale-105"
                quality={100}
              />
            </CardHeader>

            <CardContent className="flex justify-between">
              <div className="space-y-2">
                <CardTitle>Clínica centro</CardTitle>
                <CardDescription>Rua X, Centro, Sorocaba/SP</CardDescription>
              </div>

              <div className="size-4 rounded-full bg-emerald-500" />
            </CardContent>

            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/clinic/123">
                  Agendar horário <ArrowRightIcon />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </section>
  );
}
