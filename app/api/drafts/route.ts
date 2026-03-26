import { NextResponse } from "next/server";

import { buildFeatureNotReadyResponse } from "@/lib/api/errors";

export async function GET() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Draft retrieval belongs to the assistant and trust-layer phases."),
    { status: 501 }
  );
}

export async function POST() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Draft creation will be wired from assistant output in a later phase."),
    { status: 501 }
  );
}
