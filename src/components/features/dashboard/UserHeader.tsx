import { getSession } from "@/server/better-auth/server";
import Image from "next/image";

const UserHeaderDashboard = async () => {
  const session = await getSession();
  return (
    <div className="flex items-center gap-3">
      <Image
        src={session?.user.image ?? ""}
        alt={session?.user.name ?? "user image"}
        width={36}
        height={36}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold">Ardian</h3>
        <p className="text-muted-foreground text-sm">Bussiness Owner</p>
      </div>
    </div>
  );
};

export default UserHeaderDashboard;
