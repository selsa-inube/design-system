import { useLayoutEffect, useState } from "react";

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
  validateArrayType(queries, "queries");
  validateArrayNotEmpty(queries, "queries");

  const invalidQuery = queries.find((query) => {
    try {
      validateNonEmptyString(query, "query");
      return false;
    } catch (error) {
      throw error;
    }
  });

  if (invalidQuery) {
    throw new Error("Invalid queries: one or more queries are invalid");
  }
};

const initializeState = (mediaQueryList) => {
  const initialState = {};
  mediaQueryList.forEach((mediaQueryObject) => {
    initialState[mediaQueryObject.media] = mediaQueryObject.matches;
  });
  return initialState;
};

const useMediaQueries = (queries) => {
  validateQueries(queries);

  const mediaQueryList = queries.map((query) => window.matchMedia(query));
  const [matches, setMatches] = useState(() => initializeState(mediaQueryList));

  useLayoutEffect(() => {
    const handleChanges = mediaQueryList.map((mediaQueryObject) => {
      const changeHandler = (event) => {
        setMatches((prevState) => handleChange(event, prevState));
      };
      mediaQueryObject.addEventListener("change", changeHandler);
      return changeHandler;
    });

    return () => {
      handleChanges.forEach((changeHandler, index) => {
        mediaQueryList[index].removeEventListener("change", changeHandler);
      });
    };
  }, [mediaQueryList]);

  const handleChange = (event, prevState) => {
    return { ...prevState, [event.media]: event.matches };
  };

  return matches;
};

export { useMediaQueries };
