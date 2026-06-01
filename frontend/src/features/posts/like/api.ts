import { env } from "#/config/env";
import axios from "axios";

export const likePost = async (postId: string) => {
  return axios.post(
    `${env.VITE_SERVER_BASE_URL}/api/posts/like`,
    {
      postId,
    },
    {
      withCredentials: true,
    },
  );
};
