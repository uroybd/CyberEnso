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
  return new ImageResponse(
    (
     <div>Hello world</div>
    ),
    {
      width: dimension[0],
      height: dimension[1],
    },
  );
}
