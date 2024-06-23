export function title(pageContext) {
  const movies = pageContext.data;
  return `${movies.length} Star Wars Movies`;
}
