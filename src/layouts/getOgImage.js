import { getImage } from "astro:assets";
import dataSite from "@/data/data.json";

export const getOgImage = async (img) => {
  const imagePath = `/src/assets/img/${img}`;

  const matches = await import.meta.glob(
    "/src/assets/img/**/*.{jpeg,jpg,png,gif,webp,svg}"
  );

  if (!matches[imagePath]) {
    return "";
  }

  const image = matches[imagePath]();

  const optimizedBackground = await getImage({
    src: image,
    format: "avif",
    width: 600,
  });

  return `${dataSite.baseURL}${optimizedBackground?.src ?? ""}`;
};

export const getOgUrl = (pathname) => {
  return `${dataSite.baseURL}${pathname}`;
};

export const getOgLogo = () => {
  return `${dataSite.baseURL}/logo.svg`;
};
