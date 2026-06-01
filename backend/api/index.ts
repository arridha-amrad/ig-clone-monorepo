// @ts-ignore
import app from "../dist/index.js";
import { handle } from "@hono/node-server/vercel";

export const REVALIDATE = 0;
export default handle(app);
