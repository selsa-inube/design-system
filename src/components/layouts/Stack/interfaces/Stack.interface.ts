import { AlignContent } from "../types/Stack.AlignContent.type";
import { AlignItem } from "../types/Stack.AlignItems.type";
import { DirectionAlignment } from "../types/Stack.DirectionAlignment.type";
import { JustifyContent } from "../types/Stack.JustifyContent.type";
import { WrapControl } from "../types/Stack.WrapControl.type";

export interface IStackProps {
  children?: React.ReactNode;
  wrap?: WrapControl;
  direction?: DirectionAlignment;
  justifyContent?: JustifyContent;
  alignItems?: AlignItem;
  alignContent?: AlignContent;
  height?: string;
  width?: string;
  gap?: string;
  margin?: string;
  padding?: string;
}
