<template lang="pug">
v-app
  v-navigation-drawer.d-flex.justify-center.align-center.pa-8(
    v-model='drawer',
    dark,
    app,
    bottom,
    stateless,
    width='100vw',
    height='100vh',
    color='grey darken-4'
  ) 
    v-list.d-flex.flex-column.justify-center.align-center(
      light,
      dense,
      width='30rem',
      height='50rem',
      text
    ) 
      v-list-item(
        v-for='(item, i) in items',
        :key='i',
        :to='item.to',
        router,
        exact,
        elevation=0,
        @click.stop='drawer = !drawer',
        color='grey darken-4'
      )
        v-list-item-content
          v-list-item-title.text-center
            v-btn(dark, elevation=0, color='grey darken-4') 
              h1.text-h4 {{ item.title }}
      v-btn.mt-8(@click.stop='drawer = !drawer')
        v-icon mdi-close-thick

  v-app-bar(app, color='grey darken-4') 
    v-toolbar-title 
      nuxt-link(to='/')
        h2 TOURdeHDR+3
    v-spacer 
    v-toolbar-items.d-none.d-sm-flex
      v-btn(
        v-for='(item, i) in items',
        :key='i',
        :to='item.to',
        router,
        exact,
        elevation=0,
        color='grey darken-4'
      )
        //- div.mr-4(
        //-   v-for='(item, i) in items',
        //-   :key='i',
        //- )
        //- v-icon.d-none.d-lg-block.mr-1 {{ item.icon }}
        //- nuxt-link(:to="item.to")
        span(color='white') {{ item.title }}
    v-app-bar-nav-icon.d-flex.d-sm-none(@click.stop='drawer = !drawer')
      v-icon.white--text mdi-menu

  v-main
    nuxt 
  v-bottom-navigation.d-block.d-flex.justify-space-between.d-sm-none.px-4(app, v-model="value" ) 
      v-btn( value="recent")
        span Recent
        v-icon mdi-history
      v-btn( value="favorites")
        span Favorites
        v-icon mdi-heart
      v-btn( value="nearby")
        span Nearby
        v-icon mdi-map-marker

</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      toggle_exclusive: undefined,
      items: [
        {
          icon: 'mdi-home',
          title: 'HOME',
          to: '/home',
        },
        {
          icon: 'mdi-new-box',
          title: 'NEW',
          to: '/',
        },
        {
          icon: 'mdi-post-outline',
          title: 'POST',
          to: '/posts',
        },
        {
          icon: 'mdi-numeric-1-box-multiple',
          title: 'STAGES',
          to: '/stages',
        },
        // {
        //   icon: 'mdi-tag-multiple',
        //   title: 'TAGS',
        //   to: '/tags',
        // },
      ],
      value: 'recent',
    }
  },
}
</script>
<style lang="scss">
// * {
//   border: 1px solid red;
// }
html {
  font-size: 62.5%; //62.5% 1rem=10px
}

// a {
//   color: black;
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.5;
//   }
// }
// * {
//   border: 1px solid lightgray;
// }
.footerTitle {
  width: 100vw;
}
</style>
