import { NextResponse } from "next/server";

import { buildFeatureNotReadyResponse } from "@/lib/api/errors";

export async function POST() {
  return NextResponse.json(
    buildFeatureNotReadyResponse(
      "Assistant generation is deferred until the assistant phase so trust boundaries stay explicit."
    ),
    { status: 501 }
  );
}
