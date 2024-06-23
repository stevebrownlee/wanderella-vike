import type { PageContext } from "vike/types";

export function title(pageContext) {
  const movie = pageContext.data;
  return movie.title;
}
