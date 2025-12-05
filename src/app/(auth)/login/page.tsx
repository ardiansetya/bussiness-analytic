"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/server/better-auth/client";

const LoginPage = () => {
  const handleLoginGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };
  return (
    <div>
      <Button onClick={handleLoginGithub}>Login</Button>
    </div>
  );
};

export default LoginPage;
