import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMoviesDetail = ({ id }) => {
  return api.get(`/movie/${id}`, {
    params: {
      language: "ko-KR",
    },
  });
};
export const useMoviesDetailQuery = (id) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMoviesDetail({ id }),
    select: (result) => result.data, //받아온 데이터의 data키에 맞는 내용만 가져오기
  });
};
