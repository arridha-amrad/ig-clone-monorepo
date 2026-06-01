import { env } from "#/config/env";
import axios from "axios";

export const deletePostApi = async (postId: string) => {
  return axios.delete(`${env.VITE_SERVER_BASE_URL}/api/posts/${postId}`, {
    withCredentials: true,
  });
};
