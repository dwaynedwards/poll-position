import { verify } from "jsonwebtoken";
import { config } from "dotenv";
config({ path: "./src/.env" });

export const APP_SECRET = process.env.APP_SECRET!;

interface Token {
  userId: string;
}

interface Context {
  request: any;
}

export function getUserId(context: Context) {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
}
