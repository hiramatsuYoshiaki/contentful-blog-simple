<template lang="pug">
  v-app(dark)
    v-container(fluid)
      v-listd-flex.d-flex.flex-column.align-center.justify-center
        v-subheader.my-4 
          h1.text-h3(v-if="error.statusCode === 404") {{ pageNotFound }}
          h1.text-h3( v-else) {{ otherError }}
        v-list-action-text 
          NuxtLink(to="/") 
            h3.text-h5 HOME
</template>

<script>
export default {
  layout: 'fullscreenNav',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
