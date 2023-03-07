import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

export async function GET(request: Request) {

  return new Response('Hello');
}
