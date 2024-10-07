import { publicApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, password } = data;
  try {
    const response = await publicApi.post("/user/login", {
      username,
      password,
    });
    return NextResponse.json({
      status: 200,
      data: response?.data?.data,
    });
  } catch (error: any) {
    return NextResponse.json(error?.response?.data);
  }
}
