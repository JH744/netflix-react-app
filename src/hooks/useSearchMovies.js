import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, genre, page }) => {
  if (keyword) {
    if (genre) {
      return api.get(
        `/search/movie?with_genres=${genre}&query=${keyword}&page=${page}&language=ko-KR`
      );
    } else {
      return api.get(
        `/search/movie?query=${keyword}&page=${page}&language=ko-KR`
      );
    }
  } else if (genre) {
    return api.get(
      `/discover/movie?with_genres=${genre}&page=${page}&language=ko-KR`
    );
  }

  return api.get(`/movie/popular?page=${page}&language=ko-KR`);
};

export const useSearchMovieQuery = ({ keyword, genre, page }) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page, genre],
    queryFn: () => fetchSearchMovie({ keyword, genre, page }),
    select: (result) => result.data,
  });
};
