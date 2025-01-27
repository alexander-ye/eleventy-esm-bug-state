/**
 * Sorting function for 2 collections
 *
 * @param {a} collection 11ty collection
 * @param {b} collection 11ty collection
 * @returns {void} sorts in place
 */
export function byDisplayOrder(a, b) {
  return Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1;
}
