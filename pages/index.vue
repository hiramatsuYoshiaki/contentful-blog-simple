<template lang="pug">
v-container
  //- v-row 
  //-   v-col 
  //-     div(v-touch:swipe.left="() => $router.push('stages')")
  //-     div(v-touch:swipe.right="() => $router.push('posts')")
  //-     div(v-touch:swipe="swipeRightHandler") Swipe Right 
  //-     div(v-touch:swipe.left="swipeLeftHandler") Swipe Here
  v-row 
    v-col(cols='12', sm='12', md='12', lg="10" xl="8" class="mx-auto")
      v-row 
        v-col(cols='12', sm='8', md='6')
          //- h1 stage slider group
          v-sheet(elevation="3" class="mb-8" height="126px").d-flex.justify-center.align-center
            v-slide-group(
              v-model='model',
              active-class='success',
              
            )
              v-slide-item(
                v-for='item in filterTitlePage().slice(0, 10)',
                :key='item.sys.id',
                v-slot:default='{ active, toggle }'
              )
                nuxt-link(:to="`/stages/${item.sys.id}`")
                  v-card.ma-1(
                    :color='active ? undefined : "grey lighten-1"',
                    height='auto',
                    width='100',
                    @click='toggle'
                  )
                    v-img.white--text.align-end(
                      :src='item.fields.heroImage.fields.file.url',
                      width="100%" height="auto"
                    )
                    h6.text-h6.text--black {{ item.fields.category.fields.stage }}
      
          //- h1.text-h3 post
          v-card(v-for="post in filterPostPage()" :key="post.sys.id" class="mb-8") 
            v-img(:src="`${setEyeCatch(post).url}`" width="100%" height="auto" max-width="600px")
            v-card-title {{ post.fields.title }}
            v-card-subtitle {{ post.fields.stage}}
            v-cars-actions
              nuxt-link(:to="`/posts/${post.sys.id}`") 
                v-btn(text) この投稿を見る
            v-divider
            v-card-actions
              v-spacer
              v-btn(icon)               
                v-icon mdi-tag
              v-btn(icon)               
                v-icon mdi-map-marker
              v-btn(icon)               
                v-icon mdi-instagram
            //- div.bg-img-card(:style="{background: `top center / cover no-repeat url(${setEyeCatch(post).url})`}")
            
        v-col.d-none.d-sm-block(cols='12', sm='4', md='6')
          section.mb-8 
             v-sheet(elevation="0" class="mb-8 pa-4" height="126px").d-flex.justify-start.align-center
              div(v-for="auther in authers" :key="auther.sys.id")
                div.d-flex.justify-start.align-center
                  img(
                    :src='auther.fields.image.fields.file.url',
                    :alt='auther.fields.image.fields.title',
                    :aspect-ratio='16 / 9',
                    width='80',
                    height='auto'
                  )
                  div.ml-4 
                    h5.text-h5.mb-2  {{ auther.fields.title}}
                    h5.text-h5  {{ auther.fields.company}}
          section.mb-8 
            v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Tags
              v-divider
              v-chip-group.pa-2(column)
                v-chip(v-for="tag in tags" :key="tag.sys.id" )
                  h1 {{ tag.fields.name }}
          section.mb-8 
           v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Stage
              v-divider
              v-chip-group.pa-2(column)
                v-chip(v-for="categorie in categories" :key="categorie.sys.id" )
                  h1 {{ categorie.fields.name }}
          section.mb-8 
             v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Locations
              v-divider
              v-chip-group.pa-2(column)
                div(v-for="tag in tags" :key="tag.sys.id" )
                  v-chip(v-show="tag.fields.lacation") 
                      h1 {{ tag.fields.name }}
          section.mb-8 
             v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Time
              v-divider
              v-chip-group.pa-2(column)
                div(v-for="tag in tags" :key="tag.sys.id" )
                  v-chip(v-show="tag.fields.time")
                    h1 {{ tag.fields.name }}
          section.mb-8 
             v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Veichle
              v-divider
              v-chip-group.pa-2(column)
                div(v-for="tag in tags" :key="tag.sys.id" )
                  v-chip(v-show="tag.fields.move")
                    h1 {{ tag.fields.name }}
          section.mb-8 
             v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Post Date
              v-divider
              v-chip-group.pa-2(column)
                v-chip(v-for="post in posts" :key="post.sys.id" )
                  h1 {{ post.fields.publishDate }}
          section.mb-8 
             v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Post Title
              v-divider
              v-chip-group.pa-2(column)
                v-chip(v-for="post in posts" :key="post.sys.id" )
                  h1 {{ post.fields.title }}
          section.mb-8 
            v-sheet(elevation="3" class="mb-8 pa-4" )
              v-subheader 
                h3.text-h3 Stage Title
              v-divider
              v-chip-group.pa-2(column)
                v-chip(v-for="categorie in categories" :key="categorie.sys.id" )
                  h1 {{ categorie.fields.name }}
          section.mb-8 
            v-sheet(elevation="3" class="mb-8 pa-4" ).d-flex.justify-start.align-center
              h1 link
          //- section.mb-8 
          //-   h1 Post Date
          //-   v-sheet(elevation="3" class="mb-8 pa-4" ).d-flex.justify-center.align-center
          //-     v-date-picker(
          //-       v-model="date1"
          //-       :events="arrayEvents"
          //-       event-color="red lighten-1"
          //-     )
          
          section.mb-8 
            h1 Post Date
            v-sheet( height="64" elevation="3")
              v-toolbar(flat)
                v-btn( outlined class="mr-4" color="grey darken-2"  @click="setToday") Today
                v-btn( fab text small color="grey darken-2" @click="prev")
                  v-icon(small) mdi-chevron-left
                v-btn(fab text small color="grey darken-2" @click="next")
                  v-icon(small) mdi-chevron-right
                v-toolbar-title( v-if="$refs.calendar") {{ $refs.calendar.title }}
                v-spacer
                v-menu(
                  bottom
                  right
                )
                  template( v-slot:activator="{ on, attrs }")
                    v-btn(
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                    )
                      span {{ typeToLabel[type] }}
                      v-icon(right) mdi-menu-down
                  v-list
                    v-list-item( @click="type = 'day'")
                      v-list-item-title Day
                    v-list-item( @click="type = 'week'")
                      v-list-item-title Week
                    v-list-item( @click="type = 'month'")
                      v-list-item-title Month
                    v-list-item( @click="type = '4day'")
                      v-list-item-title 4 days
            v-sheet(height="600") 
              v-calendar(
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
              )
               
                  
           
            
     
      v-row 
        v-col
          section.mb-4
            h1 TOURdeHDR SIMPLE
            p index.vue
          //- section.mb-4
          //-   h1 {{posts}}
          //-     //-   h1 tags-------------------------------------------------------------
          //-     //-   p {{ tags }}
          //-     //-   h1 category---------------------------------------------------------
          //-     //-   p {{ categories }}
          v-divider
          section.mb-4 
            h1 contentful blog post data
            //- div(v-for='(post, idxPost) in posts.slice(0, 3)', :key='post.sys.id')
            div(v-for='(post, idxPost) in filterPostPage().slice(0, 3)', :key='post.sys.id')
              h1 1.id: {{ post.sys.id }}
              h1 2.craete-date: {{ post.sys.createdAt }}
              h1 3.titlePage: {{ post.fields.titlePage }}
              h1 4.title: {{ post.fields.title }}
              h1 5.stage: {{ post.fields.stage }}
              h1 6.slug: {{ post.fields.slug }}
              
              
              //- h1 4. {{ post.fields.category.fields.name }}
              //- h1 4. {{ post.fields.heroImage.fields.title }}
              //- h1 4. {{ post.fields.heroImage.fields.file.url }}
              img(
                :src='post.fields.heroImage.fields.file.url',
                :alt='post.fields.heroImage.fields.title',
                :aspect-ratio='16 / 9',
                width='100',
                height='auto'
              )
              //-         h1 category: {{ post.fields.category }}
              //-         h1 tag: {{ post.fields.tags }}
              //-         h1 location: {{ post.fields.location }}
              img(
                :src='post.fields.author.fields.image.fields.file.url',
                :alt='post.fields.heroImage.fields.title',
                :aspect-ratio='16 / 9',
                width='100',
                height='auto'
              )
              h1 7.author: {{ post.fields.author.fields.image.fields.file.url}}
              h1 7.author: {{ post.fields.author.fields.image.fields.title}}
              h1 7.author: {{ post.fields.author.fields }}
             

              //- div.bg-img-card(:style="{
              //-   background: `top center / cover no-repeat url(${setEyeCatch(item).url})`
              //- }")
          //-     div(v-if="post.fields.image2")
          //-       div(v-for="(img,idxImg) in post.fields.image2" :kwy="post.sys.id")

          //- section  
            //- h1.text-h3.my-8 {{JSON.stringify(post.fields.heroImage)}}
          
       
</template>
<script>
// import client from '~/plugins/contentful'
import { mapState, mapGetters } from 'vuex'
export default {
  layout: 'fullscreenNav',
  // layout: 'MobileOverlayNavbar',
  computed: {
    ...mapState(['posts', 'tags', 'categories', 'authers']),
    ...mapGetters([
      'filterTitlePage',
      'filterPostPage',
      'setEyeCatch',
      'setEyeCatchImage',
      'setEyeCatchImage2',
    ]),
    // filterTitlePage() {
    //   return this.posts.filter(function (item) {
    //     return item.fields.titlePage === true
    //   })
    // },
  },
  data() {
    return {
      model: null,
      show: false,
      cnt: 1,
      cards: [
        {
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 12,
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6,
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6,
        },
      ],
      // date picker
      // arrayEvents: null,
      // date1: new Date().toISOString().substr(0, 10),
      // date2: new Date().toISOString().substr(0, 10),
      // calender
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1',
      ],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party',
      ],
    }
  },
  mounted() {
    // this.arrayEvents = [...Array(6)].map(() => {
    //   const day = Math.floor(Math.random() * 30)
    //   const d = new Date()
    //   d.setDate(day)
    //   return d.toISOString().substr(0, 10)
    // })
    this.$refs.calendar.checkChange()
  },
  methods: {
    swipeRightHandler() {
      // alert('swipeRightHandler')
      //  cancelAnimationFrame(this.reqAnimation)
      this.$router.push('posts')
    },
    swipeLeftHandler() {
      // alert('swipeRightHandler')
      //  cancelAnimationFrame(this.reqAnimation)
      this.$router.push('stages')
    },
    // functionEvents(date) {
    //   const [, , day] = date.split('-')
    //   if ([12, 17, 28].includes(parseInt(day, 10))) return true
    //   if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
    //   return false
    // },
    viewDay({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = ''
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
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
<style lang="scss" scoped>
// * {
//   border: 1px solid red;
// }
.bg-img-card {
  width: 100%;
  height: 25vh;
}
</style>
