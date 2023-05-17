import { useRouter } from "next/router";
import { ReactEventHandler } from "react";
import { AdvancedVideo, lazyload } from "@cloudinary/react";

import { getAdvancedVideoPropertiesVideo } from "../lib/advancedVideoProperties";
import { Inter } from "next/font/google";

import { videoCodec } from "@cloudinary/url-gen/actions/transcode";
import { auto, vp9 } from "@cloudinary/url-gen/qualifiers/videoCodec";
import Header from "@/components/Header";
import Link from "next/link";
import { ChevronsLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const playFunction: ReactEventHandler = () => {
  // Dummy function
};

function Videos() {
  const sources = [
    {
      type: "mp4",
      codecs: ["avc1.4d002a"],
      transcode: videoCodec(auto()),
    },
    {
      type: "webm",
      codecs: ["vp8", "vorbis"],
      transcode: videoCodec(vp9()),
    },
  ];

  const router = useRouter();
  const { name } = router.query;
  return (
    <div className="w-full h-full md:w-2/3 m-auto">
      <Link href="/" className="my-5">
        <Header />
      </Link>
      <AdvancedVideo
        cldVid={getAdvancedVideoPropertiesVideo(name as string)}
        controls
        sources={sources}
        playsInline
        muted
        onPlay={playFunction}
        plugins={[lazyload()]}
      />
      <Button
        className={`my-5 ${inter.className}`}
        onClick={() => {
          router.push("/");
        }}
      >
        <ChevronsLeft />
        Go back
      </Button>
    </div>
  );
}

export default Videos;
