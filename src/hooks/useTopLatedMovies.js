import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchTopLatedMovies = () => {
  return api.get(`/movie/top_rated`, {
    params: {
      language: "ko-KR",
    },
  });
};
export const useTopLatedMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-top_rated"],
    queryFn: fetchTopLatedMovies,
    select: (result) => result.data, //받아온 데이터의 data키에 맞는 내용만 가져오기
  });
};
