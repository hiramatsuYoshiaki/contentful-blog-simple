<template lang="pug">
v-container
  section.mb-4
    h1 TOURdeHDR SIMPLE 
    p index.vue
  section.mb-4 
    h1 contentful  blog post data
    div(v-for="(post, idxPost) in posts.slice(0,1) " :key="post.sys.id")
      h1 1.id: {{ post.sys.id}}
      h1 2.craete-date: {{ post.sys.createdAt}}
      h1 3.titlePage:  {{ post.fields.titlePage}}
      h1 4.title: {{ post.fields.title}}
      h1 5.stage: {{ post.fields.stage}}
      h1 6.slug: {{ post.fields.slug }}
      //- h1 4. {{ post.fields.category.fields.name }}
      //- h1 4. {{ post.fields.heroImage.fields.title }}
      //- h1 4. {{ post.fields.heroImage.fields.file.url }}
      img(
            :src="post.fields.heroImage.fields.file.url"
            :alt="post.fields.heroImage.fields.title"
            :aspect-ratio="16/9"
            width="100"
            height="auto"
      )
      h1 category: {{ post.fields.category }}
      h1 tag: {{ post.fields.tags }}
      h1 location: {{ post.fields.location }}

      //- div.bg-img-card(:style="{
      //-   background: `top center / cover no-repeat url(${setEyeCatch(item).url})`
      //- }")
  //-     div(v-if="post.fields.image2")
  //-       div(v-for="(img,idxImg) in post.fields.image2" :kwy="post.sys.id")

  //- section  
   
  //-   div(v-for="post in posts" :key="post.sys.id")
        //- div title: {{ post.fields.title }}
        //- div slug: {{ post.fields.slug }}
        //- div heroImage: {{ post.fields.heroImage }}
        //- div body: {{ post.fields.body }}
        //- div author: {{ post.fields.author }}
        //- div publishDate: {{ post.fields.publishDate }}
        //- div tags: {{ post.fields.tags }}
        //- h1.text-h3 heroImage/sys/space/sys:{{ post.fields.heroImage.sys.space.sys }}
        //- h1.text-h3 heroImage/fields:{{ post.fields.heroImage.fields }}
        //- h1.text-h3 heroImage/fields/file/url:{{ post.fields.heroImage.fields.file.url }}
        //- h1.text-h3 {{ post.fields.helo}}
        //- h1.text-h3 {{ post.fields}}
        //- h1.text-h3 {{ post.fields.stage}}
      
        
        //- //- h1.text-h3 {{ post.fields}}
        //- h1.text-h3.my-8 {{JSON.stringify(post.fields.heroImage)}}
        //- h1.text-h3.my-8 ---------------------{{ post.fields.title}}
        //- h1.text-h3 {{ post.fields.image}}
        //- h1.text-h3.my-8 ---------------------{{ post.fields.title}}
        //- h1.text-h3 {{ post.fields.image2}}
        //- h1.text-h3.my-8 ---------------------{{ post.fields.title}}
        //- { 
        //-   "sys": { 
        //-     "space": { 
        //-       "sys": {
        //-          "type": "Link",
        //-          "linkType": "Space",
        //-          "id": "1zpqse9gugxq"
        //-       } 
        //-     }, 
        //-     "type": "Asset",
        //-     "id": "3hwaNYBpSYL8sbaZoQmNNf", 
        //-     "revision": 1, 
        //-     "createdAt": "2020-01-21T05:32:57.232Z", 
        //-     "updatedAt": "2020-01-21T05:36:02.826Z", 
        //-     "environment": { 
        //-       "sys": { 
        //-         "id": "master", 
        //-         "type": "Link", 
        //-         "linkType": "Environment" 
        //-       } }, 
        //-     "locale": "en-US" 
        //-   }, 
        //-   "fields": { 
        //-     "title": "なんばパークス", 
        //-     "description": "なんばパークス", 
        //-     "file": { 
        //-       "url": "//images.ctfassets.net/1zpqse9gugxq/3hwaNYBpSYL8sbaZoQmNNf/fb4f8cb1b5116bf1d3474e1818257bf6/img7005.jpg", 
        //-       "details": { 
        //-         "size": 403331, 
        //-         "image": { 
        //-           "width": 800, 
        //-           "height": 1200 } 
        //-         }, 
        //-       "fileName": "img7005.jpg", 
        //-       "contentType": "image/jpeg" 
        //-     } 
        //-   } 
        //- }
        
  //- section 
  //-   h1 contentful all data json.string
  //- p {{JSON.stringify(posts)}}

</template>
<script>
// import client from '~/plugins/contentful'
import { mapState } from 'vuex'
export default {
  layout: 'fullscreenNav',
  // layout: 'MobileOverlayNavbar',
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
