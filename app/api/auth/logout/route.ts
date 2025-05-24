import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    request.cookies.delete("vaultToken");
    return NextResponse.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error logging out" }, { status: 500 });
  }
}
