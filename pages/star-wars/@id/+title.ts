export function title(pageContext) {
  console.log(pageContext)
  const movie = pageContext.data;
  return movie.title;
}
