import { renderPage } from "vike/server";

export async function vikeHandler( request, context ) {
  const pageContextInit = { ...(context ?? {}), urlOriginal: request.url };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  return new Response(response?.getReadableWebStream(), {
    status: response?.statusCode,
    headers: response?.headers,
  });
}
