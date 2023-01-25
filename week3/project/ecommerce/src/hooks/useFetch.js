import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) throw Error("Can not connect to the server!");
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
          setServerError(null);
        })
        .catch((err) => {
          setLoading(false);
          setServerError(true);
        });
    }, 2000);
  }, [url, data]);

  return { data, isLoading, serverError };
};

export default useFetch;
