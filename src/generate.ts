import { getRandomPoem } from "./poems";
import { dataToPoem, generateSVG, getPoemCalculations } from './utils/enso';
const fs = require('fs');
const svg2img = require('svg2img');
const poemData = dataToPoem(getRandomPoem());
const reverse = false;
const dimension: [number, number] = [3024, 1964]
const { arcs } = getPoemCalculations(poemData, reverse, dimension);

const svg = generateSVG(arcs, dimension);

svg2img(svg, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('daily.png', buffer);
});