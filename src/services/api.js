const API_KEY = "66366d0ce4ff8912b6a34594a36c45c7";
const API_BASE = "https://api.themoviedb.org/3";

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Only on Netflix",
        items: [],
      },
      {
        slug: "trending",
        title: "Top picks for you",
        items: [],
      },
      {
        slug: "toprated",
        title: "Popular on Netflix",
        items: [],
      },
      {
        slug: "action",
        title: "Top picks for you",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: [],
      },
      {
        slug: "horror",
        title: "Horror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: [],
      },
    ];
  },
};
