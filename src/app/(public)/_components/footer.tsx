import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto bg-white px-4 py-8 text-sm text-zinc-700 md:px-6 md:text-base lg:px-8">
      <p className="text-center">
        Todos direitos reservados @ {new Date().getFullYear()} -{" "}
        <Link
          href="https://github.com/Alison-Gabriel"
          target="_blank"
          aria-label="Github do desenvolvedor"
          className="underline-offset-4 hover:underline"
        >
          @Alison-Gabriel
        </Link>
      </p>
    </footer>
  );
}
