import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
const fetchSearchMovie = ({ keyword, page }) => {
  return keyword // 삼항연산자 사용
    ? api.get(`/search/movie?query=${keyword}&page=${page}`, {
        params: {
          include_adult: false,
          language: "ko-KR",
        },
      }) //키워드가 있다면 서치쿼리 api요청
    : api.get(`/movie/popular?page=${page}`, {
        params: {
          include_adult: false,
          language: "ko-KR",
        },
      }); // 키워드가 없다면 인기영화목록 표시
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ["movie-search", keyword, page],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
