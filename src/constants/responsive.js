const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6, // 보여질 카드 수
    slidesToSlide: 3, // 넘겨지는 카드 수
    partialVisibilityGutter: 20, //다음 슬라이드 항목을 10px 만큼 보여줌
  },
  tabletL: {
    breakpoint: { max: 1200, min: 800 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 10,
  },
  tabletS: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default responsive;
