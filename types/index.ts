export type ErrorResponse = {
  error: string;
  code?: string;
};

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[];
