import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Zjc2ZWQ5MzA4ZGE5Mzc3NWQ1M2RkM2QzNTNlZWZjYyIsInN1YiI6IjYwNmMzNTFjOThmMWYxMDAyOTY3OTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EyMtAYzU9ehWr-fU7W7nl5Yso7-1LLJW50whKsBIlWA';

// 7f76ed9308da93775d53dd3d353eefcc

function fetchTranding() {
  return axios
    .get('/trending/movie/day', {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchQuery(search) {
  return axios
    .get(`/search/movie`, {
      params: {
        language: 'en-US',
        query: search,
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchMovie(id) {
  return axios
    .get(`/movie/${id}`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchActors(id) {
  return axios
    .get(`/movie/${id}/credits`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
function fetchReview(id) {
  return axios
    .get(`/movie/${id}/reviews`, {
      params: {
        language: 'en-US',
      },
    })
    .then(response => {
      return response.data;
    });
}
export { fetchTranding, fetchQuery, fetchMovie, fetchActors, fetchReview };
