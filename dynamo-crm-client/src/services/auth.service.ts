import httpRequest from "../utils/httpRequest";

const httpLogin = async (body = {}) => {
  const response = await httpRequest("POST", "auth/sign-in", body);
  return response.data;
};

const httpSignup = async (body = {}) => {
  const response = await httpRequest("POST", "auth/sign-up", body);
  return response.data;
};

export { httpLogin, httpSignup };
