import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMoviesVideo = (movie_id) => {
  return api.get(`/movie/${movie_id}/videos`, {
    params: {
      language: "ko-KR",
    },
  });
};
export const useMoviesVideoQuery = (movie_id) => {
  return useQuery({
    queryKey: ["movie-genre"],
    queryFn: (movie_id) => {
      fetchMoviesVideo(movie_id);
    },
    // select: (result) => result.data.genres, //받아온 데이터의 data키에 맞는 내용만 가져오기
    staleTime: 300000, // 요청 이후 5분동안 추가로 요청하지 않음
  });
};
