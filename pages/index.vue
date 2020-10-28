<template lang="pug">
v-container(fluid)
  v-row 
    v-col 
      h1.text-center.text-h3.text-md-h1 TOURdeHDE+3
      h2.text-center.text-h5.text-md-h3 HDR Photo Blog 3rd Generation
  v-row 
    v-col.newPostSec.mx-auto(
      v-for='(post, i) in filterPostPage().slice(0, 4)',
      :key='post.sys.id',
      cols='12',
      md='12',
      lg='8'
    ) 
      //- .heroImgSec 
      //-   img.heroImg(:src='setEyeCatch(post).url')
      //- .postImgSec
      //-   div(
      //-     v-for='(postImg2, i) in post.fields.image2',
      //-     :key='postImg2.sys.id'
      //-   ) 
      //-     div(v-show='i === 0')
      //-       img(:src='setEyeCatchImage2(postImg2).url')
      //- .postImgLiner
      .postImageSec
        .postImageSecInner
          .postHeroImgSec 
            img.heroImg(:src='setEyeCatch(post).url')
          .postOtherImg
            div(
              v-for='(postImg2, i) in post.fields.image2',
              :key='postImg2.sys.id'
            ) 
              div(v-show='i === 0')
                img(:src='setEyeCatchImage2(postImg2).url') 

      .titleSec 
        h1.text-h1.mb-4 NEW! POST
        h3.text-h3 {{ post.fields.title }}
        h3.text-h5 {{ post.fields.stage }}
        //- h3.text-h5 {{ post.fields.body }}
        h3.text-h3 MORE
      .stageImgSec
        img(:src='setEyeCatchImage(post).url')
      .stageImgText
        div
          h5.text-h5.text-center Category
        div
          h4.text-h4.text-center {{ post.fields.title }} X HDRi
      .stageImgLiner

  //- v-row 
  //-   v-col.imagWrape(
  //-     v-for='(post, i) in filterPostPage().slice(0, 4)',
  //-     :key='post.sys.id',
  //-     cols='12'
  //-   ) 
  //-     v-row
  //-       v-col.rightSide(cols='12', md='6', order='last')
  //-         v-card.heroWrape
  //-           //- v-row 
  //-           //-   v-col
  //-           //-     v-card
  //-           //-       v-card-subtitle
  //-           //-         h1.text-h3.text-center {{ post.fields.title }}

  //-           //-       v-card-text 
  //-           //-         h3.text-h5.text-center {{ post.fields.body }}
  //-           v-img.heroImg(:src='setEyeCatch(post).url')

  //-         v-row 
  //-           v-col(
  //-             v-for='(postImg2, i) in post.fields.image2',
  //-             :key='postImg2.sys.id',
  //-             cols='12'
  //-           )
  //-             div(v-if='i === 0')
  //-               v-card.img2Card
  //-                 v-img.img2Img(:src='setEyeCatchImage2(postImg2).url')
  //-                 //- v-card-subtitle
  //-                 //-   h1.text-h3.text-center {{ postImg2.fields.title }}
  //-                 //- v-card-text 
  //-                 //-   h3.text-h5.text-center {{ postImg2.fields.description }}

  //-       v-col.leftSide(cols='12', md='6', order='first', offset-md='2')
  //-         .subimgWrape
  //-           section.subimgSection
  //-             img.subimg(:src='setEyeCatchImage(post).url')
  //-             .subimgCardStageName
  //-               h3.text-h6.text-sm-h5.text-center {{ post.fields.stages.fields.name }}
  //-             .subimgCardCategoryName
  //-               h1.text-h4.text-sm-h3.text-center {{ post.fields.category.fields.name }}
  //-             .boxline

  //-     //- v-row.heroImage 
  //-     //-   v-col.postHeroWrape
  //-     //-     v-card.postHero
  //-     //-       v-img(:src='setEyeCatch(post).url', height='auto', width='100%')
  //-     //-       v-row 
  //-     //-         v-col.postTitleWrape
  //-     //-           v-card.postTitle 
  //-     //-             v-card-subtitle
  //-     //-               h1.text-h3.text-center nanba parks
  //-     //-             v-card-text 
  //-     //-               h3.text-h5.text-center Canion park
  //-     //- v-row.subImage 
  //-     //-   v-col.postHeroWrape 
  //-     //-     v-card.postSubImage
  //-     //-       v-img(
  //-     //-         :src='setEyeCatchImage(post).url',
  //-     //-         height='auto',
  //-     //-         width='100%'
  //-     //-       )

  //-     //-     v-row 
  //-     //-       v-col 
  //-     //-         v-card.postHeroWrape
  //-     //-           v-card.postSubImageTitle
  //-     //-             v-card-subtitle.text-h1.text-center TOURdeHDR+
  //-     //-             v-card-text.text-h1.text-center STAGE1
  //-     //-   v-row 
  //-     //-     v-col.postHeroWrape(
  //-     //-       v-for='postImg2 in post.fields.image2',
  //-     //-       :key='postImg2.sys.id'
  //-     //-     )
  //-     //-       v-card.postSubImage
  //-     //-         v-img(:src='setEyeCatchImage2(postImg2).url')

  //-     //- v-row 
  //-     //-   v-col 
  //-     //-     v-card
  //-     //-       v-carousel.slider.postHeroWrape(
  //-     //-         cycle,
  //-     //-         hide-delimiter-background,
  //-     //-         show-arrows-on-hover
  //-     //-       )
  //-     //-         v-carousel-item.postHeroWrape(
  //-     //-           v-for='postImg2 in post.fields.image2',
  //-     //-           :key='postImg2.sys.id',
  //-     //-           width='300px'
  //-     //-         ) 
  //-     //-           v-card
  //-     //-             v-img(:src='setEyeCatchImage2(postImg2).url')

  //- //- v-row 
  //- //-   v-col 
  //-   //- h5 header vuetify carousel 
  //-   //- h2 slide1: TOURdeHDR LOGO 
  //-   //- h2 slide2: Category Title 
  //-   //- h3 slide3: New post HeroImage 
  //-   //- v-carousel(
  //-   //-   cycle,
  //-   //-   height='800',
  //-   //-   hide-delimiter-background,
  //-   //-   show-arrows-on-hover
  //-   //- )
  //-   //-   v-carousel-item(v-for='(slide, i) in filterPostPage()', :key='i') 
  //-   //-     v-sheet(height='100%')
  //-   //-       v-row 
  //-   //-         v-col(cols='12', sm='12', md='8', lg='8') 
  //-   //-           v-img(:src='slide.img', height='100%', width='auto')
  //-   //-         v-col(cols='12', sm='12', md='4', lg='4') 
  //-   //-           h1.text-h1 slider
  //-         //- v-row(
  //-         //-   class="fill-height"
  //-         //-   align="center"
  //-         //-   justify="center"
  //-         //-   width="100%"
  //-         //- )
  //-         //-   v-cor(cols="12" md="6") 
  //-         //-     v-card(
  //-         //-       class="fill-height"
  //-         //-       align="center"
  //-         //-       justify="center"
  //-         //-       width="100%"
  //-         //-     )
  //-         //-       v-card-title
  //-         //-         h1.text-h1.white--text left
  //-         //-           //- v-img(
  //-         //-           //-   :src="slide.img"
  //-         //-           //-   height="auto"
  //-         //-           //-   width="100%"
  //-         //-           //- )

  //-         //- v-row(
  //-         //-   class="fill-height"
  //-         //-   align="center"
  //-         //-   justify="center"
  //-         //- )
  //-         //-   v-card(
  //-         //-     class="fill-height"
  //-         //-     align="center"
  //-         //-     justify="center"
  //-         //-   )
  //-         //-       v-img(
  //-         //-         :src="slide.img"
  //-         //-         height="auto"
  //-         //-         width="70%"
  //-         //-       )

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
$lineColor: rgb(30, 163, 251);
// * {
//   border: 1px solid lightgrey;
// }
.newPostSec {
  border: 3px solid red;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  @media (min-width: 961px) {
    height: 900px;
    display: block;
  }
}
.stageImgSec {
  position: relative;
  @media (min-width: 961px) {
    position: absolute;
    top: 40px;
    right: 50%;
  }
  img {
    width: 300px;
    height: auto;
    vertical-align: bottom;
    @media (min-width: 601px) {
      width: 500px;
    }
    @media (min-width: 961px) {
      width: 400px;
      margin-right: 0px;
    }
    @media (min-width: 1261px) {
      width: 400px;
      margin-right: 0px;
    }
  }
}
.stageImgLiner {
  position: absolute;
  top: 30px;
  left: -5%;
  width: 100%;
  height: 200px;
  border: 2px solid $lineColor;
  @media (min-width: 601px) {
    top: 30px;
    left: -5%;
    width: 100%;
    height: 340px;
  }
  @media (min-width: 961px) {
    top: 50px;
    left: 0%;
    width: 80%;
    height: 280px;
  }
  @media (min-width: 1261px) {
    top: 50px;
    left: 0%;
    width: 80%;
    height: 280px;
  }
}
.stageImgText {
  position: absolute;
  top: 120px;
  left: 0;
  @media (min-width: 601px) {
    top: 240px;
    left: 0;
  }
  @media (min-width: 961px) {
    top: 220px;
    left: 0;
  }
  @media (min-width: 1261px) {
    top: 220px;
    left: 0;
  }
  h5 {
    background-color: rgba(6, 121, 141, 0.8);
    color: white;
    line-height: 1.6;
    // margin-bottom: -4px;
    width: 200px;
  }
  h4 {
    background-color: rgba(6, 121, 141, 0.6);
    color: white;
    line-height: 1.6;
    margin-bottom: 4px;
    max-width: 700px;
    padding: 0 36px;
    margin-left: 16px;
  }
}
.heroImgSec {
  position: relative;
  @media (min-width: 961px) {
    position: absolute;
    top: 200px;
    left: 50%;
  }
  img {
    width: 300px;
    height: auto;
    @media (min-width: 601px) {
      width: 500px;
    }
    @media (min-width: 961px) {
      width: 500px;
      margin-left: -50px;
      max-height: 500px;
    }
    @media (min-width: 1261px) {
      width: 500px;
      margin-left: -50px;
      max-height: 500px;
    }
  }
}
.postImageSec {
  border: 3px solid blue;
  position: relative;
  @media (min-width: 961px) {
    position: absolute;
    top: 200px;
    left: 50%;
  }
}
.postHeroImgSec {
  img {
    width: 300px;
    height: auto;
    @media (min-width: 601px) {
      width: 500px;
    }
    @media (min-width: 961px) {
      width: 500px;
      margin-left: -50px;
      max-height: 500px;
    }
    @media (min-width: 1261px) {
      width: 500px;
      margin-left: -50px;
      max-height: 500px;
    }
  }
}
.postOtherImg {
  position: absolute;
  bottom: -60px;
  left: -60px;
  @media (min-width: 601px) {
    bottom: -60px;
    left: -60px;
  }
  @media (min-width: 961px) {
    bottom: -160px;
    left: 0;
  }
  img {
    width: 130px;
    height: auto;
    @media (min-width: 601px) {
      width: 130px;
    }
    @media (min-width: 961px) {
      width: 300px;
      margin-left: -100px;
      max-height: 300px;
    }
    @media (min-width: 1261px) {
      width: 300px;
      margin-left: -100px;
      max-height: 300px;
    }
  }
}
.postImageSecInner {
  position: relative;
}
// .postImgSec {
//   position: relative;
//   @media (min-width: 961px) {
//     position: absolute;
//     top: 480px;
//     left: 50%;
//   }
//   img {
//     width: 300px;
//     height: auto;
//     @media (min-width: 601px) {
//       width: 500px;
//     }
//     @media (min-width: 961px) {
//       width: 300px;
//       margin-left: -100px;
//       max-height: 300px;
//     }
//     @media (min-width: 1261px) {
//       width: 300px;
//       margin-left: -100px;
//       max-height: 300px;
//     }
//   }
// }
.postImgLiner {
  position: absolute;
  // top: 40px;
  // right: 50%;
  top: 480px;
  left: 50%;
  margin-left: -90px;
  margin-top: 10px;
  width: 400px;
  height: 220px;
  border: 2px solid $lineColor;
}
.titleSec {
  position: relative;
  margin-top: 60px;
  @media (min-width: 961px) {
    position: absolute;
    top: 50%;
    right: 50%;
    margin-top: -60px;
    margin-right: 60px;
  }
}

// ok
// .imagWrape {
//   position: relative;
//   width: 100%;
//   overflow: hidden;
//   //sm
//   // @media (min-width: 601px) {
//   // width: 100%;
//   // min-height: 100vh;
//   // }
//   //md
//   @media (min-width: 961px) {
//     width: 800px;
//     margin-left: auto;
//     margin-right: auto;
//   }
//   //lg
//   // @media (min-width: 1265px) {
//   //   width: 1000px;
//   //   min-height: 100vh;
//   //   margin-left: auto;
//   //   margin-right: auto;
//   // }
// }
// .leftSide,
// .rightSide {
//   position: relative;
//   // height: 500px;
//   // @media (min-width: 961px) {
//   //   position: absolute;
//   //   top: 0;
//   //   left: 0;
//   // }
// }
// .heroWrape {
//   padding: 0 0;
//   margin-left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: transparent;
//   @media (min-width: 961px) {
//     padding: 140px 0;
//     margin-left: 0;
//     border: 3px solid blue;
//   }
// }
// .heroImg {
//   width: 100%;
//   height: auto;
//   @media (min-width: 961px) {
//     width: 900px;
//     height: auto;
//   }
// }
// .img2Card {
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   background-color: transparent;
//   @media (min-width: 961px) {
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     transform: translate(-30%, -40%);
//   }
//   border: 3px solid red;
// }
// .img2Img {
//   width: 300px;
//   height: auto;
//   //sm
//   @media (min-width: 601px) {
//     width: 500px;
//     height: auto;
//   }
//   //md
//   @media (min-width: 961px) {
//     width: 200px;
//     height: auto;
//   }
//   //lg
//   @media (min-width: 1265px) {
//     width: 250px;
//     height: auto;
//   }
// }
// // .subimgCard {
// //   margin-top: 0;
// //   @media (min-width: 961px) {
// //     margin-top: 100px;
// //   }
// // }
// .subimgWrape {
//   position: relative;
//   padding: 80px 100px;
//   background-color: transparent;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   border: 3px solid purple;
// }
// .subimgSection {
//   margin-left: 0;
// }
// .subimg {
//   position: relative;
//   width: 360px;
//   height: auto;
//   display: inline-block;
//   margin-right: auto;
//   margin-left: auto;
//   //sm
//   @media (min-width: 601px) {
//     width: 500px;
//     height: auto;
//   }
//   //md
//   @media (min-width: 961px) {
//     // position: absolute;
//     top: 0;
//     right: 0;
//     width: 400px;
//     height: auto;
//   }
//   //lg
//   @media (min-width: 1265px) {
//     width: 500px;
//     height: auto;
//   }
// }
// .subimgCardStageName {
//   position: absolute;
//   bottom: 36%;
//   left: 0;

//   // @media (min-width: 961px) {
//   //   top: 100px;
//   //   left: 200px;
//   // }
//   // @media (min-width: 1265px) {
//   //   width: 500px;
//   //   height: auto;
//   // }
//   h3 {
//     color: white;
//     background-color: rgba(0, 0, 0, 1);
//     padding: 4px 16px;
//   }
// }
// .subimgCardCategoryName {
//   position: absolute;
//   bottom: 26%;
//   left: 0;
//   padding-left: 50px;
//   // @media (min-width: 961px) {
//   //   top: 100px;
//   //   left: 200px;
//   // }
//   // @media (min-width: 1265px) {
//   //   width: 500px;
//   //   height: auto;
//   // }
//   h1 {
//     color: white;
//     background-color: rgba(0, 0, 0, 1);
//     padding: 2px 38px;
//     // margin-left: 30px;
//   }
// }
// .boxline {
//   position: absolute;
//   top: 100px;
//   right: 8px;
//   width: 120%;
//   height: 240px;
//   border: 2px solid rgb(9, 157, 177);
//   @media (min-width: 601px) {
//     height: 340px;
//   }
//   @media (min-width: 961px) {
//     height: 260px;
//     right: -80px;
//   }
//   @media (min-width: 1265px) {
//     height: 330px;
//     right: -100px;
//   }
// }

// // .heroImage {
// //   position: relative;
// //   width: 100%;
// //   overflow: hidden;
// //   border: 2px solid black;
// //   //sm
// //   @media (min-width: 601px) {
// //     // width: 100%;
// //     // min-height: 100vh;
// //   }
// //   //md
// //   @media (min-width: 961px) {
// //     position: absolute;
// //     top: 0;
// //     left: 50%;
// //     // transform: translate(0, -50%);
// //     width: 800px;
// //     min-height: 100vh;
// //     margin-left: auto;
// //     margin-right: auto;
// //   }
// //   //lg
// //   // @media (min-width: 1265px) {
// //   //   position: absolute;
// //   //   top: 0;
// //   //   right: 0;
// //   //   width: 1000px;
// //   //   min-height: 100vh;
// //   //   margin-left: auto;
// //   //   margin-right: auto;
// //   // }
// // }
// // .postHeroWrape {
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   //md
// //   @media (min-width: 961px) {
// //     justify-content: flex-start;
// //   }
// //   border: 1px solid blue;
// // }
// // .postHero {
// //   position: relative;
// //   width: 300px;
// //   height: auto;
// //   //   background-color: red;
// //   //   @media (min-width: 601px) {
// //   //     width: 400px;
// //   //     height: 400px;
// //   //   }
// //   //   //md
// //   @media (min-width: 961px) {
// //     width: 400px;
// //     height: 400px;
// //     margin-left: auto;
// //     margin-right: auto;
// //   }
// //   //   //lg
// //   //   @media (min-width: 1265px) {
// //   //     width: 600px;
// //   //     height: 600px;
// //   //     margin-left: auto;
// //   //     margin-right: auto;
// //   //   }
// // }
// // .subImage {
// //   position: relative;
// //   width: 100%;
// //   overflow: hidden;
// //   border: 2px solid black;
// //   //sm
// //   @media (min-width: 601px) {
// //     // width: 100%;
// //     // min-height: 100vh;
// //   }
// //   //md
// //   @media (min-width: 961px) {
// //     position: absolute;
// //     top: 0;
// //     right: 50%;
// //     // transform: translate(0, -50%);
// //     width: 800px;
// //     min-height: 100vh;
// //     margin-left: auto;
// //     margin-left: auto;
// //   }
// //   //lg
// //   // @media (min-width: 1265px) {
// //   //   position: absolute;
// //   //   top: 0;
// //   //   left: 0;
// //   //   width: 1000px;
// //   //   min-height: 100vh;
// //   //   margin-left: auto;
// //   //   margin-right: auto;
// //   // }
// // }

// // // .postHeroWrape {
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // // }

// // .stageImage {
// //   position: relative;
// //   //   top: 30%;
// //   //   right: 0;
// //   width: 300px;
// //   height: auto;
// //   //   background-color: green;
// //   //   @media (min-width: 601px) {
// //   //     width: 400px;
// //   //     height: 200px;
// //   //   }
// //   //   //md
// //   //   @media (min-width: 961px) {
// //   //     width: 480px;
// //   //     height: 280px;
// //   //     margin-left: auto;
// //   //     margin-right: auto;
// //   //   }
// //   //   //lg
// //   //   @media (min-width: 1265px) {
// //   //     width: 600px;
// //   //     height: 360px;
// //   //     margin-left: auto;
// //   //     margin-right: auto;
// //   //   }
// // }
// // .postSubImage {
// //   position: relative;
// //   //   bottom: 0;
// //   //   left: 30%;
// //   width: 300px;
// //   height: auto;
// //   //   background-color: cyan;
// //   //   @media (min-width: 601px) {
// //   //     width: 400px;
// //   //     height: 400px;
// //   //   }
// //   //   //md
// //   //   @media (min-width: 961px) {
// //   //     width: 480px;
// //   //     height: 480px;
// //   //     margin-left: auto;
// //   //     margin-right: auto;
// //   //   }
// //   //   //lg
// //   //   @media (min-width: 1265px) {
// //   //     width: 600px;
// //   //     height: 600px;
// //   //     margin-left: auto;
// //   //     margin-right: auto;
// //   //   }
// // }
// // .slider {
// //   position: relative;
// //   //   top: 50%;
// //   //   left: 0;
// //   // width: 300px !important;
// //   // height: auto !important;
// // }
// // .postTitle {
// //   position: relative;
// //   //   top: 50%;
// //   //   left: 0;
// //   width: 100%;
// //   border: 1px solid red;
// // }

// // // .postSubImageTitle {
// // //   position: relative;
// // //   //   top: 50%;
// // //   //   left: 0;
// // //   width: 100%;
// // // }
</style>
