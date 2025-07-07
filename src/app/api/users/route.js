import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Aman Mishra",
  },
  {
    id: 2,
    name: "Rahul Pal",
  },
  {
    id: 3,
    name: "Sandeep Kumar",
  },
];

export async function POST(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({
        message: "User id not received",
      });
    }
    const user = users.find((user) => user.id === id);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
      });
    }
    return NextResponse.json({
      message: "User found successfully",
      userDetails: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
}
