import { useEffect, useState } from "react";

const validateArrayType = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Invalid parameter: queries must be an array`);
  }
};

const validateArrayNotEmpty = (arr) => {
  if (arr.length <= 0) {
    throw new Error(`Invalid parameter: queries must not be an empty array`);
  }
};

const validateNonEmptyString = (value) => {
  if (typeof value !== "string") {
    throw new Error(`Invalid queries: must be a string`);
  }
  if (value.trim().length === 0) {
    throw new Error(`Invalid queries: must not be an empty string`);
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
  validateArrayType(queries);
  validateQueries(queries);
  validateArrayNotEmpty(queries);

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
  }, [mediaQueryList, handleChange]);

  return matches;
};

export { useMediaQueries };
