import axios, { AxiosInstance } from "axios";

type AuthHeaders = {
  Authorization: `Bearer ${string}`;
};

const getAuthToken = (): string => {
  const token = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;

  if (!token) {
    throw new Error("API_AUTH_TOKEN is not defined in environment variables");
  }

  return token;
};

const getApiUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not defined in environment variables"
    );
  }

  return url;
};

const headers: AuthHeaders = {
  Authorization: `Bearer ${getAuthToken()}`,
};

const api: AxiosInstance = axios.create({
  baseURL: getApiUrl(),
  headers,
});

export default api;
