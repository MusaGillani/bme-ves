import { Cloudinary } from "@cloudinary/url-gen";

export function getAdvancedVideoPropertiesVideo(videoName: string) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "di2hlv4py",
    },
    url: {
      analytics: false,
    },
  });

  const myVideo = cld.video(videoName);

  return myVideo;
}
