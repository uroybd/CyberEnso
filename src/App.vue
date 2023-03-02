<template>
  <div class="container">
    <div class="toolbar">
      <div id="edit" @click="state.showDaily = !state.showDaily">
        {{ state.showDaily ? "Close" : "Today's Enso" }}
      </div>
      <div id="edit" @click="state.editMode = !state.editMode">
        {{ state.editMode ? "Close" : "Edit" }}
      </div>
    </div>
    <Enso
      :poem-data="poemData"
      :source-style="state.sourceStyle"
      :reverse="state.reverse"
    />
    <div id="form" v-if="state.editMode">
      <div id="buttons">
        <button @click="prepareDownload" class="download">Download as SVG</button>
        <button @click="prepareDownloadPNG" class="download">Download as PNG</button>
        <button @click="state.reverse = !state.reverse">
          {{ state.reverse ? "Clockwise" : "Anti-Clockwise" }}
        </button>
        <!-- <button @click="state.showSource = !state.showSource">
          {{ state.showSource ? "Hide Source" : "Show Source" }}
        </button> -->

        <button @click="resetPoem">Reset</button>
      </div>
      <input type="text" name="title" v-model="state.poem.title" placeholder="Title" />
      <div class="form-group">
        <input
          type="text"
          name="title"
          v-model="state.poem.author"
          placeholder="Author"
        />
        <div class="selection">
          <label for="source">Source: </label>
          <select v-model="state.sourceStyle">
            <option v-for="(val, key) in SourceStyleEnum" :value="val" :key="key">
              {{ val }}
            </option>
          </select>
        </div>
      </div>

      <textarea
        name="content"
        id=""
        cols="30"
        rows="10"
        placeholder="Content"
        v-model="state.poem.content"
      ></textarea>

      <div id="info">
        <h4 @click="state.showAbout = !state.showAbout">About CyberEnsō</h4>
        <div :class="{ content: true, contentshow: state.showAbout }">
          <p>
            You might be wondering what is an Ensō! Ensō is a Zen-buddhist practice that
            allows one to create a momentous artwork. To know more you can visit the
            <a href="https://en.wikipedia.org/wiki/Ens%C5%8D" target="_blank"
              >Wikipedia Page</a
            >.
          </p>
          <p>
            CyberEnsō is my take on traditional Ensō. It is a simple web app to create an
            momentous Ensō. We take the content from the textarea and
            <b>hash</b> it. Hashing is a destructive process and I'm using it as an analog
            of <b>clearing one's mind</b> for painting an Ensō.
          </p>
        </div>
      </div>
    </div>
    <div id="daily" v-show="state.showDaily">
      <div class="panes image">
        <img :src="`/${today}-${dailyVersions[state.currentVersion]}.png`" />
      </div>
      <div class="panes controls">
        <div id="buttons">
          <div class="form-group">
            <div class="selection">
              <label for="source">Source: </label>
              <select v-model="state.currentVersion">
                <option v-for="(val, key) in dailyVersions" :value="key" :key="key">
                  {{ key }}
                </option>
              </select>
            </div>
          </div>
          <a
            :href="`/${today}-${dailyVersions[state.currentVersion]}.png`"
            class="button download"
            download
            >Download</a
          >
        </div>
        <div class="links">
          <div class="link">
            Generic:
            <a href="`/${dailyVersions[state.currentVersion]}.png`"
              >https://enso.utsob.me{{ `/${dailyVersions[state.currentVersion]}.png` }}</a
            >
          </div>
          <div class="link">
            Today:
            <a href="`/${today}-${dailyVersions[state.currentVersion]}.png`"
              >https://enso.utsob.me{{
                `/${today}-${dailyVersions[state.currentVersion]}.png`
              }}</a
            >
          </div>
          <div class="link">
            Text: <a href="/todays-text.txt">https://enso.utsob.me/todays-text.txt</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

import Enso from "./components/Enso.vue";
import { getRandomPoem } from "./poems";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { SourceStyleEnum } from "./common.types";
import { dataToPoem } from "./utils/enso";

const state = reactive({
  poem: getRandomPoem(),
  sourceStyle: SourceStyleEnum.STANDARD,
  editMode: false,
  showAbout: false,
  reverse: false,
  showDaily: false,
  currentVersion: "Light",
});

function resetPoem() {
  const newPoem = getRandomPoem();
  state.poem = newPoem;
}

let today = new Date().toISOString().split("T")[0];

function prepareDownload() {
  const node = document.getElementById("svgenso").outerHTML;
  const blob = new Blob([node], { type: "image/svg+xml" });
  saveAs(blob, "enso.svg");
}

function prepareDownloadPNG() {
  const canvasNode = document.createElement("div");
  canvasNode.id = "canvas";
  canvasNode.style.width = "1024px";
  canvasNode.style.height = "1024px";
  canvasNode.style.position = "fixed";
  canvasNode.style.top = "0";
  canvasNode.style.left = "0";
  const node = document.getElementById("svgenso");
  canvasNode.appendChild(node.cloneNode(true));
  document.body.appendChild(canvasNode);
  domtoimage.toBlob(canvasNode).then(function (blob) {
    canvasNode.remove();
    saveAs(blob, "enso.png");
  });
}

const poemData = computed(() => dataToPoem(state.poem));

const dailyVersions = {
  Light: "daily",
  Dark: "daily-dark",
  "Light with source": "daily-source",
  "Dark with source": "daily-source-dark",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;

  @media (max-width: 500px) {
    font-size: 13px;
  }
  // margin-top: 60px;
}

.container {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e8e3df;
  position: relative;

  @media (orientation: portrait) {
    flex-direction: column;
  }

  .toolbar {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 99;
    display: flex;
    flex-direction: end;
    gap: 10px;
  }

  #form {
    height: 100%;
    flex: 1;
    padding: 6vw;
    display: flex;
    flex-direction: column;

    @media (orientation: portrait) {
      width: 100%;
      height: auto;
    }
  }

  input,
  button,
  .button,
  textarea {
    margin-bottom: 1vw;
    background-color: #e8e3df;
    border: 1px solid #b6b1ae;
    padding: 5px;
    font-family: Lato, sans-serif;
  }

  input,
  .button,
  button {
    min-height: 40px;
  }

  #buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    button,
    .button {
      width: 49%;
    }

    .download {
      width: 49%;
    }
  }

  .form-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    input {
      flex: 1;
      margin-right: 1vw;
    }
    .selection {
      // min-width: 50%;
      margin-bottom: 1vw;

      background-color: #e8e3df;
      border: 1px solid #b6b1ae;
      display: flex;
      align-items: center;
      padding-left: 5px;
      font-family: Lato, sans-serif;
      select {
        height: 40px;
        background-color: #e8e3df;
        border: none;
        padding-left: 5px;
        // border-bottom: 1px solid #b6b1ae;
      }
    }
  }

  #info {
    display: block;
    text-align: left;

    h4 {
      margin-top: 1em;
      margin-bottom: 1em;
      cursor: pointer;
      &:hover {
        color: gray;
      }
    }

    p {
      margin-bottom: 1em;

      a {
        font-weight: bold;
        text-decoration: none;
        color: black;

        a:visited {
          color: gray;
        }

        a:hover {
          color: gray;
        }
      }
    }

    .content {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .contentshow {
      @media (max-width: 768px) {
        display: block;
      }
    }
  }
}

#daily {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 50px);
  top: 50px;
  left: 0;
  z-index: 99;
  background-color: #e8e3df;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  .panes {
    min-width: 350px;
    padding: 1vmin;
  }

  .image {
    flex: 2;

    img {
      width: 100%;
      height: auto;
      border: 1px solid gray;
    }
  }

  .controls {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #buttons {
      justify-content: center;
      width: 100%;
      gap: 10px;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      .link {
        font-weight: bold;

        a {
          font-weight: normal;
          color: inherit;
          text-decoration: none;
        }
      }
    }
  }
}

.button {
  text-decoration: none;
  color: black;
  line-height: 40px;
}
</style>
