import { getRandomPoem } from "./poems";
import { dataToPoem, dataToText, generateSVG, getPoemCalculations } from './utils/enso';
const fs = require('fs');
const svg2img = require('svg2img');
const poem = getRandomPoem();
const poemData = dataToPoem(poem);
const reverse = false;
const dimension: [number, number] = [3024, 1964]
const { arcs, lineWidth } = getPoemCalculations(poemData, reverse, dimension, 384);
const svg = generateSVG(arcs, lineWidth, dimension);
let today = new Date().toISOString().split('T')[0]


svg2img(svg, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('public/daily.png', buffer);
    fs.writeFileSync(`public/${today}-daily.png`, buffer);
});

const svg_dark = generateSVG(arcs, lineWidth, dimension, true);

svg2img(svg_dark, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('public/daily-dark.png', buffer);
    fs.writeFileSync(`public/${today}-daily-dark.png`, buffer);
});


const text = dataToText(poem);
const svg_source = generateSVG(arcs, lineWidth, dimension, false, text);
const options = {
    resvg: {
        font: {
            fontFiles: ["./assets/fonts/Lato-Regular.ttf"]
        }
    }
}

svg2img(svg_source, options, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('public/daily-source.png', buffer);
    fs.writeFileSync(`public/${today}-daily-source.png`, buffer);
});

const svg_source_dark = generateSVG(arcs, lineWidth, dimension, true, text);
svg2img(svg_source_dark, options, function(error: any, buffer: any) {
    //returns a Buffer
    fs.writeFileSync('public/daily-source-dark.png', buffer);
    fs.writeFileSync(`public/${today}-daily-source-dark.png`, buffer);
});

fs.writeFile('public/todays-text.txt', text, (err: any) => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
