import { tokenData } from "@/lib/tokenData";
import prismaClient from "@/prisma/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { decryptPassword } from "@/lib/decryptPassword";

export async function GET(request: NextRequest) {
  try {
    const token = tokenData(request);

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prismaClient.user.findUnique({
      where: {
        email: token.email,
      },
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        profileImage: true,
        passwords: {
          select: {
            id: true,
            website: true,
            type: true,
            username: true,
            email: true,
            description: true,
            encryptedPassword: true,
            iv: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const decryptedPasswords = user.passwords.map((password: any) => {
      return {
        ...password,
        password: decryptPassword(password.encryptedPassword, password.iv),
      };
    });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          profileImage: user.profileImage,
          passwords: decryptedPasswords,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
