import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import SummaryCard from "@/components/features/dashboard/SummaryCard";
import { getSession } from "@/server/better-auth/server";
import { HydrateClient } from "@/trpc/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <HydrateClient>
      <main className="min-h-screen px-6 py-4 bg-secondary">
        {/* header dashboard */}
        <DashboardHeader />
        <SummaryCard />
      </main>
    </HydrateClient>
  );
}
