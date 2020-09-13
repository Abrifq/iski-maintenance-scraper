/**@param {string} untrimmedData - String with leftover whitespace @returns {string} String trimmed out of useless whitespace.*/

async function trimmer(untrimmedData) {
    return untrimmedData.split(/\n\r?/).map(
        //refine the given data to reduce useless whitespace
        untrimmedLine => untrimmedLine.trim()
    )
        .join("");
}
module.exports = exports = trimmer;