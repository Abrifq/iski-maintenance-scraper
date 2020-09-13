/**@param {string} string @returns {string} @desc Changes all escaped html unicode/character codes to UTF-8 characters.*/


async function unescapeHTMLCharCodes(string) {
    return string.replace(/\&\#([0-9]{1,4})\;/g, (_, charCode) => String.fromCharCode(charCode));
}

module.exports = exports = unescapeHTMLCharCodes;
