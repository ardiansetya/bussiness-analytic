import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <HydrateClient>
      <main className="min-h-screen px-6 py-4 bg-secondary">
        {/* header dashboard */}
       <DashboardHeader/>

       
      </main>
    </HydrateClient>
  );
}
