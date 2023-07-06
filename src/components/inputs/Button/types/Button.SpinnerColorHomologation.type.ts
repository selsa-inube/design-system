import { Appearance } from "./Button.Appearances.type";
import { Variant } from "./Button.Variants.type";

export type SpinnerColorHomologation = Record<
  Variant,
  Record<Appearance, string>
>;
