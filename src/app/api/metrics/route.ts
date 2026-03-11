import { NextResponse } from "next/server";

export async function GET() {
  // simple mock, could be replaced by real backend call
  const data = {
    cpu: Math.floor(Math.random() * 100),
    memory: Math.floor(Math.random() * 100),
    savings: 30,
  };

  return NextResponse.json(data);
}
