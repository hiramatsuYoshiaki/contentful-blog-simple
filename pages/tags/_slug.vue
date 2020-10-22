<template lang="pug">
v-container 
    v-row 
        v-col 
            section 
                h1 TOURdeHDR+3
                h1 tages/_slug.vue
                h3.mb-4 param: {{$route.params.slug}}
    v-row 
        v-col.d-flex.child-flex(
            v-for='(post, idxPost) in getPostByTag($route.params.slug)', 
            :key='post.sys.id'
            cols='6',
            sm='6',
            md='4',
            lg='3'
        ) 
            nuxt-link(:to="`/posts/${post.sys.id}`")  
                v-card
                    v-img(
                        :src='`${setEyeCatchImage(post).url}`',
                    )
                    v-card-title 
                        h3.text-h3  {{ post.fields.title }}   
                    v-card-subtitle 
                            h4.text-h5 {{post.fields.stage}}
                
                //- div(v-for='(post, idxPost) in getPostByTag($route.params.slug)', :key='post.sys.id')
                //-     h1 title: {{post.fields.title}} --------------
                //-         div(v-for='(tag, idxPost) in post.fields.tags', :key='tag.sys.id')
                //-             h5.mr-2 {{tag.sys.id}}
                //-                 span.mr-2 {{tag.fields.name}}
                //-                 span.mr-2 {{tag.fields.slug}}
                                //- h3 {{tag.fields}}
                //- h1 getPostByTag: {{getPostByTag($route.params.slug)}}
                //- div(v-for='(post, idxPost) in posts.slice(0, 1)', :key='post.sys.id')
                //-     div(v-for='(tag, idxPost) in post.fields.tags', :key='tag.sys.id')
                //-         h3 {{tag.sys.id}}
                //-         h3 {{tag.fields.name}}
                //-         h3 {{tag.fields.slug}}
                //-         h3 {{tag.fields}}
    v-row
        v-col 
            //- h1 getPostByTag: {{ getPostByTag($route.params.slug)}}
            //- v-col(v-for="post in getPostByTag($route.params.slug)" :key="post.sys.id")
                //- h1 {{post.fields.tag.fields.name}} 

</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts', 'tags']),
    ...mapGetters([
      'getPostByTag',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
  },
}
</script>
