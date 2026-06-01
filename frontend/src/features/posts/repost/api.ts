import axios from "axios";
import { env } from "#/config/env";

export const repostApi = async (postId: string) => {
  const { data } = await axios.post(
    `${env.VITE_SERVER_BASE_URL}/api/posts/repost`,
    { postId },
    { withCredentials: true },
  );
  return data.data as { isRepost: boolean };
};
