import { getSession } from "@/server/better-auth/server";
import { AppSidebar } from "./AppSidebar";

const MySidebarProvider = async () => {
  const session = await getSession();
  if (!session) {
    return null;
  }
  return <AppSidebar />;
};

export default MySidebarProvider;
