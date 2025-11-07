import { redirect } from "next/navigation";

import getSession from "@/lib/get-session";

export default async function Dashboard() {
  const session = await getSession();
  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <main>
      <h1>Hello from Dashboard!</h1>
    </main>
  );
}
