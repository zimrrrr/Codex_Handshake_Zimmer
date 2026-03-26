import { NextResponse } from "next/server";

import { buildFeatureNotReadyResponse } from "@/lib/api/errors";

export async function GET() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Task listing will be implemented in the integration phase."),
    { status: 501 }
  );
}

export async function POST() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Task creation will be implemented in the core product phase."),
    { status: 501 }
  );
}

export async function PATCH() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Task updates will be implemented in the integration phase."),
    { status: 501 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    buildFeatureNotReadyResponse("Task deletion will be implemented in the integration phase."),
    { status: 501 }
  );
}
