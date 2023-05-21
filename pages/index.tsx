import Header from "@/components/Header";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useSearch from "@/hooks/useSearch";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const videoNames = [
  { link: "gamma_gpijtf", name: "Gamma" },
  { link: "", name: "MRI Machine" },
  { link: "", name: "Ultrasound Machine " },
  { link: "", name: "Gamma Camera" },
  { link: "", name: "Echocardiography Machine" },
  { link: "", name: "Angiography Machine " },
  { link: "", name: "CT Scanner" },
  { link: "", name: "SPECT Scanner" },
  { link: "", name: "PET Scanner" },
  { link: "", name: "Fluroscope Machine " },
  { link: "", name: "Mammography Machine" },
  { link: "", name: "Endoscope " },
  { link: "", name: "Broncoscope" },
  { link: "", name: "Colonoscopy" },
  { link: "", name: "Dental Xray Camera" },
  { link: "", name: "Xray Camer" },
];
const Home: NextPage = () => {
  const [searchVal, setSearchVal] = useState("");

  const filteredNames = useSearch(searchVal, videoNames);
  const handleSearch = (val: string) => {
    setSearchVal(val);
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
          className="border-2"
          type="Search"
          id="Search"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value.trim())}
        />
      </div>
      <div className="w-2/3 h-full m-5 mx-auto border-2 border-solid rounded-lg p-5">
        <ul className="m-auto w-full">
          {filteredNames.map(({ name, link }, index) => {
            return (
              <li key={index} className="my-2 flex justify-between w-full">
                <p className="overflow-hidden text-ellipsis md:text-2xl font-bold">
                  {name}
                </p>
                <Link
                  href={{
                    pathname: "/videos",
                    query: { name: link },
                  }}
                  className="flex"
                >
                  <p className="mx-5 md:block hidden">watch</p>
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
