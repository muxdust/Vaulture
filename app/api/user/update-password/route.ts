import { tokenData } from "@/lib/tokenData";
import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { encryptPassword } from "@/lib/encryptPassword";

interface TokenData {
  email: string;
}

interface PasswordData {
  id: string;
  website: string;
  username: string;
  email: string;
  description: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email: userEmail } = tokenData(request) as TokenData;

    const { id, website, username, email, description, password } =
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

    let updatedData: any = {};

    if (website) updatedData.website = website;
    if (username) updatedData.username = username;
    if (email) updatedData.email = email;
    if (description) updatedData.description = description;
    if (password) {
      const newPassword = encryptPassword(password);
      updatedData.encryptedPassword = newPassword.encryptedPassword;
      updatedData.iv = newPassword.iv;
    }

    await prismaClient.userPasswords.update({
      where: {
        id: id,
      },
      data: updatedData,
    });

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
