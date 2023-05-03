import { useEffect, useState } from "react";

const validateQueries = (queries) => {
  if (!Array.isArray(queries)) {
    return new Error("Invalid parameter: queries must be an array");
  }

  const invalidQuery = queries.find((query) => {
    if (typeof query !== "string") {
      return true;
    }
    if (query.trim().length === 0) {
      return true;
    }
    return false;
  });

  if (invalidQuery === "") {
    if (typeof invalidQuery !== "string") {
      return new Error("Invalid query: must be a string");
    }
    return new Error("Invalid query: must not be an empty string");
  }
};

const initializeState = (mediaQueryList) => {
  const initialState = {};
  mediaQueryList.forEach((query) => {
    initialState[query.media] = query.matches;
  });
  return initialState;
};

const useMediaQueries = (queries) => {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const validationError = validateQueries(queries);
    if (validationError) {
      throw validationError;
    }

    const mediaQueryList = queries.map((query) => window.matchMedia(query));

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
  }, [queries]);

  return matches;
};

export { useMediaQueries };
