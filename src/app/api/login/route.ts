import { privateApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    const response = await privateApi.post("/user/login", {
      username: data?.username,
      password: data?.password,
    });
    return NextResponse.json({
      status: 200,
      data: response?.data?.data,
    });
  } catch (error: any) {
    return NextResponse.json(error?.response?.data);
  }
}
