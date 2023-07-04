import { AlignItem } from "../types/Stack.AlignItems.type";
import { DirectionAlignment } from "../types/Stack.DirectionAlignments";
import { FlexAlignment } from "../types/Stack.FlexAlignments";
import { WrapControl } from "../types/Stack.WrapControl.type";

export interface IStackProps {
  children?: React.ReactNode;
  wrap?: WrapControl;
  direction?: DirectionAlignment;
  justifyContent?: FlexAlignment;
  alignItems?: AlignItem;
  gap?: string;
  margin?: string;
  padding?: string;
}
