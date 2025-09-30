// src/lib/linkResolver.js
/**
 * Link Resolver
 * Maps Prismic document types to URLs in your Astro project.
 * This is required for previews and internal links in rich text.
 */
export function linkResolver(doc) {
	switch (doc.type) {
		case "homepage":
			return "/"; // the homepage
		case "about":
			return "/about"; // the about page
		case "contact":
			return "/contact"; // the contact page
		case "listing":
			return `/listing/${doc.uid}`; // dynamic listing routes
		case "articles":
			return `/articles/${doc.uid}`; // dynamic article routes
		default:
			return "/"; // fallback
	}
}
