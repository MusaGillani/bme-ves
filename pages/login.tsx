import { NextPage } from "next";
import { Inter } from "next/font/google";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Header from "@/components/Header";

const formSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email("enter a valid email"),
  password: z.string({ required_error: "password is required" }),
});

export type schema = z.infer<typeof formSchema>;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Login: NextPage = () => {
  const form = useForm<schema>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: schema) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
  }

  return (
    <main
      className={`flex flex-col justify-center min-h-screen h-full min-w-screen w-full ${inter.className}`}
    >
      <div className="mx-auto w-2/3">
        <Header />
      </div>
      <div className="mx-auto p-10 my-5 bg-white w-2/3 h-2/3 border-2 border-solid rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="my-5" type="submit">
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default Login;
