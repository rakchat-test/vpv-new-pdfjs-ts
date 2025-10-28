<script setup lang="ts">
import { VPdfViewer, type ToolbarOptions } from "@vue-pdf-viewer/viewer";
import AppPdfViewer from "./components/AppPdfViewer.vue";
import { dependencies } from "../package.json";

const toolbarOptions: Partial<ToolbarOptions> | false = false;

const vpvViewerVersion = dependencies["@vue-pdf-viewer/viewer"];
const vpvAnnotationVersion = dependencies["@vue-pdf-viewer/annotation"];
const pdfjsDistVersion = dependencies["pdfjs-dist"];

const pdfSrc = "/test-file.pdf";
</script>

<template>
  <div>
    <div>
      <div :style="{ fontSize: '20px', color: 'blue' }">
        vpv-viewer: <b>v{{ vpvViewerVersion }}</b>
      </div>
      <div :style="{ fontSize: '20px', color: 'green' }">
        vpv-annotation: <b>v{{ vpvAnnotationVersion }}</b>
      </div>
      <div :style="{ fontSize: '20px', color: 'red' }">
        pdfjs-dist: <b>v{{ pdfjsDistVersion }}</b>
      </div>
    </div>
    <br />
    <h2>Default Toolbar</h2>
    <div class="pdf-viewer-wrapper">
      <VPdfViewer :src="pdfSrc" />
    </div>
    <h2>Without Toolbar</h2>
    <div class="pdf-viewer-wrapper">
      <VPdfViewer :src="pdfSrc" :toolbar-options="toolbarOptions" />
    </div>
    <h2>Mobile</h2>
    <div class="pdf-viewer-wrapper-mobile">
      <VPdfViewer :src="pdfSrc" />
    </div>
    <AppPdfViewer
      :src="pdfSrc"
      title="Default Toolbar with Annotation"
      annotate-enabled
    />
  </div>
</template>

<style scoped>
.pdf-viewer-wrapper {
  width: 1028px;
  height: 700px;
  margin: 0 auto;
}

.pdf-viewer-wrapper-mobile {
  width: 468px;
  height: 700px;
  margin: 0 auto;
}
</style>
