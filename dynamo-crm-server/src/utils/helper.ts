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

const getPagination = (query: any, count: number) => {
  const DEFAULT_PAGE_LIMIT = 10;
  const DEFAULT_PAGE_NUMBER = 1;
  const page = Math.abs(Number(query.page)) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(Number(query.limit)) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  const paginationData = {
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  };
  return {
    skip,
    limit,
    paginationData,
  };
};

export { uploadFiles, getPagination };
