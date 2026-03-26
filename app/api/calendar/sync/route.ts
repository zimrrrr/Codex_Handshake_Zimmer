import { NextResponse } from "next/server";

import { buildFeatureNotReadyResponse } from "@/lib/api/errors";

export async function POST() {
  return NextResponse.json(
    buildFeatureNotReadyResponse(
      "Calendar sync is intentionally deferred until the Google integration phase."
    ),
    { status: 501 }
  );
}
