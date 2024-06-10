import uploadToCloud from "../config/cloudinary";

const uploadFiles = async (files: Express.Multer.File[]): Promise<string[]> => {
  const uploadPromises = files.map(async (file: Express.Multer.File) => {
    const b64 = Buffer.from(file.buffer).toString("base64");
    const dataURI = "data:" + file.mimetype + ";base64," + b64;
    const res = await uploadToCloud(dataURI);
    return res.secure_url;
  });

  const attachments = await Promise.all(uploadPromises);
  return attachments;
};

export { uploadFiles };
