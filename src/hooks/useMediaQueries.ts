import { useEffect, useState } from "react";
import { IMediaQueryListEvent } from "./interfaces/MediaQueryListEvent.interface";
import { MediaQueryList } from "./types/MediaQueryList.type";

import {
  validateArrayType,
  validateQueries,
  validateArrayNotEmpty,
} from "./validators";

type MediaMatches = Array<{ media: string; matches: boolean }>;

const initializeState = (mediaQueryList: MediaQueryList): MediaMatches => {
  return mediaQueryList.map((mediaQueryObject) => ({
    media: mediaQueryObject.media,
    matches: mediaQueryObject.matches,
  }));
};

const useMediaQueries = (queries: string[]): MediaMatches => {
  validateArrayType(queries);
  validateQueries(queries);
  validateArrayNotEmpty(queries);

  const mediaQueryList: MediaQueryList = queries.map((query) =>
    window.matchMedia(query)
  );
  const [matches, setMatches] = useState<MediaMatches>(() =>
    initializeState(mediaQueryList)
  );

  const handleChange = (event: IMediaQueryListEvent): void => {
    setMatches((prevState) => {
      return prevState.map((mediaMatch) =>
        mediaMatch.media === event.media
          ? { ...mediaMatch, matches: event.matches }
          : mediaMatch
      );
    });
  };

  useEffect(() => {
    mediaQueryList.forEach((mediaQueryObject) => {
      mediaQueryObject.addEventListener("change", handleChange);
    });

    return () => {
      mediaQueryList.forEach((mediaQueryObject) => {
        mediaQueryObject.removeEventListener("change", handleChange);
      });
    };
  }, [mediaQueryList]);

  return matches;
};

export { useMediaQueries };
