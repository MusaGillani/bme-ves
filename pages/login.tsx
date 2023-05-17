import { NextPage } from "next";
import { Inter } from "next/font/google";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Login: NextPage = () => {
  return (
    <main
      className={`flex flex-col justify-center min-h-screen h-full min-w-screen w-full ${inter.className}`}
    >
      <div className="mx-auto w-2/3">
        <Header />
      </div>
      <div className="mx-auto p-10 my-5 bg-white w-2/3 h-2/3 border-2 border-solid rounded-lg">
        <div className="mb-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="my-2">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <Button className="my-5">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
    </main>
  );
};

export default Login;
