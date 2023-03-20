import { useState, useEffect } from "react";
// import axios from "axios";
import dataJson from "../data/data.json";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setData(dataJson.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetchData;
