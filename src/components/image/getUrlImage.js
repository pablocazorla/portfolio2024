const extension = "webp";
const scale = 760;

const getUrlImage = (src, name) => {
  return `${src}/${name}_${scale}.${extension}`;
};

export default getUrlImage;
