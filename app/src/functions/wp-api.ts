/**
 * @fileoverview Functions to interact with the WordPress API.
 */

const WORDPRESS_API_BASE = "http://wordpress/wp-json/wp/v2";

/** WordPress API authentication */
const WP_AUTH_USER = process.env.WP_AUTH_USER;
const WP_AUTH_PASS = process.env.WP_AUTH_PASS;

const WP_AUTH_KEY = Buffer.from(`${WP_AUTH_USER}:${WP_AUTH_PASS}`).toString(
    "base64",
);

export const getPostBySlug = async (slug: string) => {
    const response = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${slug}`);
    const pages: any[] = await response.json();
    return pages[0] || null;
}

/** pages */
export const getPages = async () => {
    const response = await fetch(`${WORDPRESS_API_BASE}/pages`);
    const pages = await response.json();
    return pages;
};

export const getPageBySlug = async (slug: string) => {
    const response = await fetch(`${WORDPRESS_API_BASE}/pages?slug=${slug}`);
    const pages: any[] = await response.json();
    return pages[0] || null;
}

/** menu */
export const getMenu = async (name: string) => {
    const response = await fetch(`${WORDPRESS_API_BASE}/menu-locations/${name}`, {
        headers: {
            Authorization: `Basic ${WP_AUTH_KEY}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch menu location: ${response.statusText}`);
    }

    const location: { menu: string } = await response.json();
    const menuResponse = await fetch(`${WORDPRESS_API_BASE}/menu-items?id=${location.menu}`, {
        headers: {
            Authorization: `Basic ${WP_AUTH_KEY}`
        }
    });
    const menu = await menuResponse.json();

    return menu;
};
