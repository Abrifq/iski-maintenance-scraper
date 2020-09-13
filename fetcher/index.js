const fetcher = require("./fetcher"), isDataOld = require("./isDataOld");

/**@returns {Promise<void>} @desc This module only fetches new page. Use ../scraper to process the data.*/
module.exports = exports = async function checkForNews() {
    if (await isDataOld()) {
        return fetcher();
    }
};