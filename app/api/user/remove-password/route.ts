import { tokenData } from "@/lib/tokenData";
import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const token = tokenData(request);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await request.json();

    const user = await prismaClient.user.findUnique({
      where: {
        email: token.email,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prismaClient.userPasswords.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(
      { message: "Password removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
