import { useEffect, useState } from "react";

const useMediaQueries = (initialQueries) => {
  if (!Array.isArray(initialQueries)) {
    throw new Error("Invalid parameter: queries must be an array");
  }

  const mediaQueryList = initialQueries.map((query) => {
    if (typeof query !== "string" || query.trim() === "") {
      throw new Error("Invalid query: must be a non-empty string");
    }
    return window.matchMedia(query);
  });

  const initializeState = () => {
    const initialState = {};
    mediaQueryList.forEach((query) => {
      initialState[query.media] = query.matches;
    });
    return initialState;
  };

  const [matches, setMatches] = useState(initializeState);

  const handleChange = (event) => {
    setMatches((prevState) => ({ ...prevState, [event.media]: event.matches }));
  };

  const updateState = () => setMatches(initializeState());

  useEffect(() => {
    if (initialQueries.length > 0) {
      updateState();

      mediaQueryList.forEach((mediaQueryObject) =>
        mediaQueryObject.addEventListener("change", handleChange)
      );

      return () =>
        mediaQueryList.forEach((mediaQueryObject) =>
          mediaQueryObject.removeEventListener("change", updateState)
        );
    }
  }, [initialQueries.join(",")]);

  return matches;
};

export { useMediaQueries };
