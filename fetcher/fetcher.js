const { createWriteStream } = require("fs"),
    { W_ONLY, O_CREAT } = require("constants"),
    { get } = require("https");

/**@returns {Promise<void>} */
async function fetcher() {
    let reject, resolve;
    const promise = new Promise((r, t) => { reject = t; resolve = r; });
    const outStream = createWriteStream("./latest.html", { mode: W_ONLY | O_CREAT, autoClose: true });
    const httpsRequest = get("https://www.iski.istanbul/web/tr-TR/ariza-kesinti");
    httpsRequest.on("error", reject);
    outStream.on("error", reject);
    httpsRequest.on("response", res => res.pipe(outStream));
    outStream.on("close", resolve); //write end
    httpsRequest.end(); //start fetching
    return promise;
}

module.exports = exports = fetcher;