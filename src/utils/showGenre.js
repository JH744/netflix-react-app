/** 영화데이터의 장르ID와 일치하는 장르데이터의 ID를 가져와 장르이름을 반환  */
export const showGenre = (genreIdList, genreData) => {
  if (!genreData) return [];
  const genreNameList = genreIdList.map((id) => {
    const genreObj = genreData.find((genre) => genre.id === id);
    return genreObj.name;
  });
  return genreNameList;
};
