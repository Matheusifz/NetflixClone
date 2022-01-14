const API_KEY = "66366d0ce4ff8912b6a34594a36c45c7";
const API_BASE = "https://api.themoviedb.org/3";

const fetchApi = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Only on Netflix",
        items: await fetchApi(
          `/discover/tv?with_network=213&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Top picks for you",
        items: await fetchApi(`/trending/all/week&api_key=${API_KEY}`),
      },
      {
        slug: "toprated",
        title: "Popular on Netflix",
        items: await fetchApi(`/movie/top_rated&api_key=${API_KEY}`),
      },
      {
        slug: "action",
        title: "Top picks for you",
        items: await fetchApi(
          `/discover/movie?with_genres=28&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await fetchApi(
          `/discover/movie?with_genres=35&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await fetchApi(
          `/discover/movie?with_genres=27&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await fetchApi(
          `/discover/movie?with_genres=10749&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await fetchApi(
          `/discover/movie?with_genres=99&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
