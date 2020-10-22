<template lang="pug">
v-container 
    v-row 
        v-col 
            h1 TOURdeHDR+3 
            h1 Tags Groupe 
            h1 stages/index.vue 
    v-row 
        v-col(cols="12", md="4").pa-4
            v-sheet.mb-8(elevation='0')
              v-subheader 
                h3.text-h3 Locations 
              v-divider
            v-chip-group(column ).pl-4
                div(v-for='tag in tags', :key='tag.sys.id')
                    v-badge(
                        bordered
                        overlap
                        color="grey darken-3"
                        :content="postCount(tag)"
                        v-show='tag.fields.lacation'
                        offset-y="16"
                        offset-x="16"
                    ).mt-4.mr-2
                        v-chip
                            nuxt-link(:to="`/tags/${tag.sys.id}`")
                                v-icon {{`mdi-${tag.fields.icon}`}}
                                span.text-h5.mr-2 {{ tag.fields.name }}

        v-col(cols="12", md="4").pa-4
            v-sheet.mb-8(elevation='0')
              v-subheader 
                h3.text-h3 Times 
              v-divider
            v-chip-group(column).pl-4
                div(v-for='tag in tags', :key='tag.sys.id')
                    v-badge(
                        bordered
                        overlap
                        color="grey darken-3"
                        :content="postCount(tag)"
                        v-show='tag.fields.time'
                        offset-y="16"
                        offset-x="16"
                    ).mt-4.mr-2
                        v-chip
                            nuxt-link(:to="`/tags/${tag.sys.id}`")
                                v-icon {{`mdi-${tag.fields.icon}`}}
                                span.text-h5.mr-2 {{ tag.fields.name }}

        v-col(cols="12", md="4").pa-4
            v-sheet.mb-8(elevation='0')
              v-subheader 
                h3.text-h3 Veichles 
              v-divider
            v-chip-group(column).pl-4
                div(v-for='tag in tags', :key='tag.sys.id')
                    //-   v-chip(v-show='tag.fields.move') 
                    v-badge(
                        bordered
                        overlap
                        color="grey darken-3"
                        :content="postCount(tag)"
                        v-show='tag.fields.move'
                        offset-y="16"
                        offset-x="16"
                    ).mt-4.mr-2
                        v-chip
                            nuxt-link(:to="`/tags/${tag.sys.id}`")
                                v-icon {{`mdi-${tag.fields.icon}`}}
                                span.text-h5.mr-2 {{ tag.fields.name }} 
    v-row 
        v-col(cols="12", md="12").pa-4
            v-sheet.mb-8(elevation='0')
              v-subheader 
                h3.text-h3 Various 
              v-divider
            v-chip-group(column).pl-4
                div(v-for='tag in tags', :key='tag.sys.id')
                    //-   v-chip(v-show='tag.fields.various') 
                    v-badge(
                        bordered
                        overlap
                        color="grey darken-3"
                        :content="postCount(tag)"
                        v-show='tag.fields.various'
                        offset-y="16"
                        offset-x="16"
                    ).mt-4.mr-2
                        v-chip
                            nuxt-link(:to="`/tags/${tag.sys.id}`")
                                v-icon {{`mdi-${tag.fields.icon}`}}
                                span.text-h5.mr-2 {{ tag.fields.name }} 

            
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'fullscreenNav',
  computed: {
    ...mapState(['posts', 'stages', 'tags']),
    postCount() {
      return (currentTag) => {
        return this.$store.getters.associatePosts(currentTag).length
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.bd1 {
  border: 1px solid red;
}
.bd2 {
  border: 1px solid green;
}
.bd3 {
  border: 1px solid blue;
}
a {
  color: black !important;
  opacity: 1 !important;
}
</style>
