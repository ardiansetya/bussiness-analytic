"use client"

import LoginForm from "@/components/features/auth/LoginForm";
import { authClient } from "@/server/better-auth/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginFormPage = () => {
  const router = useRouter();
  const session = authClient.useSession();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (session.isPending) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto flex min-h-screen flex-col justify-center">
        <div className="flex flex-row items-center justify-center">
          <LoginForm mode="/login" />
        </div>
      </div>
    </section>
  );
};

export default LoginFormPage;
