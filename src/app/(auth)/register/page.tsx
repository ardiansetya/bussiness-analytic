"use client";

import RegisterForm from "@/components/features/auth/RegisterForm";
import { authClient } from "@/server/better-auth/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const RegisterFormPage = () => {
  const router = useRouter();

  const session = authClient.useSession();

  useEffect(() => {
    if (!session ) {
      router.push("/login");
    }
  }, [session, router]);

  if (session.isPending ) {
    return <div>Loading...</div>;
  }
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto flex min-h-screen flex-col justify-center">
        <div className="flex flex-row items-center justify-center">
          <RegisterForm mode="/register" />
        </div>
      </div>
    </section>
  );
};

export default RegisterFormPage;
