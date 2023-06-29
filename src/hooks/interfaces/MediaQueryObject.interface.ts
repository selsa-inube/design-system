import { IMediaQueryListEvent } from "./MediaQueryListEvent.interface";

export interface IMediaQueryObject {
  media: string;
  matches: boolean;
  addEventListener: (
    type: string,
    listener: (event: IMediaQueryListEvent) => void
  ) => void;
  removeEventListener: (
    type: string,
    listener: (event: IMediaQueryListEvent) => void
  ) => void;
}
