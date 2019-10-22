<template>
  <div>
    <!-- Using a custom slot -->
    <dropzone
      id="bar"
      ref="bar"
      :options="options"
      :destroyDropzone="true"
      :useCustomSlot="true"
      @v-on:vdropzone-success='test'>
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">
          Custom slot
        </h3>
        <p class="subtitle">
          Subtitle
        </p>
      </div>
    </dropzone>
  </div>
</template>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
  components: {
    Dropzone
  },
  data () {
    return {
      // See https://rowanwins.github.io/vue-dropzone/docs/dist/index.html#/props
      options: {
        url: 'test'
      }
    }
  },
  mounted () {
    // Everything is mounted and you can access the dropzone instance
    // const instance = this.$refs.foo.dropzone
  },
  methods: {
    test (a, b) {
      console.log(a, b)
    }
  }
}
</script>
