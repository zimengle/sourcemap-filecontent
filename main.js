const SourceMapConsumer = require('source-map').SourceMapConsumer;
const fs = require('fs-extra');
const path = require('path');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
module.exports = function (sourceMapFile, output) {
    const rawSourceMap = JSON.parse(fs.readFileSync(sourceMapFile, 'utf-8'));
    new SourceMapConsumer(rawSourceMap).then(consumer => {
        consumer.sources.forEach((filepath, index) => {
            const outputPath = output + '/' + filepath;
            logger.info(`filecontent ${filepath} -> ${outputPath}`);
            fs.ensureDirSync(path.dirname(outputPath));
            fs.writeFileSync(outputPath, consumer.sourcesContent[index]);
        });
    });
}


