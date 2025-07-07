import { rateLimit } from "@/utils/rateLimit";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const ip = req?.ip ?? req.headers.get("x-forwarded-for") ?? "Unknown";
  const { limit, remaining } = await rateLimit.limit(ip);
  console.log("remaining", remaining);
  if (remaining === 0) {
    return NextResponse.json({ message: "Rate limit exceeded. Please try again later." }, { status: 429 });
  }
  return NextResponse.json({ message: "Hello, api is working!" });
}
