import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("vaultToken");
    if (!token) {
      return NextResponse.json({ isLoggedIn: false }, { status: 401 });
    }
    return NextResponse.json({ isLoggedIn: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
