import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Bell, Search } from "lucide-react";
import UserHeaderDashboard from "./UserHeader";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between">
      <div>
        {" "}
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome Back! Here's your financial overview
        </p>
      </div>

      {/* right side */}
      <div className="flex gap-4 items-center">
        <div className="relative">
          <Search
            size={18}
            className="absolute top-4 left-3 text-muted-foreground"
          />
          <Input className="px-10 rounded-xl py-6" placeholder="Search..." />
        </div>

        <Button size={"lg"} variant={"outline"}>
          {" "}
          <Bell />{" "}
        </Button>

        <Separator orientation="vertical" />

        <UserHeaderDashboard />
      </div>
    </div>
  );
};

export default DashboardHeader;
