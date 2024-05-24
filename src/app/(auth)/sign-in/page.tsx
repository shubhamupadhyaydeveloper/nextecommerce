"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { TsignIn } from "@/types/types";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignInForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof TsignIn>>({
    resolver: zodResolver(TsignIn),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData: z.infer<typeof TsignIn>) => {
    try {
      const response = await signIn("credential", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      if (response?.url) {
        toast.success("user login successful");
        router.push("/");
      } else {
        toast.error("email or password is not correct try again");
      }
      console.log(response);
    } catch (error: any) {
      console.log("erron in sigup form " + error?.response.data.message);
      toast.error(error.response.data.error);
    } finally {
      form.reset();
    }
  };

  const githubSignup = async () => {
    await signIn("github");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-sm w-full shadow-md py-7">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back to Nikee</CardTitle>
          <CardDescription>We are glad to see you here again</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  login
                </Button>
              </form>
              <form action={githubSignup}>
                <Button type="submit" variant="outline" className="w-full">
                  login with GitHub
                </Button>
              </form>
            </Form>
          </div>
          <div className="mt-4 text-center text-sm">
            create a new account?{" "}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
