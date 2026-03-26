import { NextResponse } from "next/server";

import { buildFeatureNotReadyResponse } from "@/lib/api/errors";

export async function GET() {
  return NextResponse.json(
    buildFeatureNotReadyResponse(
      "Agenda listing will be backed by the shared AgendaItem service in a later phase."
    ),
    { status: 501 }
  );
}
