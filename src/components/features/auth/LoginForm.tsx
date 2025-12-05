"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useForm } from "@tanstack/react-form";
import { loginSchema, type LoginSchema } from "@/schemas/loginSchema";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { authClient } from "@/server/better-auth/client";
import type { ProviderOptions } from "better-auth";

const LoginForm = ({ mode }: { mode: string }) => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as LoginSchema,
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You have logged in successfully!");
    },
  });

  const handleOAuthSignIn = async (provider: string) => {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
      toast(`Signing in with ${provider}...`);
    } catch (error) {
      console.error(error);
      toast.error(`Failed to sign in with ${provider}. Please try again.`);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader>
        <div className="flex max-w-md items-center justify-center gap-2 rounded-md bg-gray-200 px-2 py-1">
          <Link
            href={"/login"}
            className={
              buttonVariants({ variant: "link" }) +
              `text-primary ml-2 w-1/2 hover:bg-white ${
                mode === "/login" ? "bg-white" : "bg-gray-200"
              }`
            }>
            Login
          </Link>
          <Link
            href={"/register"}
            className={
              buttonVariants({ variant: "link" }) +
              `text-primary mr-2 w-1/2 hover:bg-white ${
                mode === "/register" ? "bg-white" : "bg-gray-200"
              }`
            }>
            Register
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await form.handleSubmit();
          }}>
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your email address"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
          <Button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600">
            Login
          </Button>
        </form>
      </CardContent>
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-sm text-gray-500">Or continue with</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>
      <CardFooter className="flex justify-center">
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignIn("google")}>
            <FcGoogle size={18} /> Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => handleOAuthSignIn("github")}>
            <FaGithub size={18} /> GitHub
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
