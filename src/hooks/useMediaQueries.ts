import { useEffect, useState } from "react";
import { IMediaQueryListEvent } from "./interfaces/MediaQueryListEvent.interface";
import { MediaQueryList } from "./types/MediaQueryList.type";

import {
  validateArrayType,
  validateQueries,
  validateArrayNotEmpty,
} from "./validators";

const initializeState = (
  mediaQueryList: MediaQueryList
): Record<string, boolean> => {
  const initialState: Record<string, boolean> = {};
  mediaQueryList.forEach((mediaQueryObject) => {
    initialState[mediaQueryObject.media] = mediaQueryObject.matches;
  });
  return initialState;
};

const useMediaQueries = (queries: string[]): Record<string, boolean> => {
  validateArrayType(queries);
  validateQueries(queries);
  validateArrayNotEmpty(queries);

  const mediaQueryList: MediaQueryList = queries.map((query) =>
    window.matchMedia(query)
  );
  const [matches, setMatches] = useState<Record<string, boolean>>(() =>
    initializeState(mediaQueryList)
  );

  const handleChange = (event: IMediaQueryListEvent): void => {
    setMatches((prevState) => {
      return { ...prevState, [event.media]: event.matches };
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
