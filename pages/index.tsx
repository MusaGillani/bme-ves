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
  { link: "gamma_gpijtf", name: "Gamma Camera" },
  { link: "MRI_Machine_mh8vu0", name: "MRI Machine" },
  { link: "Ultrasound_Machine_jfnexw", name: "Ultrasound Machine " },
  { link: "Echocardiography_xaxsrq", name: "Echocardiography Machine" },
  { link: "Angiograph_Machine_gjlf6l", name: "Angiography Machine " },
  { link: "CT_Scanner_jbhsif", name: "CT Scanner" },
  { link: "SPECT_h0jgln", name: "SPECT Scanner" },
  { link: "PET_Scan_sa41lw", name: "PET Scanner" },
  { link: "Endoscopy_Machine_wel1do", name: "Endoscope " },
  { link: "Fluroscopy_Machine_yoejv1", name: "Fluroscope Machine " },
  { link: "Mammography_Machine_ewa1xi", name: "Mammography Machine" },
  { link: "Endoscopy_Machine_wel1do", name: "Broncoscope" },
  { link: "Dental_X_ray_gptcpd", name: "Colonoscopy" },
  { link: "Dental_X_ray_gptcpd", name: "Dental Xray Camera" },
  { link: "X_ray_ot3ami", name: "Xray Camera" },
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
                    query: { name: name, link: link },
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
