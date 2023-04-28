import { useEffect, useState } from "react";

const validateQueries = (queries) => {
  if (!Array.isArray(queries)) {
    return new Error("Invalid parameter: queries must be an array");
  }

  const invalidQuery = queries.find(
    (query) => typeof query !== "string" || query.trim() === ""
  );
  if (invalidQuery) {
    return new Error("Invalid query: must be a non-empty string");
  }
};

const initializeState = (mediaQueryList) => {
  const initialState = {};
  mediaQueryList.forEach((query) => {
    initialState[query.media] = query.matches;
  });
  return initialState;
};

const useMediaQueries = (initialQueries) => {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const validationError = validateQueries(initialQueries);
    if (validationError) {
      throw validationError;
    }

    const mediaQueryList = initialQueries.map((query) =>
      window.matchMedia(query)
    );

    setMatches(initializeState(mediaQueryList));

    const handleChange = (event) => {
      setMatches((prevState) => {
        if (prevState[event.media] === event.matches) {
          return prevState;
        }
        return { ...prevState, [event.media]: event.matches };
      });
    };

    mediaQueryList.forEach((mediaQueryObject) =>
      mediaQueryObject.addEventListener("change", handleChange)
    );

    return () =>
      mediaQueryList.forEach((mediaQueryObject) =>
        mediaQueryObject.removeEventListener("change", handleChange)
      );
  }, [initialQueries]);

  return matches;
};
export { useMediaQueries };
