const unescapeHTMLCharCodes = require("./unescapeHTMLCharCodes"),
    trimmer = require("./trimmer"),
    rawDataRefiner = require("./rawDataRefiner");

/**@param {string[]} rawDataList
 * @returns {string[]} List of newly processed JSON data. See ReferenceData type for each JSON's context and contents.
 */
async function dataProcessor(rawDataList) {
    return Promise.all(rawDataList.map(
        rawData => unescapeHTMLCharCodes(rawData)
            .then(trimmer)
            .then(rawDataRefiner)
    ));
}

module.exports = exports = dataProcessor
