<template lang="pug">
v-container(color='grey darken-2') 
  v-row 
    v-col 
      section 
        h1 TOURdeHDR+3
        p posts/index.vue
        p vuetify stepper vertical UI
  v-row 
    v-col.d-flex.child-flex(
      v-for='(post, i) in posts.slice(0, dsp)',
      :key='post.sys.id',
      cols='6',
      sm='6',
      md='4',
      lg='3'
    )
      v-img.grey.lighten-2(
        :src='post.fields.heroImage.fields.file.url',
        aspect-ratio='1'
      )
      //- v-img.mb-2.white--text.align-end(
      //-           :src='post.fields.heroImage.fields.file.url',
      //-           height='200',
      //-           width='auto'
      //- )

  //- v-row 
  //-   v-col 
  //-     h1.text-h3.my-2 投稿一覧
  //-     v-stepper(v-model='eNo', vertical, dark) 
  //-       div(v-for='(post, i) in posts.slice(0, dsp)', :key='post.sys.id')
  //-         v-stepper-step(:complete='eNo > i + 1', :step='i + 1')
  //-           h5.text-h5 {{ post.fields.stage }}
  //-             span.text-h3.ml-2(v-show='i===0') NEW!
  //-         v-stepper-content.mb-2(:step='i + 1', dark)
  //-           v-card.mx-auto.mb-2.pa-2(
  //-             color='grey darken-4',
  //-             max-width='600',
  //-             dark,
  //-             flat
  //-           )
  //-             v-img.mb-2.white--text.align-end(
  //-               :src='post.fields.heroImage.fields.file.url',
  //-               height='200',
  //-               width='auto'
  //-             )
  //-               v-card-title {{ post.fields.title }}
  //-             v-card-subtitle {{ post.fields.stage }}
  //-             v-card-actions
  //-               v-space
  //-               nuxt-link(:to='`/posts/${post.sys.id}`')
  //-                 v-btn(color='white', text) 投稿を見る
  //-           v-btn.mr-2(
  //-             color='primary',
  //-             @click='eNo = eNo + 1',
  //-             v-show='i < dsp - 1'
  //-           ) Prev Post
  //-           v-btn(color='primary', @click='eNo = eNo - 1', v-show='i > 0') Back Post
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts']),
  },
  data() {
    return {
      // eNo: 1,
      dsp: 4,
    }
  },
}
</script>
