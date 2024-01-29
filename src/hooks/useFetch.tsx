import { SetStateAction, useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<SetStateAction<null | unknown>>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578`
      );
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
