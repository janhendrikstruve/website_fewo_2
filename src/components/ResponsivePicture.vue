<!--
  Responsives Bild aus einem vite-imagetools-Import mit `?picture`, z. B.:
    import haus from "../assets/haus.jpg?picture";
  Der Browser wählt anhand von `sizes` und seiner Pixeldichte die kleinste
  passende Datei im besten Format, das er kann (AVIF > WebP > JPEG).
  Die Originale in src/assets bleiben unverändert.
-->
<template>
  <picture :class="pictureClass">
    <source
      v-for="(srcset, format) in picture.sources"
      :key="format"
      :type="`image/${format === 'jpg' ? 'jpeg' : format}`"
      :srcset="srcset"
      :sizes="sizes"
    />
    <img
      :src="picture.img.src"
      :width="picture.img.w"
      :height="picture.img.h"
      :alt="alt"
      :sizes="sizes"
      :loading="loading"
      :fetchpriority="loading === 'eager' ? 'high' : undefined"
      decoding="async"
      :class="imgClass"
      v-bind="$attrs"
    />
  </picture>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

defineProps({
  // Ergebnis eines Imports mit `&as=picture`
  picture: { type: Object, required: true },
  alt: { type: String, required: true },
  // Wie breit das Bild auf der Seite angezeigt wird (CSS-sizes-Syntax)
  sizes: { type: String, default: "100vw" },
  loading: { type: String, default: "lazy" },
  imgClass: { type: [String, Array, Object], default: "" },
  pictureClass: { type: [String, Array, Object], default: "" },
});
</script>
