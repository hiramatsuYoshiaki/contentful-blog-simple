<template lang="pug">
v-container
  //- v-row 
  //-   v-col 
  //-     div(v-touch:swipe.left="() => $router.push('stages')")
  //-     div(v-touch:swipe.right="() => $router.push('posts')")
  //-     div(v-touch:swipe="swipeRightHandler") Swipe Right 
  //-     div(v-touch:swipe.left="swipeLeftHandler") Swipe Here
  v-row 
    v-col(cols='12', sm='12', md='12', lg="10" xl="8" class="mx-auto")
      v-row 
        v-col(cols='12', sm='8', md='6')
          //- h1 stage slider group
          v-sheet.mx-auto(elevation="3" class="mb-8")
            v-slide-group.py-4(
              v-model='model',
              active-class='success',
              
            )
              v-slide-item(
                v-for='item in filterTitlePage().slice(0, 10)',
                :key='item.sys.id',
                v-slot:default='{ active, toggle }'
              )
                nuxt-link(:to="`/stages/${item.sys.id}`")
                  v-card.ma-1(
                    :color='active ? undefined : "grey lighten-1"',
                    height='auto',
                    width='100',
                    @click='toggle'
                  )
                    v-img.white--text.align-end(
                      :src='item.fields.heroImage.fields.file.url',
                      width="100%" height="auto"
                    )
                    h6.text-h6.text--black {{ item.fields.category.fields.stage }}
      
          //- h1.text-h3 post
          v-card(v-for="post in filterPostPage()" :key="post.sys.id" class="mb-8") 
            v-img(:src="`${setEyeCatch(post).url}`" width="100%" height="auto" max-width="600px")
            v-card-title {{ post.fields.title }}
            v-card-subtitle {{ post.fields.stage}}
            v-cars-actions
              nuxt-link(:to="`/posts/${post.sys.id}`") 
                v-btn(text) この投稿を見る
            v-divider
            v-card-actions
              v-spacer
              v-btn(icon)               
                v-icon mdi-tag
              v-btn(icon)               
                v-icon mdi-map-marker
              v-btn(icon)               
                v-icon mdi-instagram
            //- div.bg-img-card(:style="{background: `top center / cover no-repeat url(${setEyeCatch(post).url})`}")
            
        v-col.d-none.d-sm-block(cols='12', sm='4', md='6')
          section.nb-4 
            h1 user
          section.nb-4 
            h1 tag
          section.nb-4 
            h1 stage
          section.nb-4 
            h1 location
          section.nb-4 
            h1 post date
          section.nb-4 
            h1 recomend
          section.nb-4 
            h1 stage title
          section.nb-4 
            h1 link
      v-row 
        v-col
          section.mb-4
            h1 TOURdeHDR SIMPLE
            p index.vue
          //- section.mb-4
          //-   h1 {{posts}}
          //-     //-   h1 tags-------------------------------------------------------------
          //-     //-   p {{ tags }}
          //-     //-   h1 category---------------------------------------------------------
          //-     //-   p {{ categories }}
          v-divider
          section.mb-4 
            h1 contentful blog post data
            //- div(v-for='(post, idxPost) in posts.slice(0, 3)', :key='post.sys.id')
            div(v-for='(post, idxPost) in filterPostPage().slice(0, 3)', :key='post.sys.id')
              h1 1.id: {{ post.sys.id }}
              h1 2.craete-date: {{ post.sys.createdAt }}
              h1 3.titlePage: {{ post.fields.titlePage }}
              h1 4.title: {{ post.fields.title }}
              h1 5.stage: {{ post.fields.stage }}
              h1 6.slug: {{ post.fields.slug }}
              //- h1 4. {{ post.fields.category.fields.name }}
              //- h1 4. {{ post.fields.heroImage.fields.title }}
              //- h1 4. {{ post.fields.heroImage.fields.file.url }}
              img(
                :src='post.fields.heroImage.fields.file.url',
                :alt='post.fields.heroImage.fields.title',
                :aspect-ratio='16 / 9',
                width='100',
                height='auto'
              )
      //-         h1 category: {{ post.fields.category }}
      //-         h1 tag: {{ post.fields.tags }}
      //-         h1 location: {{ post.fields.location }}

              //- div.bg-img-card(:style="{
              //-   background: `top center / cover no-repeat url(${setEyeCatch(item).url})`
              //- }")
          //-     div(v-if="post.fields.image2")
          //-       div(v-for="(img,idxImg) in post.fields.image2" :kwy="post.sys.id")

          //- section  
            //- h1.text-h3.my-8 {{JSON.stringify(post.fields.heroImage)}}
       
</template>
<script>
// import client from '~/plugins/contentful'
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  // layout: 'MobileOverlayNavbar',
  computed: {
    ...mapState(['posts', 'tags', 'categories']),
    ...mapGetters([
      'filterTitlePage',
      'filterPostPage',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
    // filterTitlePage() {
    //   return this.posts.filter(function (item) {
    //     return item.fields.titlePage === true
    //   })
    // },
  },
  data() {
    return {
      model: null,
      show: false,
      cnt: 1,
      cards: [
        {
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12,
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6,
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6,
        },
      ],
    }
  },
  methods: {
    swipeRightHandler() {
      // alert('swipeRightHandler')
      //  cancelAnimationFrame(this.reqAnimation)
      this.$router.push('posts')
    },
    swipeLeftHandler() {
      // alert('swipeRightHandler')
      //  cancelAnimationFrame(this.reqAnimation)
      this.$router.push('stages')
    },
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
<style lang="scss" scoped>
// * {
//   border: 1px solid red;
// }
.bg-img-card {
  width: 100%;
  height: 25vh;
}
</style>
