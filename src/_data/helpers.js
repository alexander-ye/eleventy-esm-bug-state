/**
 * Returns back some attributes based on whether the
 * link is active or a parent of an active item
 *
 * @param {String} itemUrl The link in question
 * @param {String} pageUrl The page context https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable-contents
 * @returns {String} The attributes or empty
 */
export function getLinkActiveState(itemUrl, pageUrl) {
  let response = '';

  if (itemUrl === pageUrl) {
    response = ' aria-current="page"';
  }

  // CSS hook that we use to add a decoration to the item to
  // show the user they’re already in that bit of the site.
  if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
    response += ' data-state="active"';
  }

  return response;
}
