import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  const handleChange = (mediaQuery) => setMatches(mediaQuery.matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", () => handleChange(mediaQuery));

    return () =>
      mediaQuery.removeEventListener("change", () => handleChange(mediaQuery));
  }, [query]);

  return matches;
};

export default useMediaQuery;
