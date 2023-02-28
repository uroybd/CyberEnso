<template>
  <div class="container">
    <div id="edit" @click="state.editMode = !state.editMode">
      {{ state.editMode ? "Close" : "Edit" }}
    </div>
    <Enso
      :poem-data="poemData"
      :source-style="state.sourceStyle"
      :reverse="state.reverse"
    />
    <div id="form" v-if="state.editMode">
      <div id="buttons">
        <button @click="prepareDownload" class="download">
          Download as SVG
        </button>
        <button @click="prepareDownloadPNG" class="download">
          Download as PNG
        </button>
        <button @click="state.reverse = !state.reverse">
          {{ state.reverse ? "Clockwise" : "Anti-Clockwise" }}
        </button>
        <!-- <button @click="state.showSource = !state.showSource">
          {{ state.showSource ? "Hide Source" : "Show Source" }}
        </button> -->
       
        <button @click="resetPoem">Reset</button>
         
      </div>
      <input
        type="text"
        name="title"
        v-model="state.poem.title"
        placeholder="Title"
      />
      <div class="form-group">
      <input
        type="text"
        name="title"
        v-model="state.poem.author"
        placeholder="Author"
      />
      <div class="selection">
          <label for="source">Source: </label> <select v-model="state.sourceStyle" >
          <option v-for="(val, key) in SourceStyleEnum" :value="val" :key="key">{{val}}</option>
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
            You might be wondering what is an Ensō! Ensō is a Zen-buddhist
            practice that allows one to create a momentous artwork. To know more
            you can visit the
            <a href="https://en.wikipedia.org/wiki/Ens%C5%8D" target="_blank"
              >Wikipedia Page</a
            >.
          </p>
          <p>
            CyberEnsō is my take on traditional Ensō. It is a simple web app to
            create an momentous Ensō. We take the content from the textarea and
            <b>hash</b> it. Hashing is a destructive process and I'm using it as
            an analog of <b>clearing one's mind</b> for painting an Ensō.
          </p>
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
import { SourceStyleEnum } from './common.types';

const state = reactive({
  poem: getRandomPoem(),
  sourceStyle: SourceStyleEnum.STANDARD,
  editMode: false,
  showAbout: false,
  reverse: false,
});

function resetPoem() {
  const newPoem = getRandomPoem();
  state.poem = newPoem;
}

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

const poemData = computed(() => {
  return {
    title: state.poem.title,
    author: state.poem.author,
    lines: state.poem.content.split("\n"),
  };
});

const sourceOptions = Object.values(SourceStyleEnum);
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

  #edit {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    z-index: 99;
  }

  #form {
    height: 100%;
    flex: 1;
    padding: 6vw;
    display: flex;
    flex-direction: column;

    input,
    button,
    textarea {
      margin-bottom: 1vw;
      background-color: #e8e3df;
      border: 1px solid #b6b1ae;
      padding: 5px;
      font-family: Lato, sans-serif;

    }

    input,
    button {
      min-height: 40px;
    }

    #buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      button {
        width: 49%;
      }

      .download {
        width: 49%;
      }
    }

    @media (orientation: portrait) {
      width: 100%;
      height: auto;
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
</style>
