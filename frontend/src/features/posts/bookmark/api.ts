import { env } from "#/config/env";
import axios from "axios";

export const bookmarksPostApi = async (postId: string) => {
  const { data } = await axios.post(
    `${env.VITE_SERVER_BASE_URL}/api/posts/bookmark`,
    {
      postId,
    },
    {
      withCredentials: true,
    },
  );
  return data.data;
};
