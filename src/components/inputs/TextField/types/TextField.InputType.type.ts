export const inputTypes = [
  "text",
  "email",
  "number",
  "password",
  "search",
  "tel",
] as const;

export type InputType = typeof inputTypes[number];
