import type { ErrorResponse } from "@/types";

export function buildErrorResponse(error: string, code?: string): ErrorResponse {
  return { error, code };
}

export function buildFeatureNotReadyResponse(error: string): ErrorResponse {
  return buildErrorResponse(error, "FEATURE_NOT_READY");
}
