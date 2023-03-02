import { SourceStyleEnum, Poem, DrawingData, PoemData } from './../common.types';
import blake2b from "blake2b";

function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
  rotate: number = 0
): {x: number, y: number} {
  var angleInRadians = ((angleInDegrees - 90 + rotate) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}


function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  rotate: number = 0,
  reverse:boolean = false
): string {
  if (reverse) {
    let cache = endAngle;
    endAngle = startAngle;
    startAngle = cache;
  }
  var start = polarToCartesian(x, y, radius, endAngle, rotate);
  var end = polarToCartesian(x, y, radius, startAngle, rotate);

  var largeArcFlag = (
    reverse ? endAngle - startAngle >= 180 : endAngle - startAngle <= 180
  )
    ? "0"
    : "1";
  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export function getPoemSource(poemData: Poem, sourceStyle: SourceStyleEnum): string {
  let source = "";
  if (sourceStyle != SourceStyleEnum.NO_SOURCE && poemData.author) {
    switch (sourceStyle) {
      case SourceStyleEnum.AUTHOR_ONLY:
        source = poemData.author;
        break;
      case SourceStyleEnum.STANDARD:
        let braceval = "";
        if (poemData.title) {
          braceval = ` (${poemData.title})`;
        } else if (poemData.lines[0]) {
          braceval = ` (${poemData.lines[0]}...)`;
        }
        source = `${poemData.author}${braceval}`;
        break;
      case SourceStyleEnum.AUTHOR_AND_TITLE:
        let braceval2 = poemData.title;
        if (braceval2) {
          braceval2 = ` (${braceval2})`;
        }
        source = `${poemData.author}${braceval2}`;
        break;
      case SourceStyleEnum.AUTHOR_AND_FIRST_LINE:
        let braceval3 = poemData.lines[0];
        if (braceval3) {
          braceval3 = ` (${braceval3}...)`;
        }
        source = `${poemData.author}${braceval3}`;
        break;
    }
    if (source) {
      source = `— ${source}`;
    }
  }
  return source;
}

export function dataToPoem(data: PoemData): Poem {
  const poem = {
    title: data.title,
    author: data.author,
    lines: data.content.split("\n")
  }
  return poem;
}

export function dataToText(data: PoemData) {
  const output = [data.content, `— ${data.author}`]
  if (data.title) {
    output.unshift(data.title);
  }
  return output.join("\n\n");
}


export function getPoemCalculations(poemData: Poem, reverse: boolean, dimension: [number, number] = [2048, 2048], size=512): DrawingData {
  const poem = poemData.lines.join("\n");
  const lineWidth = size * 0.005859375;
  var output = new Uint8Array(32);
  var enc = new TextEncoder()
  var input = enc.encode(poem);
  const hash = blake2b(output.length)
    .update(input)
    .digest()
    .join("")
    .split("")
    .map((x) => parseInt(x));
  const pdata: number[] = [];
  const limit = getRndInteger(0, 6);
  let total_zero = 0;
  for (let i = 0; i < hash.length; i++) {
    const h = hash[i];
    if (h === 0) {
      if (total_zero < limit) {
        pdata.push(h);
        total_zero++;
      }
    } else {
      pdata.push(h);
    }
  }
  const arcs: string[] = [];
  for (let i = 0; i < 60; i++) {
    const val = pdata[i];
    let arc_end, arc_start;
    if (reverse) {
      arc_end = 360 - 0.1 * 1 + val * 0.4;
      if (val == 0) {
        arc_start = 310 - getRndInteger(10, -20);
      } else {
        arc_start = 170 - 35 * val + getRndInteger(20, -30);
        if (arc_start < 10) {
          arc_start = getRndInteger(20, 30);
        }
      }
    } else {
      arc_start = 3 - 0.1 * 1 + val * 0.4;
      if (val == 0) {
        arc_end = 50 + getRndInteger(-10, 20);
      } else {
        arc_end = 190 + 17 * val + getRndInteger(-20, 60);
        if (arc_end > 350) {
          arc_end = getRndInteger(330, 340);
        }
      }
    }
    arcs.push(
      describeArc(
        dimension[0] / 2,
        dimension[1] / 2,
        size - i * lineWidth,
        arc_start,
        arc_end,
        reverse ? 80 : -130,
        false
      )
    );
  }
  return {
    poem,
    hash,
    arcs,
    lineWidth,
  };
}

const THEMES = {
  "light": {
    "fg": "#000000",
    "bg": "#e8e3df"
  },
  "dark": {
    "fg": "#FFFFFF",
    "bg": "#1B2122"
  }
}

export function generateSVGArc(arcDescription: string, color: string, lineWidth: number): string {
    return `<path fill="none" stroke="${color}" stroke-width="${lineWidth + 1}" d="${arcDescription}" stroke-linecap="round" shape-rendering="geometricPrecision" />`
}

export function generateSVG(arcs: string[], lineWidth: number, dimension: [number, number], dark: boolean = false, source: string | null = null): string {
  let theme = dark ? THEMES['dark'] : THEMES['light']
  const parts = [`<svg id="svgenso" viewBox = "0 0 ${dimension.join(' ')}" xmlns = "http://www.w3.org/2000/svg" ><rect width="100%" height = "100%" fill = "${theme.bg}" />`];
  arcs.forEach((a) => {
    parts.push(generateSVGArc(a, theme.fg, lineWidth));
  })
  if (source != null) {
    const lines = source.split("\n");
    let dyOffset = 0;
    parts.push(`<text x="${dimension[0] - 20}" y="${dimension[1] - 20 - (lines.length * 50)}" fill="${theme.fg}" text-anchor="end" font-size="40">`)
    lines.forEach((line: string) => {
      if (line) {
        parts.push(`<tspan x="${dimension[0] - 20}" dy="${50 + dyOffset}px">${line}</tspan>`)
        dyOffset = 0;
      } else {
        dyOffset = 50;
      }
    });
    parts.push(`</text>`);
  }
  parts.push('</svg>')
  return parts.join("\n");
}