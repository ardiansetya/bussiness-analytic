import DashboardHeader from "@/components/features/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";
import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  if (session) {
    void api.post.getLatest.prefetch();
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
