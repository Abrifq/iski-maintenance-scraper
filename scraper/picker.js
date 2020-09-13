const searchRegexp = /<table .*?>([\w\W]+?)<\/table>/g;

/**@param {string} htmlData - contains fetched rawHTML
 * @returns {Promise<string[]>} the inner data of each maintenance
 */
async function getRawData(htmlData) {
    const [, foundEntries,] = htmlData.split(searchRegexp);
    return foundEntries;
}

exports = module.exports = getRawData;
