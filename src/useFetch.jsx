import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [buttons, setButtons] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setButtons(data);
      });
  }, [url]);

  return { buttons };
};
export default useFetch;
