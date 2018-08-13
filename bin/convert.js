#!/usr/bin/env node
const program = require('commander');
const fs = require('fs-extra');
const path = require('path');
const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8')).version;

function checkArgument(arg, name) {
    if (typeof global[arg] === 'undefined') {
        console.error(`no ${name} given!`);
        program.help();
    }
}

program
    .version(version)
    .arguments('<base64File> <sourcemapFile>')
    .action(function (base64File, sourcemapFile) {
        base64FileValue = base64File;
        sourcemapFileValue = sourcemapFile;
    });


program.parse(process.argv);

checkArgument('base64FileValue', 'base64File');
checkArgument('sourcemapFileValue', 'sourcemapFile');

require('../main').convertBase64(path.resolve(process.cwd(), base64FileValue), path.resolve(process.cwd(), sourcemapFileValue));
