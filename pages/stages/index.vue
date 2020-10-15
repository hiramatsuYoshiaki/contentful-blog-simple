<template lang="pug">
v-container 
  section.ly_section_wrapper
    h1 TOURdeHDR SIMPLE
    p stages index.vue
  v-item-group(v-model='selected', multiple)
    v-row 
      v-col(
        v-for='(post, idxPost) in posts.slice(0, 5)',
        :key='post.sys.id',
        cols='12',
        md='4'
      ) 
        v-item(v-slot:default='{ active, toggle }')
          v-img.text-right.pa-2(
            :src='post.fields.heroImage.fields.file.url',
            height='250',
            @click='toggle'
          )
            v-btn(icon, dark, v-if='!active')
              //- v-icon {{ active ? "mdi-heart" : "mdi-heart-outline" }}

              v-icon {{ active ? "mdi-information" : "mdi-information-outline" }}
                span.text-h6 click Infomation
            v-card.d-flex.align-center(
              :color='active ? "primary" : "transparent"',
              dark,
              width='100%',
              height='100%',
              elevation=0
            )
              v-scroll-y-transition
                .display-3.flex-grow-1.text-center(v-if='active')
                  h1.text-h6 {{ post.fields.stage }}
                  h1.text-h5 {{ post.fields.title }}
                  h1.text-h5 {{ post.sys.id }}
                  nuxt-link(:to='`/posts/${post.sys.id}`')
                    p.text-h5 投稿を見る

                  //- h1 subTitel
                  //- h1 action
                  //- v-list 
                  //-   v-list-items 
                  //-     v-list-item-content(
                  //-       :color='active ? "primary" : "transparent"'
                  //-     )
                  //-       v-list-item-title {{ post.fields.title }}
                  //-       v-list-item-subtitle {{ post.fields.stage }}
                  //-       v-list-item-subtitle {{ post.sys.id }}
                  //-       v-list-item-action
                  //-         nuxt-link(:to='`/posts/${post.sys.id}`') Go to Post
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'fullscreenNav',
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    ...mapState(['posts']),
  },
}
</script>
