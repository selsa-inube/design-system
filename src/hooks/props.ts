import { IMediaQueryObject } from "./interfaces/MediaQueryObject.interface";
export type MediaQueryList = Array<IMediaQueryObject>;

const props = {
  initialQueries: {
    description:
      "the queries shall be constituted between the events where a screen resizing action occurs, leading to the screen's transition or jump",
  },
};

export { props };
