import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

interface TokenData extends JwtPayload {
  email: string;
}

export const tokenData = (request: NextRequest) => {
  try {
    const token = request.cookies.get("vaultToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!,
    ) as TokenData;

    return {
      email: decodedToken.email,
    };
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
};
