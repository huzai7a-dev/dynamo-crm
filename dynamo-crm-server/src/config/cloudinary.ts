import { v2 } from "cloudinary";

const cloudinary = v2;
cloudinary.config({
  cloud_name: "dagjnev0g",
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

async function uploadToCloud(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
export default uploadToCloud;
