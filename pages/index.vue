<template lang="pug">
v-container.container(fluid)
  v-row 
    v-col 
      h1.text-center.text-h3.text-md-h1 TOURdeHDE+3
      h3.text-center.text-h5.text-md-h3 HDR Photo Blog 3rd Generation

  v-row 
    v-col.newPostSec.mx-auto(
      v-for='(post, i) in filterPostPage().slice(0, 4)',
      :key='post.sys.id',
      cols='12',
      md='12',
      lg='8'
    ) 
      .moreSec(
        v-bind:class='[{ moreSecLeft: i % 2 === 0 }, { moreSecRight: i % 2 != 0 }]'
      ) 
        nuxt-link(:to='`/posts/${post.sys.id}`')
          h3.text-h4.grey--text.px-4 MORE
            v-icon.ml-2.mb-1 mdi-arrow-right
        .moreLine

      .postImageSec(
        v-bind:class='[{ postImageSecLeft: i % 2 === 0 }, { postImageSecRight: i % 2 != 0 }]'
      ) 
        .postImageSecInner
          div(
            v-bind:class='[{ postHeroImgSecLeft: i % 2 === 0 }, { postHeroImgSecRight: i % 2 != 0 }]'
          ) 
            img.heroImg(:src='setEyeCatch(post).url')
          div(
            v-bind:class='[{ postOtherImgLeft: i % 2 === 0 }, { postOtherImgRight: i % 2 != 0 }]'
          ) 
            div(
              v-for='(postImg2, idx) in post.fields.image2',
              :key='postImg2.sys.id'
            ) 
              div(v-show='idx === 0')
                img(:src='setEyeCatchImage2(postImg2).url') 
          .postImgLiner(
            v-bind:class='[{ postImgLinerLeft: i % 2 === 0 }, { postImgLinerRight: i % 2 != 0 }]'
          ) 

      .titleSec(
        v-bind:class='[{ titleSecLeft: i % 2 === 0 }, { titleSecRight: i % 2 != 0 }]'
      ) 
        h3.text-h3.mb-2 {{ post.fields.title }}
        h3.text-h5.mb-8 {{ post.fields.stage }}
        h5.text-h5.bodyText {{ post.fields.body }}
      .stageImgSec(
        v-bind:class='[{ stageImgSecLeft: i % 2 === 0 }, { stageImgSecRight: i % 2 != 0 }]'
      )
        img(:src='setEyeCatchImage(post).url')
      .stageImgText(
        v-bind:class='[{ stageImgTextLeft: i % 2 === 0 }, { stageImgTextRight: i % 2 != 0 }]'
      )
        div
          h3.text-h3.text-center New! Post
        div
          h4.text-h4.text-center {{ post.fields.title }} X HDRi
      div(
        v-bind:class='[{ stageImgLinerLeft: i % 2 === 0 }, { stageImgLinerRight: i % 2 != 0 }]'
      )
  v-row 
    v-col 
      h1.text-center.text-h3.text-md-h1 Locations/GoogleEarth
      h3.text-center.text-h5.text-md-h3 New Stage Video Review
  v-row 
    v-col.newPostSec.mx-auto(
      v-for='(post, i) in filterTitlePage().slice(0, 2)',
      :key='post.sys.id',
      cols='12',
      md='12',
      lg='8'
    ) 
      img(:src='setEyeCatch(post).url', width='300px', height='auto') 

      GmapMap.map-size(
        :center='{ lat: post.fields.location.lat, lng: post.fields.location.lon }',
        :zoom='14',
        map-type-id='satellite'
      )
        GmapMarker(
          :position='setLocation(post.fields.location.lat, post.fields.location.lon)',
          :clickable='true',
          :draggable='false'
        )
      video(autoplay='autoplay', loop, muted, playsinline, controls)
        source(:src='post.fields.video.fields.file.url', type='video/mp4')

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
  data() {
    return {
      //   isRight: true,
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
    }
  },
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
    // isOdd(i) {
    //   if (i % 2 === 0) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
  },
  methods: {
    setLocation(lanPosition, lonPosition) {
      const position = {
        lat: lanPosition,
        lng: lonPosition,
      }
      return position
    },
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
$lineColor: rgba(6, 121, 141, 1);
$heroTitleBg: rgba(6, 121, 141, 0.8);
$heroTextBg: rgba(6, 121, 141, 0.6);
$moreLinkBg: rgba(6, 121, 141, 0.2);

// * {
//   border: 1px solid lightgrey;
// }
.container {
  background: linear-gradient(
    rgba(214, 243, 247, 0.1),
    rgba(115, 250, 243, 0.3)
  );
}
.newPostSec {
  // border: 3px solid black;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  @media (min-width: 961px) {
    height: 1000px;
    display: block;
  }
}

.postImageSec {
  // border: 3px solid green;
  position: relative;
  margin-bottom: 16px;
  @media (min-width: 961px) {
    position: absolute;
    top: 200px;
  }
}
.postImageSecLeft {
  @media (min-width: 961px) {
    left: 50%;
  }
}
.postImageSecRight {
  @media (min-width: 961px) {
    right: 50%;
  }
}
.postImageSecInner {
  position: relative;
  // border: 1px solid red;
}

.postHeroImgSecLeft {
  img {
    width: 300px;
    height: auto;
    margin-left: -140px;
    @media (min-width: 601px) {
      width: 300px;
      margin-left: -240px;
    }
    @media (min-width: 961px) {
      width: 500px;
      margin-left: -50px;
      margin-bottom: 0;
    }
    @media (min-width: 1261px) {
      width: 500px;
      margin-left: -50px;
      margin-bottom: 0;
    }
  }
}
.postHeroImgSecRight {
  img {
    width: 300px;
    height: auto;
    margin-right: -140px;
    @media (min-width: 601px) {
      width: 300px;
      margin-right: -240px;
    }
    @media (min-width: 961px) {
      width: 500px;
      margin-right: -50px;
      margin-bottom: 0;
    }
    @media (min-width: 1261px) {
      width: 500px;
      margin-right: -50px;
      margin-bottom: 0;
    }
  }
}
.postOtherImgLeft {
  position: absolute;
  top: 80px;
  left: 100px;
  // border: 1px solid yellow;
  @media (min-width: 601px) {
    position: absolute;
    top: 80px;
    left: 40px;
  }
  @media (min-width: 961px) {
    position: absolute;
    top: 280px;
    left: 0;
  }
  @media (min-width: 1261px) {
    position: absolute;
    top: 280px;
    left: 0;
  }
  img {
    width: 200px;
    height: auto;
    @media (min-width: 601px) {
      width: 200px;
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
.postOtherImgRight {
  position: absolute;
  top: 80px;
  right: 100px;
  // border: 1px solid yellow;
  @media (min-width: 601px) {
    position: absolute;
    top: 80px;
    right: 40px;
  }
  @media (min-width: 961px) {
    position: absolute;
    top: 280px;
    right: 0;
  }
  @media (min-width: 1261px) {
    position: absolute;
    top: 280px;
    right: 0;
  }
  img {
    width: 200px;
    height: auto;
    @media (min-width: 601px) {
      width: 200px;
    }
    @media (min-width: 961px) {
      width: 300px;
      margin-right: -100px;
      max-height: 300px;
    }
    @media (min-width: 1261px) {
      width: 300px;
      margin-right: -100px;
      max-height: 300px;
    }
  }
}

.postImgLiner {
  width: 236px;
  height: 140px;
  border: 2px solid $lineColor;
  @media (min-width: 601px) {
    width: 236px;
    height: 140px;
  }
  @media (min-width: 961px) {
    width: 500px;
    height: 260px;
  }
  @media (min-width: 1261px) {
    width: 500px;
    height: 260px;
  }
}
.postImgLinerLeft {
  position: absolute;
  top: 90px;
  left: 80px;
  @media (min-width: 601px) {
    top: 90px;
    left: 20px;
  }
  @media (min-width: 961px) {
    top: 280px;
    left: 0;
    margin-left: -120px;
    margin-top: 10px;
  }
  @media (min-width: 1261px) {
    top: 280px;
    left: 0;
    margin-left: -120px;
    margin-top: 10px;
  }
}
.postImgLinerRight {
  position: absolute;
  top: 90px;
  right: 80px;
  @media (min-width: 601px) {
    top: 90px;
    right: 20px;
  }
  @media (min-width: 961px) {
    top: 280px;
    right: 0;
    margin-right: -120px;
    margin-top: 10px;
  }
  @media (min-width: 1261px) {
    top: 280px;
    right: 0;
    margin-right: -120px;
    margin-top: 10px;
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
.stageImgSec {
  img {
    width: 300px;
    height: auto;
    vertical-align: bottom;
    @media (min-width: 601px) {
      width: 500px;
    }
    @media (min-width: 961px) {
      width: 400px;
    }
    @media (min-width: 1261px) {
      width: 400px;
    }
  }
}
//left
.stageImgSecLeft {
  position: relative;
  @media (min-width: 961px) {
    position: absolute;
    top: 40px;
    right: 50%;
  }
}
//right
.stageImgSecRight {
  position: relative;
  @media (min-width: 961px) {
    position: absolute;
    top: 40px;
    left: 50%;
  }
}
.stageImgText {
  h3 {
    background-color: $heroTitleBg;
    color: white;
    line-height: 1.6;
    width: 200px;
  }
  h4 {
    background-color: $heroTextBg;
    color: white;
    line-height: 1.6;
    margin-bottom: 4px;
    max-width: 700px;
    padding: 0 36px;
    margin-left: 16px;
  }
}
.stageImgTextLeft {
  position: absolute;
  top: 100px;
  left: 0;
  @media (min-width: 601px) {
    top: 240px;
    left: 0;
  }
  @media (min-width: 961px) {
    top: 180px;
    left: 0;
  }
  @media (min-width: 1261px) {
    top: 200px;
    left: 0;
  }
}
.stageImgTextRight {
  position: absolute;
  top: 100px;
  right: 0;
  @media (min-width: 601px) {
    top: 240px;
    right: 0;
  }
  @media (min-width: 961px) {
    top: 180px;
    right: 0;
  }
  @media (min-width: 1261px) {
    top: 200px;
    right: 0;
  }
}
.stageImgLinerLeft {
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
.stageImgLinerRight {
  position: absolute;
  top: 30px;
  right: -5%;
  width: 100%;
  height: 200px;
  border: 2px solid $lineColor;
  @media (min-width: 601px) {
    top: 30px;
    right: -5%;
    width: 100%;
    height: 340px;
  }
  @media (min-width: 961px) {
    top: 50px;
    right: 0%;
    width: 80%;
    height: 280px;
  }
  @media (min-width: 1261px) {
    top: 50px;
    right: 0%;
    width: 80%;
    height: 280px;
  }
}

.titleSecLeft {
  position: relative;
  margin: 40px 0;
  padding: 4px;
  @media (min-width: 961px) {
    position: absolute;
    top: 50%;
    right: 50%;
    margin-top: -90px;
    margin-right: 120px;
    padding-left: 8px;
  }
}
.titleSecRight {
  position: relative;
  margin: 40px 0;
  padding: 4px;
  @media (min-width: 961px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -90px;
    margin-left: 120px;
    padding-right: 8px;
  }
}
.titleSec {
  width: 300px;
  @media (min-width: 601px) {
    width: 500px;
  }
  @media (min-width: 961px) {
    width: 340px;
  }
  @media (min-width: 1261px) {
    width: 300px;
  }
  h3 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 4px;
    width: 300px;
    @media (min-width: 601px) {
      width: 500px;
    }
    @media (min-width: 961px) {
      width: 340px;
    }
    @media (min-width: 1261px) {
      width: 300px;
    }
  }
  .bodyText {
    padding: 8px;
    // white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 300px;
    max-height: 300px;
    overflow: hidden;
    color: grey;
    @media (min-width: 601px) {
      max-width: 500px;
    }
    @media (min-width: 961px) {
      max-width: 320px;
    }
    @media (min-width: 1261px) {
      max-width: 280px;
    }
  }
}
.moreSecLeft {
  position: relative;
  margin-top: 100px;
  margin-bottom: 18px;
  @media (min-width: 961px) {
    position: absolute;
    bottom: 120px;
    left: 0;
    margin-top: 0;
  }
}
.moreSecRight {
  position: relative;
  margin-top: 100px;
  margin-bottom: 18px;
  @media (min-width: 961px) {
    position: absolute;
    bottom: 120px;
    right: 0;
    margin-top: 0;
  }
}
.moreSec {
  width: 300px;
  cursor: pointer;
  .moreLine {
    position: absolute;
    border-top: 2px solid $moreLinkBg;
    width: 300px;
    bottom: -4px;
    left: -20px;
  }
  &:hover {
    .moreLine {
      border-top: 16px solid $moreLinkBg;
    }
  }
}
.map-size {
  width: 300px;
  height: 200px;
  // @media (min-width: 960px) {
  //   width: calc(50vw - #{$aside-width});
  //   height: 35vh;
  // }
}
video {
  width: 300px;
  height: 200px;
}
</style>
