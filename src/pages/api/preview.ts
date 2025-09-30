// src/pages/api/preview.ts
import type { APIRoute } from "astro";
import { createClient } from "../../lib/prismic";
import { linkResolver } from "../../lib/linkResolver";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  const token = url.searchParams.get("token");
  const documentId =
    url.searchParams.get("documentId") || url.searchParams.get("documentID");

  if (!token) {
    return new Response("Missing preview token", { status: 400 });
  }

  const client = createClient({ request });

  // Figure out where to redirect
  const redirectUrl = await client.resolvePreviewURL({
    linkResolver,
    defaultURL: "/",
    token,
    documentID: documentId ?? undefined,
  });

  // 🪄 Explicitly set cookie
  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
      // name/value = io.prismic.preview=<token>
      // `Secure; SameSite=None` is required for cross-domain preview in modern browsers
      "Set-Cookie": `io.prismic.preview=${encodeURIComponent(
        token
      )}; Path=/; HttpOnly; Secure; SameSite=None`,
    },
  });
};
