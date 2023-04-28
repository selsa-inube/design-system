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
    setMatches((prevState) => {
      if (prevState[event.media] === event.matches) {
        // No need to update state if the value hasn't changed
        return prevState;
      }
      return { ...prevState, [event.media]: event.matches };
    });
  };

  useEffect(() => {
    if (initialQueries.length > 0) {
      const handleInitialQueries = () => {
        setMatches(initializeState());
      };

      handleInitialQueries();

      mediaQueryList.forEach((mediaQueryObject) =>
        mediaQueryObject.addEventListener("change", handleChange)
      );

      return () =>
        mediaQueryList.forEach((mediaQueryObject) =>
          mediaQueryObject.removeEventListener("change", handleChange)
        );
    }
  }, [initialQueries]);

  return matches;
};

export { useMediaQueries };
