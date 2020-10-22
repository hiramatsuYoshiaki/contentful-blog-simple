<template lang="pug">
v-container
  v-row 
    v-col 
      h1 stages/_slug.vue
      h3.mb-4 param: {{ $route.params.slug }}
  //- h5 {{getPostByStage($route.params.slug)}}
  v-row
    v-col(
      v-for="post in getPostByStage($route.params.slug)" 
      :key="post.sys.id"
    ) 
      //-       //- div(v-if="post.fields.titlePage === true") {{ post.fields.category.fields.name}}
      v-card.mx-auto(v-if="post.fields.titlePage === true", elevation="0")
        v-card-title 
          h3.text-h3  {{ post.fields.category.fields.name }} 
          v-img(
            :src='`${setEyeCatch(post).url}`',
          )
          v-img
              div.map-block 
                //- div(v-for="(post, index) of filterPost.slice(0,1)" :key="item.sys.id") 
                GmapMap.map-size(
                  :center="{lat:post.fields.location.lat, lng:post.fields.location.lon}"
                  :zoom="19" 
                  map-type-id="satellite"
                )
                  GmapMarker(
                    :position="setLocation(post.fields.location.lat, post.fields.location.lon)"  
                    :clickable="true" :draggable="false" 
                  )
          v-img
            //- div(v-for="(post, index) of filterPost.slice(0,1)" :key="post.sys.id") 
            div.videoWrap  
              video(autoplay="autoplay" loop muted playsinline controls)
                source(:src="post.fields.video.fields.file.url" type="video/mp4")
          
  v-row
    v-col(
      cols='6',
      sm='6',
      md='4',
      lg='3'
    ) 
      div(v-if="post.fields.titlePage === false",  v-for="post in getPostByStage($route.params.slug)" 
      :key="post.sys.id")
        v-card.mx-auto( elevation="0")
          v-card-title 
            h3.text-h3  {{ post.fields.title }}   
          v-img(
              :src='`${setEyeCatch(post).url}`',
            )

</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts']),
    ...mapGetters([
      'getPostBySys_id',
      'getPostByStage',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
  },
  methods: {
    setLocation(lanPosition, lonPosition) {
      const position = {
        lat: lanPosition,
        lng: lonPosition,
      }
      return position
    },
  },
}
</script>
<style lang="scss" scope>
.videoWrap {
  width: 1200px;
  height: 600px;
  max-width: 1200px;
  max-height: 600px;
}
.map-size {
  width: 1200px;
  height: 600px;
  max-width: 1200px;
  max-height: 600px;
  // @media (min-width: 960px) {
  //   width: calc(50vw - #{$aside-width});
  //   height: 35vh;
  // }
}
.map-block {
  width: 1200px;
  height: 600px;
  max-width: 1200px;
  max-height: 600px;
  // position: absolute;
  // overflow: hidden;
  // width: calc(100vw -400px);
  // height: 200px;
  // top: 65vh;
  // left: 500px;
  // display: none;
  // @media (min-width: 960px) {
  //   display: block;
  //   left: 0;
  //   width: calc(50vw - #{$aside-width} - 15px);
  //   height: 35vh;
  // }
  // border: 1px solid red;
}
</style>
