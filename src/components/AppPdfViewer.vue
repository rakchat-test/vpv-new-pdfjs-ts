<script setup lang="ts">
import VPdfAnnotation from "@vue-pdf-viewer/annotation";
import { VPdfViewer } from "@vue-pdf-viewer/viewer";
import { computed, ref, watch, withDefaults } from "vue";
// pdfjs-dist
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";

interface Props {
  title: string;
  annotateEnabled?: boolean;
  src: string;
}

const props = withDefaults(defineProps<Props>(), {
  annotateEnabled: false,
});

const viewerRef = ref<InstanceType<typeof VPdfViewer> | null>(null);

const vpvProps = computed(() => {
  // Create the final props object with src and other base props
  const finalProps = {
    src: props.src,
  };

  // Add plugins conditionally with proper typing
  if (props.annotateEnabled) {
    (finalProps as any).plugins = [VPdfAnnotation()];
  }

  return finalProps;
});
watch(viewerRef, (newVal) => {
  if (newVal) {
    // console.log("These are VPV instance properties", Object.keys(newVal));
  }
});
</script>
<template>
  <div>
    <h2>
      {{ props.title }}
    </h2>
    <div :style="{ width: '1028px', height: '700px', margin: '0 auto' }">
      <!-- pdfjs-dist -->
      <VPdfViewer :workerUrl="pdfWorker" v-bind="vpvProps" ref="viewerRef" />
    </div>
  </div>
</template>
