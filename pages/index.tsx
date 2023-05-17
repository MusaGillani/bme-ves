import Header from "@/components/Header";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const videoNames = Array(50).fill({ link: "gamma_gpijtf", name: "Gamma" });
const Home: NextPage = () => {
  const [names, setNames] = useState(videoNames);

  const search = (val: string) => {
    console.log("val: ", val);
    if (val === "") return;
    const filters = names.filter(({ name }) =>
      name.toLowerCase().includes(val.toLowerCase())
    );
    setNames(filters);
  };

  return (
    <main
      className={`flex flex-col min-h-screen h-full min-w-screen w-full ${inter.className}`}
    >
      <div className="w-2/3 mx-auto my-10">
        <Header />
      </div>
      <div className="mb-2 w-2/3 mx-auto">
        <Input
          type="Search"
          id="Search"
          placeholder="Search"
          onChange={(e) => search(e.target.value.trim())}
        />
      </div>
      <div className="w-2/3 h-full m-5 mx-auto border-2 border-solid rounded-lg p-5">
        <ul className="m-auto w-full">
          {names.map(({ name, link }, index) => {
            return (
              <li key={index} className="my-2 flex justify-between w-full">
                <p>{name}</p>
                <Link
                  href={{
                    pathname: "/videos",
                    query: { name: link },
                  }}
                >
                  <ExternalLink />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;
