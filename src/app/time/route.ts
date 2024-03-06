export const dynamic = "force-dynamic"; // "auto" as default

export async function GET () {
  return Response.json({
    time: new Date().toLocaleTimeString()
  });
}