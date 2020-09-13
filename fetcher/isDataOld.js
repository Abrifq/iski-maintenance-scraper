const { stat } = require("fs");
const maxLife = 5 * 60 * 1000;
async function isCurrentDataOld() {
    const file = await asyncBigIntStats("./temp/latest.html");
    const lastEditTime = file.mtimeMs;
    const currentTime = Date.now();
    return (currentTime - lastEditTime) > maxLife;
}

/**@param {import("fs").PathLike} path
 * @param {import("fs").BigIntOptions}
 * @returns {Promise<import("fs").BigIntStats>}
 */
function asyncBigIntStats(path) {
    let resolve, reject;
    const promise = new Promise((r, t) => { resolve = r; reject = t; });
    stat(path, (err, stats) => {
        if (err) reject(err);
        else resolve(stats);
    });
    return promise;
}

module.exports = exports = isCurrentDataOld;