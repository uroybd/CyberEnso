<template>
  <div id="enso">
    <svg id="svgenso" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg">
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
        {{ poemSource }}
      </text>
    </svg>
    <div v-if="sourceStyle != SourceStyleEnum.NO_SOURCE" id="source">
      {{ poemSource }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, PropType, computed } from "vue";
import { Poem, SourceStyleEnum } from "../common.types";

import { getPoemCalculations, getPoemSource } from "../utils/enso";

const props = defineProps({
  poemData: {
    type: Object as PropType<Poem>,
    required: true,
  },
  sourceStyle: {
    type: String as PropType<SourceStyleEnum>,
    default: SourceStyleEnum.STANDARD,
  },
  reverse: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const poemSource = computed(() => getPoemSource(props.poemData, props.sourceStyle));
const computedPoem = computed(() => getPoemCalculations(props.poemData, props.reverse));
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
