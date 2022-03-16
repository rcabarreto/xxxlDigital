/**
 * formatCurrency = This function takes a number and formats it
 * to 2 decimal places.
 * @param {number} amount The number we want to format.
 *
 * @returns {string} The number with 2 decimal places as a string.
 */
export const formatCurrency = (amount: number): string =>
  parseFloat(`${amount}`).toFixed(2);

/**
 * This function takes a number and formats it to 2 decimal places.
 * @param {number} amount The number we want to format.
 *
 * @returns {string} The number with 2 decimal places as a string.
 */
export const amountParser = (amount: number): string[] =>
  formatCurrency(amount).split(".");
