import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieFilter = ({ genre, sort, page }) => {
  if (genre) {
    return api.get(
      `/discover/movie?with_genres=${genre}&sort_by=${sort}&page=${page}`
    );
  }
};

export const useMovieFilterQuery = ({ genre, sort, page }) => {
  return useQuery({
    queryKey: ["movie-filter", { genre, sort, page }],
    queryFn: () => fetchMovieFilter({ genre, sort, page }),
    select: (result) => result.data,
  });
};
