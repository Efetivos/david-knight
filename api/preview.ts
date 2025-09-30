// src/pages/api/preview.ts
import type { APIRoute } from "astro";
import { createClient } from "../../lib/prismic"; // adjust path
import { setPreviewData } from "@prismicio/next"; // works in Astro too
import { linkResolver } from "../../lib/linkResolver"; // your custom resolver

export const get: APIRoute = async ({ request, redirect }) => {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    const documentId = url.searchParams.get("documentId");

    if (!token || !documentId) {
        return new Response("Missing preview data", { status: 400 });
    }

    const client = createClient({ request });
    const redirectUrl = await client.resolvePreviewURL({
        linkResolver,
        defaultURL: "/",
        previewToken: token,
        documentID: documentId,
    });

    // Redirect to the resolved document route with preview cookies set
    return redirect(redirectUrl, 302);
};
