// https://vike.dev/data

import fetch from "cross-fetch";

export const data = async (pageContext) => {
  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
  let movie = await response.json()
  // We remove data we don't need because the data is passed to
  // the client; we should minimize what is sent over the network.
  movie = minimize(movie);
  return movie;
};

function minimize(movie) {
  const { id, title, release_date, director, producer } = movie;
  const minimizedMovie = { id, title, release_date, director, producer };
  return minimizedMovie;
}
