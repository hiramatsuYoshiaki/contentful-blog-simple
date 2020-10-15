import client from '~/plugins/contentful'
import defaultEyeCatch from '~/assets/img/png/defaultEyeCatch.png'
// state
export const state = () => ({
  posts: [],
  categories: [],
  tags: [],
})

// mutation
export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setLinks(state, entries) {
    console.log('setLink 1 ------------------------------------')
    state.tags = []
    state.categories = []
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i]
      if (entry.sys.contentType.sys.id === 'tag') state.tags.push(entry)
      else if (entry.sys.contentType.sys.id === 'category')
        state.categories.push(entry)
    }
    state.categories.sort((a, b) => a.fields.sort - b.fields.sort)
  },
}
// actions
export const actions = {
  async feedPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate',
      })
      .then((res) => {
        console.log('feedPosts setLink----------------------')
        commit('setLinks', res.includes.Entry)
        commit('setPosts', res.items)
      })
      .catch((err) => {
        console.log('contentful api error: ' + err)
      })
  },
}
// getters
export const getters = {
  getPostBySys_id: (state) => (sysId) => {
    return state.posts.filter((post) => post.sys.id === sysId)
  },
  filterTitlePage: (state) => () => {
    return state.posts.filter((post) => {
      return post.fields.titlePage === true
    })
  },
  filterPostPage: (state) => () => {
    return state.posts.filter((post) => {
      return post.fields.titlePage === false
    })
  },
  setEyeCatch: () => (post) => {
    if (!!post.fields.heroImage && !!post.fields.heroImage.fields)
      return {
        url: post.fields.heroImage.fields.file.url,
        title: post.fields.heroImage.fields.title,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },
  setEyeCatchImage: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields)
      return {
        url: post.fields.image.fields.file.url,
        title: post.fields.image.fields.title,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },
  setEyeCatchImage2: () => (post) => {
    if (!!post && !!post.fields)
      return {
        url: post.fields.file.url,
        title: post.fields.title,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage' }
  },
  // setEyeCatch: () => (post) => {
  //   if (!!post.fields.heroImage && !!post.fields.heroImage.fields)
  //     return {
  //       url: `https:${post.fields.heroImage.fields.file.url}`,
  //       title: post.fields.heroImage.fields.title,
  //     }
  //   else return { url: defaultEyeCatch, title: 'defaultImage' }
  // },
  // setEyeCatchImage: () => (post) => {
  //   if (!!post.fields.image && !!post.fields.image.fields)
  //     return {
  //       url: `https:${post.fields.image.fields.file.url}`,
  //       title: post.fields.image.fields.title,
  //     }
  //   else return { url: defaultEyeCatch, title: 'defaultImage' }
  // },
  // setEyeCatchImage2: () => (post) => {
  //   if (!!post && !!post.fields)
  //     return {
  //       url: `https:${post.fields.file.url}`,
  //       title: post.fields.title,
  //     }
  //   else return { url: defaultEyeCatch, title: 'defaultImage' }
  // },
}
