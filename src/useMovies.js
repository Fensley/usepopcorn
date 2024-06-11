import { useState, useEffect } from "react";

const KEY = "911cced0";

export function useMovies(query ){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

    useEffect(
    function () {
        //   callback?.()
      const controller = new AbortController();
      async function fethMovies() {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("something went wrong with fetching movie");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("Start type your favorite movie");
        return;
      }
    //   handleCloseMovie();
      fethMovies();

      return function () {
        controller.abort();
      };
    },
    [query ]
  );
  return {movies , isLoading , error}
}