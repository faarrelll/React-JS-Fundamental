/**
 * Filters an array of objects based on a search string and specified key
 * @param {Array} array - Array of objects to filter
 * @param {string} searchKey - Object key to search in
 * @param {string} searchString - String to search for
 * @returns {Array} Filtered array of objects
 */
export function getFilteredArray(array, searchKey, searchString) {
  if (!Array.isArray(array)) return [];
  if (!searchKey || !searchString) return array;

  return array.filter((item) => {
    const value = item[searchKey]?.toString().toLowerCase() || "";
    return value.includes(searchString.toLowerCase());
  });
}
