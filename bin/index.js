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
    .arguments('<sourcemapFile> <output>')
    .action(function (sourcemapFile, output) {
        sourcemapFileValue = sourcemapFile;
        outputValue = output;
    });


program.parse(process.argv);

checkArgument('sourcemapFileValue', 'sourcemapFile');
checkArgument('outputValue', 'output');

require('../main')(path.resolve(process.cwd(), sourcemapFileValue), path.resolve(process.cwd(), outputValue));
