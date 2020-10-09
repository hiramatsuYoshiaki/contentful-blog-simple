<template lang="pug">
v-container
  section
    h1 TOURdeHDR SIMPLE 
    p index.vue
  section 
    h1 contentful h-works space:samples
    p {{JSON.stringify(posts)}}

</template>
<script>
import client from '~/plugins/contentful'
export default {
  layout: 'fullscreenNav',
  async asyncData({ env }) {
    let posts = []
    await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate',
      })
      .then((res) => (posts = res.items))
      .catch(console.error)
    return { posts }
  },
}
</script>
