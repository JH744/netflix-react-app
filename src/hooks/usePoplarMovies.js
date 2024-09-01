import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};
export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data, //받아온 데이터의 data키에 맞는 내용만 가져오기
  });
};
