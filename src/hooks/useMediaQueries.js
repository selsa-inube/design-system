import { useEffect, useState } from "react";

const validateArrayType = (arr, name) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid parameter: ${name} must be an array`);
  }
};

const validateArrayNotEmpty = (arr, name) => {
  if (arr.length <= 0) {
    throw new Error(`Invalid parameter: ${name} must not be an empty array`);
  }
};

const validateNonEmptyString = (value, name) => {
  if (typeof value !== "string") {
    throw new Error(`Invalid ${name}: must be a string`);
  }
  if (value.trim().length === 0) {
    throw new Error(`Invalid ${name}: must not be an empty string`);
  }
};

const validateQueries = (queries) => {
  queries.forEach((query) => {
    try {
      validateNonEmptyString(query, "query");
    } catch (error) {
      throw new Error(`Invalid queries: ${error.message}`);
    }
  });
};

const initializeState = (mediaQueryList) => {
  const initialState = {};
  mediaQueryList.forEach((mediaQueryObject) => {
    initialState[mediaQueryObject.media] = mediaQueryObject.matches;
  });
  return initialState;
};

const useMediaQueries = (queries) => {
  validateArrayType(queries, "queries");
  validateQueries(queries);
  validateArrayNotEmpty(queries, "queries");

  const mediaQueryList = queries.map((query) => window.matchMedia(query));
  const [matches, setMatches] = useState(() => initializeState(mediaQueryList));

  const handleChange = (event, prevState) => {
    return { ...prevState, [event.media]: event.matches };
  };

  const changeHandler = (event) => {
    setMatches((prevState) => handleChange(event, prevState));
  };

  useEffect(() => {
    mediaQueryList.forEach((mediaQueryObject) => {
      mediaQueryObject.addEventListener("change", changeHandler);
    });

    return () => {
      mediaQueryList.forEach((mediaQueryObject) => {
        mediaQueryObject.removeEventListener("change", changeHandler);
      });
    };
  }, [mediaQueryList]);

  return matches;
};

export { useMediaQueries };
