import { PoemData } from './common.types';
import { POEMS } from "./poems";
import { dataToPoem, dataToText, generateSVG, getPoemCalculations } from './utils/enso';
const fs = require('fs');
const svg2img = require('svg2img');

const reverse = false;
const dimension: [number, number] = [3024, 1964];
POEMS.forEach((poem: PoemData, idx: number) => {
    const poemData = dataToPoem(poem);
    const { arcs, lineWidth } = getPoemCalculations(poemData, reverse, dimension, 384);
    
    const text = dataToText(poem);
    const svg = generateSVG(arcs, lineWidth, dimension, true, text);

    svg2img(svg, function (error: any, buffer: any) {
        fs.writeFileSync(`exports/enso-${idx}.jpg`, buffer);
    });
});