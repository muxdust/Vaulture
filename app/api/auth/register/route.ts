import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const { name, username, email, password } = await request.json();

    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await prismaClient.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
