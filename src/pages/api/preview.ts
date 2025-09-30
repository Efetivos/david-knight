// src/pages/api/preview.ts
import type { APIRoute } from "astro";
import { createClient } from "../../lib/prismic";
import { linkResolver } from "../../lib/linkResolver";

export const GET: APIRoute = async ({ request, redirect }) => {
  const url = new URL(request.url);

  const token = url.searchParams.get("token");
  const documentId =
    url.searchParams.get("documentId") || url.searchParams.get("documentID");

  if (!token) {
    return new Response("Missing preview token", { status: 400 });
  }

  const client = createClient({ request });

  const redirectUrl = await client.resolvePreviewURL({
    linkResolver,
    defaultURL: "/",
    token, // ✅ correct option for preview
    documentID: documentId ?? undefined,
  });

  // 🪵 Debug log
  console.log("[Prismic Preview] Redirecting to:", redirectUrl);

  return redirect(redirectUrl, 302);
};
