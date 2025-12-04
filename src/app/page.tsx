
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getSession } from "@/server/better-auth/server";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
	const hello = await api.post.hello({ text: "from tRPC" });
	const session = await getSession();

	if (session) {
		void api.post.getLatest.prefetch();
	}

	return (
    <HydrateClient>
      <main className="min-h-screen">
        {" "}
        <SidebarTrigger />
        mbud
      </main>
    </HydrateClient>
  );
}
