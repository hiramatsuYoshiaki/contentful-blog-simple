<template lang="pug">
v-container
  section
    h1 TOURdeHDR SIMPLE 
    p index.vue
  section  
    div(v-for="post in posts" :key="post.sys.id")
      h1 {{post.fields.title}}
  section 
    h1 contentful all data json.string
    p {{JSON.stringify(posts)}}

</template>
<script>
// import client from '~/plugins/contentful'
import { mapState } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts']),
  },
  // async asyncData({ env }) {
  //   let posts = []
  //   await client
  //     .getEntries({
  //       content_type: env.CTF_BLOG_POST_TYPE_ID,
  //       order: '-fields.publishDate',
  //     })
  //     .then((res) => (posts = res.items))
  //     .catch(console.error)
  //   return { posts }
  // },
}
</script>
