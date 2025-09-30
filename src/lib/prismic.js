// src/lib/prismic.js
import * as prismic from '@prismicio/client';

export function createClient({ request } = {}) {
  const repoName = import.meta.env.PRISMIC_REPOSITORY_NAME;
  const endpoint = prismic.getRepositoryEndpoint(repoName);

  const client = prismic.createClient(endpoint, {
    accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN || undefined,
    fetchOptions:
      request && { headers: { cookie: request.headers.get('cookie') ?? '' } },
  });

  // 🔑 This is the correct way to enable previews in Astro
  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client;
}
