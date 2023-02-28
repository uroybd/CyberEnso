import { ImageResponse } from '@vercel/og';
import { getRandomPoem } from "../src/poems";
import { dataToPoem, generateSVG, getPoemCalculations } from '../src/utils/enso';
const poemData = dataToPoem(getRandomPoem());
const reverse = false;
const dimension: [number, number] = [3024, 1964]
const { arcs } = getPoemCalculations(poemData, reverse, dimension);
const svg = generateSVG(arcs, dimension);
export const config = {
  runtime: 'edge',
};

export default function () {
    const svgDiemension = `0 0 ${dimension.join(' ')}`
    return new ImageResponse(
        (
            <svg viewBox={svgDiemension} xmlns='http://www.w3.org/2000/svg'>
                <rect width='100%' height='100%' fill='#e8e3df'></rect>
            </svg>
    ),
    {
      width: dimension[0],
      height: dimension[1],
    },
  );
}
