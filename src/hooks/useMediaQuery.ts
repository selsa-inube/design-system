import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  const handleChange = (mediaQueryList: MediaQueryList): void =>
    setMatches(mediaQueryList.matches);

  useEffect(() => {
    const mediaQueryList: MediaQueryList = window.matchMedia(query);

    handleChange(mediaQueryList);
    mediaQueryList.addEventListener(
      "change",
      (mediaQueryListEvent: MediaQueryListEvent) =>
        handleChange(mediaQueryListEvent.target as MediaQueryList)
    );

    return () =>
      mediaQueryList.removeEventListener(
        "change",
        (mediaQueryListEvent: MediaQueryListEvent) =>
          handleChange(mediaQueryListEvent.target as MediaQueryList)
      );
  }, [query]);

  return matches;
};

export { useMediaQuery };
