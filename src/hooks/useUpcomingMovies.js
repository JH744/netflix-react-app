import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpcomingMovies = () => {
  return api.get(`/movie/upcoming`, {
    params: {
      language: "ko-KR",
    },
  });
};
export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpcomingMovies,
    select: (result) => result.data, //받아온 데이터의 data키에 맞는 내용만 가져오기
  });
};
