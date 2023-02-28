<template>
  <div id="enso">
    <svg
      id="svgenso"
      viewBox="0 0 2048 2048"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="#e8e3df" />
      <path
        v-for="(arc, idx) in computedPoem.arcs"
        :key="`arc` + idx"
        fill="none"
        stroke="#000000"
        stroke-width="5"
        :d="arc"
        stroke-linecap="round"
        shape-rendering="geometricPrecision"
      />
      <text
        v-if="sourceStyle != SourceStyleEnum.NO_SOURCE"
        x="2028"
        y="2028"
        color="black"
        text-anchor="end"
        font-size="40"
        id="svgsource"
        font-family="Arnold, sans-serif"
      >
        {{ poemSource}}
      </text>
    </svg>
    <div v-if="sourceStyle != SourceStyleEnum.NO_SOURCE" id="source">
      {{ poemSource }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, PropType, computed } from "vue";
import { Poem, SourceStyleEnum } from '../common.types';
import blake2b from "blake2b";
import { Buffer } from "buffer";

const props = defineProps({
  poemData: {
    type: Object as PropType<Poem>,
    required: true,
  },
  sourceStyle: {
    type: String as PropType<SourceStyleEnum>,
    default : SourceStyleEnum.STANDARD
  },
  reverse: {
    type: Boolean,
    required: true,
    default: false,
  },
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const poemSource = computed(() => {
  const poemData = props.poemData;
  let source = "";
  if (props.sourceStyle != SourceStyleEnum.NO_SOURCE && poemData.author){
    switch (props.sourceStyle) {
      case SourceStyleEnum.AUTHOR_ONLY:
        source = poemData.author;
        break;
      case SourceStyleEnum.STANDARD:
        let braceval = ""
        if (poemData.title) {
          braceval = ` (${poemData.title})`
        } else if (poemData.lines[0]) {
          braceval = ` (${poemData.lines[0]}...)`
        }
        source = `${poemData.author}${braceval}`;
        break;
      case SourceStyleEnum.AUTHOR_AND_TITLE:
        let braceval2 = poemData.title;
        if (braceval2) {
          braceval2 = ` (${braceval2})`
        }
        source = `${poemData.author}${braceval2}`;
        break;
      case SourceStyleEnum.AUTHOR_AND_FIRST_LINE:
        let braceval3 = poemData.lines[0];
        if (braceval3) {
          braceval3 = ` (${braceval3}...)`
        }
        source = `${poemData.author}${braceval3}`;
        break;
    }
    if (source) {
      source = `— ${source}`;
    }
    return source
  }
})

const computedPoem = computed(() => {
  const poemData = props.poemData;
  const poem = poemData.lines.join("\n");
  
  var output = new Uint8Array(32);
  var input = Buffer.from(poem);
  const hash = blake2b(output.length)
    .update(input)
    .digest()
    .join("")
    .split("")
    .map((x) => parseInt(x));
  const pdata = [];
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
  const arcs = [];
  for (let i = 0; i < 60; i++) {
    const val = pdata[i];
    let arc_end, arc_start;
    if (props.reverse) {
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
        1024,
        1024,
        512 - i * 3,
        arc_start,
        arc_end,
        props.reverse ? 80 : -130,
        false
      )
    );
  }
  return {
    poem,
    hash,
    arcs,
  };
});

function polarToCartesian(
  centerX,
  centerY,
  radius,
  angleInDegrees,
  rotate = 0
) {
  var angleInRadians = ((angleInDegrees - 90 + rotate) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x,
  y,
  radius,
  startAngle,
  endAngle,
  rotate = 0,
  reverse = false
) {
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
</script>

<style lang="scss">
#enso {
  background-color: #e8e3df;
  height: 100vmin;
  width: 100vmin;
  // border: 1px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  #svgenso {
    width: 100%;
    height: 100%;
    // max-width: 60vmin;
    // max-height: 60vmin;
  }

  #source {
    position: absolute;
    right: 10px;
    bottom: 10px;
    max-width: 250px;
    text-align: right;
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  #svgsource {
    @media (max-width: 768px) {
      display: none;
    }
  }
}
</style>
