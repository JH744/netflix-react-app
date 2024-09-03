import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMoviesGenre = () => {
  return api.get(`/genre/movie/list`, {
    params: {
      language: "ko",
    },
  });
};
export const useMoviesGenreQuery = () => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: fetchMoviesGenre,
    select: (result) => result.data.genres, //받아온 데이터의 data키에 맞는 내용만 가져오기
    staleTime: 300000, // 요청 이후 5분동안 추가로 요청하지 않음
  });
};
