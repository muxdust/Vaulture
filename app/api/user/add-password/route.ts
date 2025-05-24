import { tokenData } from "@/lib/tokenData";
import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { encryptPassword } from "@/lib/encryptPassword";

interface TokenData {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email: userEmail } = tokenData(request) as TokenData;

    const { website, username, email, description, password } =
      await request.json();

    if (!website || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const user = await prismaClient.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const encryptedPassword = encryptPassword(password);

    await prismaClient.userPasswords.create({
      data: {
        userId: user.id,
        website,
        username,
        email,
        description,
        encryptedPassword: encryptedPassword.encryptedPassword,
        iv: encryptedPassword.iv,
      },
    });

    return NextResponse.json(
      { message: "Password added successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
