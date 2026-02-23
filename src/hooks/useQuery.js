// src/hooks/useQuery.js  (Plant)
import { useEffect, useState } from "react";
import axiosClient from "../config/axios";

const useQuery = (url, refetch) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: "",
  });

  useEffect(() => {
    let alive = true;

    const fetch = async () => {
      try {
        const { data } = await axiosClient.get(url);
        if (!alive) return;
        setState({ data, isLoading: false, error: "" });
      } catch (error) {
        if (!alive) return;
        setState({
          data: null,
          isLoading: false,
          error: error?.message || "Failed to fetch",
        });
      }
    };

    fetch();
    return () => {
      alive = false;
    };
  }, [url, refetch]);

  return state;
};

export default useQuery;