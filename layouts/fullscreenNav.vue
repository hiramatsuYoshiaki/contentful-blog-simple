<template lang="pug">
v-app
  v-navigation-drawer.d-flex.justify-sm-center.align-sm-center.pa-8(
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
        //- v-list-item-action.pl-8.pr-2
        //-   v-icon(large dark) {{ item.icon }}
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

  v-main
    nuxt 
  v-footer(app, width='100vw', color='grey darken-4')
    //- v-toolbar-title.d-flex.justify-center.align-center
    v-toolbar-title.footerTitle.pa-4.d-flex.justify-center.align-center
      //- span TOURdeHDR+3

      img.mr-4.d-none.d-md-block(
        src='~/assets/img/logo/h-works1200x600white.svg',
        alt='h-works logo',
        height='28'
      )
      img.d-block.mr-4(
        src='~assets/img/logo/h-logo.svg',
        alt='h-works',
        height='28'
      )
      .mr-4.mt-2 &copy; {{ new Date().getFullYear() }}
  //- v-bottom-navigation(app) bottom-navigation
</template>
<script>
export default {
  data() {
    return {
      drawer: null,
      toggle_exclusive: undefined,
      items: [
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
        // {
        //   icon: 'mdi-map-marker',
        //   title: 'LOCATION',
        //   to: '/locations',
        // },
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
    }
  },
}
</script>
<style lang="scss">
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
