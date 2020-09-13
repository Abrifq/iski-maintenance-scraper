const tagDetectingRegExp = /\[?<\/?[\w\W]*?>\]?/g, dataLineSeparator = "\n", d = {};
/**@param {string} trimmedRawData @returns {string} */
async function rawDataRefiner(trimmedRawData) {
    const unprocessedData = trimmedRawData.replace(tagDetectingRegExp, dataLineSeparator);
    const processedData = { dipnot: "" };
    const unprocessedDataLines = unprocessedData.split(dataLineSeparator)
        .filter(str => !!str) //Get rid of empty strings
        .filter((_, index, array) => (array.length - 2) > index);
    // Get rid of last two text lines. They provide map links but the description will also include a generic text to do that job. See dipnot's last addition. (After the for loop)
    for (let index = 0; index < unprocessedDataLines.length; index++) {
        const currentLine = unprocessedDataLines[index], nextLine = unprocessedDataLines[index + 1];
        if (index === 0) {
            processedData["ana_başlık"] = currentLine;
            continue;
        }

        if (nextLine === ":") {
            const dataValue = unprocessedDataLines[index + 2];
            switch (currentLine) {
                case "Arıza Sebebi": processedData["sebep"] = dataValue; break;
                case "Açıklama": processedData["açıklama"] = dataValue; break;
                case "Başlama Tarihi": processedData["başlangıç"] = dataValue; break;
                case "Bitiş Tarihi": processedData["bitiş"] = dataValue; break;
            }
            index += 2;
            continue;
        }

        processedData["dipnot"] += currentLine + "\n";
    }
    processedData["dipnot"] += "En son güncellemeler için İSKİ'nin sitesini ziyaret edin [https://www.iski.istanbul/web/tr-TR/ariza-kesinti]";
    return JSON.stringify(processedData);
}

module.exports = exports = rawDataRefiner;
