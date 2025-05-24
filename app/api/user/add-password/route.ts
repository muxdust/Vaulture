import { tokenData } from "@/lib/tokenData";
import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { encryptPassword } from "@/lib/encryptPassword";

interface TokenData {
  email: string;
}

interface PasswordData {
  website: string;
  username: string;
  email: string;
  description: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email: userEmail } = tokenData(request) as TokenData;

    const { website, username, email, description, password } =
      (await request.json()) as PasswordData;

    if (typeof website !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const user = await prismaClient.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newPassword = encryptPassword(password);

    await prismaClient.userPasswords.create({
      data: {
        userId: user.id,
        website,
        username: username ?? "",
        email: email ?? "",
        description: description ?? "",
        encryptedPassword: newPassword.encryptedPassword,
        iv: newPassword.iv,
      },
    });

    return NextResponse.json(
      { message: "Password added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
