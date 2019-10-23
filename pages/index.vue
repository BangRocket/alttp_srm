<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Title</h1>
      <h2 class="subtitle">Subtitle</h2>
      <!-- @v-on:vdropzone-thumbnail="thumbnail" -->
      <dropzone
        id="customdropzone"
        ref="bar"
        :options="options"
        :include-styling="true"
        @v-on:vdropzone-success="test"
      >
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title">Please drop your A Link to the Past SRAM file here.</h3>
          <p class="subtitle">*.srm format accepted</p>
        </div>
      </dropzone>
    </div>
  </section>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "nuxt-dropzone/dropzone.css";
export default {
  components: {
    Dropzone
  },
  data() {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: "upload",
        maxFiles: 1,
        acceptedFiles: ".srm"
      }
    };
  },
  mounted() {
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.foo.dropzone
  },
  methods: {
    test(a, b) {
      console.log(a, b);
    },
    template() {
      return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                    <div class="dz-size"><span data-dz-size></span></div>
                    <div class="dz-filename"><span data-dz-name></span></div>
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-error-message"><span data-dz-errormessage></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `;
    },
    thumbnail(file, dataUrl) {
      var j, len, ref, thumbnailElement;
      if (file.previewElement) {
        file.previewElement.classList.remove("dz-file-preview");
        ref = file.previewElement.querySelectorAll("[data-dz-thumbnail-bg]");
        for (j = 0, len = ref.length; j < len; j++) {
          thumbnailElement = ref[j];
          thumbnailElement.alt = file.name;
          thumbnailElement.style.backgroundImage = 'url("' + dataUrl + '")';
        }
        return setTimeout(
          (function(_this) {
            return function() {
              return file.previewElement.classList.add("dz-image-preview");
            };
          })(this),1);
      }
    }
  }
};
</script>