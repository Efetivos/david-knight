import * as prismic from '@prismicio/client';

export function createClient({ previewData, request } = {}) {
	const repoName = import.meta.env.PRISMIC_REPOSITORY_NAME;
	const endpoint = prismic.getRepositoryEndpoint(repoName);

	const client = prismic.createClient(endpoint, {
		accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN || undefined,
		// Enable Prismic previews if a preview ref cookie is present:
		fetchOptions: request && { headers: { cookie: request.headers.get('cookie') ?? '' } },
	});

	if (previewData?.ref) {
		client.queryContentFromRef(previewData.ref);
	}

	return client;
}
