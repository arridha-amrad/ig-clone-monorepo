import { env } from "#/config/env";
import axios from "axios";

const baseURL = env.VITE_SERVER_BASE_URL;

export const privateAxios = axios.create({
  baseURL: `${baseURL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
