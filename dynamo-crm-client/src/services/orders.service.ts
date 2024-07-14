import httpRequest from "../utils/httpRequest";

const httpGetOrders = async (page: number) => {
  const response = await httpRequest("GET", `/orders?page=${page}&limit=20`);
  return response;
};

export { httpGetOrders };
