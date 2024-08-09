export async function POST(req: Request) {
  const res = await req.json();
  const sessionToken = res.token;

  if (!sessionToken) {
    return Response.json(
      { message: "session token not found " },
      { status: 400 }
    );
  }
  return Response.json(
    { res },
    {
      status: 200,

      headers: {
        "Set-Cookie": `sessionToken=${sessionToken}; Path=/; HttpOnly`,
      },
    }
  );
}
