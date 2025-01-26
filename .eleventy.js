// https://www.11ty.dev/docs/config/

import { byDisplayOrder } from '../src/utils/sort-by-display-order.js';

// Responsible for final output
export default async function (eleventyConfig) {
  // https://www.11ty.dev/docs/copy/
  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/images/');

  // Returns work items, sorted by display order
  eleventyConfig.addCollection('work', (collection) => {
    const out = collection.getFilteredByGlob('./src/work/*.md');
    out.sort(byDisplayOrder);
    return out;
  });

  eleventyConfig.addCollection('featuredWork', (collection) => {
    const out = collection
      .getFilteredByGlob('./src/work/*.md')
      .filter((x) => x.data.featured);
    out.sort(byDisplayOrder);
    return out;
  });

  return {
    dir: {
      // Tell Eleventy to look in src folder for all content (e.g. templates)
      input: 'src',
      // Tell Eleventy to use dist as the output folder for static site generation
      output: 'dist',
    },
    // Tell Eleventy to process md, data, and HTML files using Nunjucks
    // https://mozilla.github.io/nunjucks/
    dataTemplateEngine: 'njk',
    // e.g. Can use .html files instead of .njk files
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
