import { cookies } from "next/headers";

export async function POST(req: Request) {
  const cookiesStore = cookies();
  const sessionToken = cookiesStore.get("sessionToken");

  if (!sessionToken) {
    return Response.json(
      { message: "session token not found " },
      { status: 401 }
    );
  }

  return Response.json(
    { message: "Logout successfully" },
    {
      status: 200,

      headers: {
        "Set-Cookie": "sessionToken=; Path=/; HttpOnly",
      },
    }
  );
}
