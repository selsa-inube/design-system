import { useLayoutEffect, useState } from "react";

const validateQueries = (queries) => {
  if (!Array.isArray(queries)) {
    throw new Error("Invalid parameter: queries must be an array");
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

  if (invalidQuery) {
    if (typeof invalidQuery !== "string") {
      throw new Error("Invalid query: must be a string");
    }
    throw new Error("Invalid query: must not be an empty string");
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
  validateQueries(queries);

  const [matches, setMatches] = useState({});

  const handleChange = (event, prevState) => {
    return { ...prevState, [event.media]: event.matches };
  };

  useLayoutEffect(() => {
    const mediaQueryList = queries.map((query) => window.matchMedia(query));

    setMatches(initializeState(mediaQueryList));

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
  }, [queries]);

  return matches;
};

export { useMediaQueries };
