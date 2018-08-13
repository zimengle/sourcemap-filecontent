const SourceMapConsumer = require('source-map').SourceMapConsumer;
const fs = require('fs-extra');
const path = require('path');
const convert = require('convert-source-map');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
exports.outputFileContent = function (sourceMapFile, output) {
    const rawSourceMap = JSON.parse(fs.readFileSync(sourceMapFile, 'utf-8'));
    new SourceMapConsumer(rawSourceMap).then(consumer => {
        consumer.sources.forEach((filepath, index) => {
            const outputPath = output + '/' + filepath;
            logger.info(`filecontent ${filepath} -> ${outputPath}`);
            fs.ensureDirSync(path.dirname(outputPath));
            fs.writeFileSync(outputPath, consumer.sourcesContent[index]);
        });
    });
};

exports.convertBase64 = function (base64File, sourcemapFile) {
    logger.info(`convert ${base64File} -> ${sourcemapFile}`);
    fs.writeFileSync(sourcemapFile, convert.fromComment(fs.readFileSync(base64File, 'utf-8')).toJSON());
};



