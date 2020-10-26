<template lang="pug">
v-container
  //- v-row 
  //-   v-col 
  //-     h1 TOURdeHDE+3 
  //-     h2 HDR Photo Blog Therd Generation
  v-row 
    v-col.imagWrape(
      v-for='(post, i) in filterPostPage().slice(0, 1)',
      :key='post.sys.id'
    ) 
      v-row.heroImage 
        v-col.postHeroWrape
          v-card.postHero
            v-img(:src='setEyeCatch(post).url', height='auto', width='100%')
      //- v-row 
      //-   v-col.postTitleWrape
      //-     v-card.postTitle 
      //-       //- v-card-title.text-center
      //-       //-   h1.text-h1 nanba parks
      //-       v-card-subtitle
      //-         h1.text-h1.text-center nanba parks
      //-       v-card-text 
      //-         h3.text-h3.text-center Canion park
      v-row.subImage 
        v-col.postHeroWrape 
          v-card.postSubImage
            v-img(
              :src='setEyeCatchImage(post).url',
              height='auto',
              width='100%'
            )

      //- v-row 
      //-   v-col 
      //-     v-card.postHeroWrape
      //-       v-card.postSubImageTitle
      //-         v-card-subtitle.text-h1.text-center TOURdeHDR+
      //-         v-card-text.text-h1.text-center STAGE1
      //- v-row 
      //-   v-col.postHeroWrape(
      //-     v-for='postImg2 in post.fields.image2',
      //-     :key='postImg2.sys.id'
      //-   )
      //-     v-card.postSubImage
      //-       v-img(:src='setEyeCatchImage2(postImg2).url')

      //- v-row 
      //-   v-col 
      //-     v-card
      //-       v-carousel.slider.postHeroWrape(
      //-         cycle,
      //-         hide-delimiter-background,
      //-         show-arrows-on-hover
      //-       )
      //-         v-carousel-item.postHeroWrape(
      //-           v-for='postImg2 in post.fields.image2',
      //-           :key='postImg2.sys.id',
      //-           width='300px'
      //-         ) 
      //-           v-card
      //-             v-img(:src='setEyeCatchImage2(postImg2).url')

  //- v-row 
  //-   v-col 
    //- h5 header vuetify carousel 
    //- h2 slide1: TOURdeHDR LOGO 
    //- h2 slide2: Category Title 
    //- h3 slide3: New post HeroImage 
    //- v-carousel(
    //-   cycle,
    //-   height='800',
    //-   hide-delimiter-background,
    //-   show-arrows-on-hover
    //- )
    //-   v-carousel-item(v-for='(slide, i) in filterPostPage()', :key='i') 
    //-     v-sheet(height='100%')
    //-       v-row 
    //-         v-col(cols='12', sm='12', md='8', lg='8') 
    //-           v-img(:src='slide.img', height='100%', width='auto')
    //-         v-col(cols='12', sm='12', md='4', lg='4') 
    //-           h1.text-h1 slider
          //- v-row(
          //-   class="fill-height"
          //-   align="center"
          //-   justify="center"
          //-   width="100%"
          //- )
          //-   v-cor(cols="12" md="6") 
          //-     v-card(
          //-       class="fill-height"
          //-       align="center"
          //-       justify="center"
          //-       width="100%"
          //-     )
          //-       v-card-title
          //-         h1.text-h1.white--text left
          //-           //- v-img(
          //-           //-   :src="slide.img"
          //-           //-   height="auto"
          //-           //-   width="100%"
          //-           //- )

          //- v-row(
          //-   class="fill-height"
          //-   align="center"
          //-   justify="center"
          //- )
          //-   v-card(
          //-     class="fill-height"
          //-     align="center"
          //-     justify="center"
          //-   )
          //-       v-img(
          //-         :src="slide.img"
          //-         height="auto"
          //-         width="70%"
          //-       )

  v-row 
    v-col
      h5 sebtion1 vuetify card
      h1 photo:New Post HeroImage
      h1 text: title
      h1 text: category
      h1 date: publishDate
      h1 text: body
      h1 icon: tage
      h1 text: tag(location name)
  v-row 
    v-col(cols='12', md='6')
      h5 section2 vuetify card
      h1 video google earth
    v-row 
      v-col(cols='12', md='6') 
        h5 section3t vuetify card
        h1 google map
  v-row 
    v-col(cols='12', md='6') 
      h5 section4 vuetify chip-group
      h1 chips: stage
    v-row(cols='12', md='6') 
      v-col 
        h5 section5 vuetify chip-group
        h1 chips: tags
  v-row 
    v-col 
      h1 footer
  //- .bg-img-card(:style="{background: `top center / cover no-repeat url(${setEyeCatch(post).url})`}")
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  // data() {
  //   return {
  //     slides: [
  //       {
  //         title: 'TOURdeHDR+3 aaa',
  //         img: require('~/assets/img/png/defaultEyeCatch1.png'),
  //       },
  //       {
  //         title: 'STAGE',
  //         img: require('~/assets/img/png/defaultEyeCatch1.png'),
  //       },
  //       {
  //         title: 'Hero Image',
  //         img: require('~/assets/img/png/defaultEyeCatch1.png'),
  //       },
  //     ],
  //   }
  // },
  computed: {
    ...mapState(['posts', 'stages', 'tags']),
    ...mapGetters([
      'filterTitlePage',
      'filterPostPage',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
    // ...mapGetters(['filterTitlePage', 'filterPostPage']),
    // setSlider() {
    //   return this.sliders
    // },
  },
  methods: {
    setSlider() {
      const sliders = [
        {
          title: 'TOURdeHDR+3',
          img: require('~/assets/img/png/defaultEyeCatch1.png'),
        },
        {
          title: 'STAGE',
          img: require('~/assets/img/png/defaultEyeCatch1.png'),
        },
        {
          title: 'Hero Image',
          img: require('~/assets/img/png/defaultEyeCatch1.png'),
        },
      ]
      this.filterTitlePage()
        .slice(0, 1)
        .map((post) => {
          sliders[1].img = this.setEyeCatch(post).url
        })
      this.filterPostPage()
        .slice(0, 1)
        .map((post) => {
          sliders[2].img = this.setEyeCatch(post).url
        })
      return sliders
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  border: 1px solid lightgrey;
}
.imagWrape {
  position: relative;
  width: 100%;

  // background-color: cadetblue;
  overflow: hidden;
  //sm
  @media (min-width: 601px) {
    // width: 100%;
    // min-height: 100vh;
  }
  //md
  @media (min-width: 961px) {
    width: 800px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
  //lg
  // @media (min-width: 1265px) {
  //   width: 1000px;
  //   min-height: 100vh;
  //   margin-left: auto;
  //   margin-right: auto;
  // }
}
.heroImage {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 2px solid black;
  //sm
  @media (min-width: 601px) {
    // width: 100%;
    // min-height: 100vh;
  }
  //md
  @media (min-width: 961px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 800px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
  //lg
  // @media (min-width: 1265px) {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   width: 1000px;
  //   min-height: 100vh;
  //   margin-left: auto;
  //   margin-right: auto;
  // }
}
.subImage {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 2px solid black;
  //sm
  @media (min-width: 601px) {
    // width: 100%;
    // min-height: 100vh;
  }
  //md
  @media (min-width: 961px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 800px;
    min-height: 100vh;
    margin-left: auto;
    margin-left: auto;
  }
  //lg
  @media (min-width: 1265px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 1000px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
}
.postHeroWrape {
  display: flex;
  justify-content: center;
  align-items: center;
}

.postHero {
  position: relative;
  width: 300px;
  height: auto;
  //   background-color: red;
  //   @media (min-width: 601px) {
  //     width: 400px;
  //     height: 400px;
  //   }
  //   //md
  //   @media (min-width: 961px) {
  //     width: 480px;
  //     height: 480px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
  //   //lg
  //   @media (min-width: 1265px) {
  //     width: 600px;
  //     height: 600px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
}
.stageImage {
  position: relative;
  //   top: 30%;
  //   right: 0;
  width: 300px;
  height: auto;
  //   background-color: green;
  //   @media (min-width: 601px) {
  //     width: 400px;
  //     height: 200px;
  //   }
  //   //md
  //   @media (min-width: 961px) {
  //     width: 480px;
  //     height: 280px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
  //   //lg
  //   @media (min-width: 1265px) {
  //     width: 600px;
  //     height: 360px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
}
.postSubImage {
  position: relative;
  //   bottom: 0;
  //   left: 30%;
  width: 300px;
  height: auto;
  //   background-color: cyan;
  //   @media (min-width: 601px) {
  //     width: 400px;
  //     height: 400px;
  //   }
  //   //md
  //   @media (min-width: 961px) {
  //     width: 480px;
  //     height: 480px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
  //   //lg
  //   @media (min-width: 1265px) {
  //     width: 600px;
  //     height: 600px;
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
}
.slider {
  position: relative;
  //   top: 50%;
  //   left: 0;
  // width: 300px !important;
  // height: auto !important;
}
.postTitle {
  position: relative;
  //   top: 50%;
  //   left: 0;
  width: 100%;
  border: 1px solid red;
}

// .postSubImageTitle {
//   position: relative;
//   //   top: 50%;
//   //   left: 0;
//   width: 100%;
// }
</style>
