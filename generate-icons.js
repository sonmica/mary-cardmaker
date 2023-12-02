const { readdirSync, rmSync, mkdirSync, readFileSync, writeFileSync } = require('fs');

const ICONS_FOLDER = './icons';
const TARGET_FOLDER = './icon-components';
const TYPE = `${TARGET_FOLDER}/IconType.ts`;

let baseTypes = `export type IconType =`;

const generateIconFile = svg => {
    const baseName = svg.substring(0, svg.length - 4);
    const contents =  `<template>${readFileSync(`${ICONS_FOLDER}/${svg}`, 'utf-8')}</template>`;

    baseTypes += `\n  | '${baseName}'`

    writeFileSync(`${TARGET_FOLDER}/${baseName}.vue`, contents);
}

// cleanup previous run
rmSync(TARGET_FOLDER, { force: true, recursive: true });
mkdirSync(TARGET_FOLDER);
rmSync(TYPE, { force: true });

// generate indivudual .vue icons
readdirSync(ICONS_FOLDER).filter(icon => icon.endsWith('.svg')).forEach(generateIconFile);

// build types + GameIcon component
writeFileSync(TYPE, baseTypes += "\n;");
