import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "260498945fab543d4";

function useSearch(term: string) {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    }
    fetchData();
  }, [term]);

  return { data };
}

export default useSearch;
