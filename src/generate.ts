import { getRandomPoem } from "./poems";
import { dataToPoem, generateSVG, getPoemCalculations } from './utils/enso';
const fs = require('fs');
const svg2img = require('svg2img');
const poemData = dataToPoem(getRandomPoem());
const reverse = false;
const dimension: [number, number] = [3024, 1964]
const { arcs } = getPoemCalculations(poemData, reverse, dimension);

const svg = generateSVG(arcs, dimension);
let today = new Date().toISOString().split('T')[0]

svg2img(svg, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('dist/daily.png', buffer);
    fs.writeFileSync(`dist/${today}-daily.png`, buffer);
});

const svg_dark = generateSVG(arcs, dimension, true);

svg2img(svg_dark, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('dist/daily-dark.png', buffer);
    fs.writeFileSync(`dist/${today}-daily-dark.png`, buffer);
});