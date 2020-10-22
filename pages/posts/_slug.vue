<template lang="pug">
v-container 
  v-row 
    v-col(v-for="post in getPostBySys_id($route.params.slug)" :key="post.sys.id") 
      v-card.mx-auto(max-width="820") 
        v-card-title 
             h3.text-h3  {{ post.fields.title }}   
        v-img(
              :src='`${setEyeCatch(post).url}`',
              width='100%',
              height='auto',
              max-width='820px'
            )
        
        v-card-subtitle 
              h4.text-h4 {{post.fields.stage}}
        v-card-text.mb-4 
          p.text-p {{ post.fields.body}}

        v-img(
              :src='`${setEyeCatchImage(post).url}`',
              width='100%',
              height='auto',
              max-width='820px'
            )
        v-card-title 
             h3.text-h3  {{ setEyeCatchImage(post).title }}   
        v-card-subtitle 
              h4.text-h4 {{ setEyeCatchImage(post).description }}
        v-row 
          v-col(v-for="(postImg2) in post.fields.image2" :key="postImg2.sys.id" cols="6")
              v-img.mb-4(
                    :src='`${setEyeCatchImage2(postImg2).url}`',
                    width='100%',
                    height='auto',
                    max-width='820px'
                  )
              v-card-title 
                h3.text-h3  {{ setEyeCatchImage2(postImg2).title }}   
              v-card-subtitle 
                h4.text-h4 {{ setEyeCatchImage2(postImg2).description }}

  //- v-row 
  //-   v-col 
  //-     h1 posts/_slug.vue
  //-     h3 {{ $route.params.slug }}
  //-       h1 {{ getPostBySys_id($route.params.slug) }}
  //-     div(
  //-       v-for='(post, i) in getPostBySys_id($route.params.slug)',
  //-       :key='post.sys.id'
  //-     )
  //-       h1 1.id: {{ post.sys.id }}
  //-       h1 2.craete-date: {{ post.sys.createdAt }}
  //-       h1 3.titlePage: {{ post.fields.titlePage }}
  //-       h1 4.title: {{ post.fields.title }}
  //-       h1 5.stage: {{ post.fields.stage }}
  //-       h1 6.slug: {{ post.fields.slug }}
  //-       h1 7.heroImag: {{ post.fields.heroImage.fields.file.url }}
  //-       h1 8.image: {{ post.fields.image.fields.file.url }}
  //-       //- h1 9.image: {{ post.fields.image2 }}
  //-       //- div(v-if="post.fields.image2)
  //-       div(v-for='(img2, ix2) in post.fields.image2', :key='ix2')
  //-         h1 9-----.{{ img2.fields.file.url }}

  //-       //- h1 9.image2: {{ post.fields.image2 }}

  //-       //- h1 category: {{ post.fields.category }}
  //-       //- h1 tag: {{ post.fields.tags }}
  //-       //- h1 location: {{ post.fields.location }}
  //-       img(
  //-         :src='post.fields.heroImage.fields.file.url',
  //-         :alt='post.fields.heroImage.fields.title',
  //-         :aspect-ratio='16 / 9',
  //-         width='100',
  //-         height='auto'
  //-       )
  //-       img(
  //-         :src='post.fields.image.fields.file.url',
  //-         :alt='post.fields.image.fields.title',
  //-         :aspect-ratio='16 / 9',
  //-         width='100',
  //-         height='auto'
  //-       )
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts']),
    ...mapGetters([
      'getPostBySys_id',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
  },
}
</script>
