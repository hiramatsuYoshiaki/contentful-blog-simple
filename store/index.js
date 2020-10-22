import client from '~/plugins/contentful'
import defaultEyeCatch from '~/assets/img/png/defaultEyeCatch.png'
// state
export const state = () => ({
  posts: [],
  categories: [],
  tags: [],
  authers: [],
})

// mutation
export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setAuthers(state, payload) {
    // console.log('setAuthers+++++++++++++++++++++++++')
    // console.log(payload)
    state.authers = payload
  },
  setLinks(state, entries) {
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
        // console.log('feedPosts setLink----------------------')
        commit('setLinks', res.includes.Entry)
        commit('setPosts', res.items)
      })
      .catch((err) => {
        console.log('contentful Posts api error: ' + err)
      })
  },
  async feedAuthers({ commit }) {
    await client
      .getEntries({
        content_type: 'person',
      })
      .then((res) => {
        // console.log('feedAuthers +++++++++++++')
        commit('setAuthers', res.items)
      })
      .catch((err) => {
        console.log('contentful Authers api error: ' + err)
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
  getPostByStage: (state) => (slug) => {
    let selectStage = []
    selectStage = state.posts.filter((post) => {
      return post.fields.category.fields.slug === slug
    })
    return selectStage.sort((a, b) => a.fields.stageNo - b.fields.stageNo)
  },
  getPostByTag: (state) => (slug) => {
    const selectTag = []
    state.posts.map((post) => {
      const tags = post.fields.tags.find((tag) => {
        return tag.sys.id === slug
      })
      if (tags) {
        selectTag.push(post)
      }
    })
    if (selectTag) {
      return selectTag
    }
    // selectTag = state.posts.filter((post) => {
    //   // return post.fields.tag.fields.slug === slug
    //   // return post.fields.tags.fields.slug === slug
    //   return true
    // })
    // if (selectTag) {
    //   return selectTag
    // }
    // return selectStage.sort((a, b) => a.fields.stageNo - b.fields.stageNo)
  },
  setEyeCatch: () => (post) => {
    if (!!post.fields.heroImage && !!post.fields.heroImage.fields)
      return {
        url: post.fields.heroImage.fields.file.url,
        title: post.fields.heroImage.fields.title,
        description: post.fields.heroImage.fields.description,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage', description: '' }
  },
  setEyeCatchImage: () => (post) => {
    if (!!post.fields.image && !!post.fields.image.fields)
      return {
        url: post.fields.image.fields.file.url,
        title: post.fields.image.fields.title,
        description: post.fields.image.fields.description,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage', description: '' }
  },
  setEyeCatchImage2: () => (post) => {
    if (!!post && !!post.fields)
      return {
        url: post.fields.file.url,
        title: post.fields.title,
        description: post.fields.description,
      }
    else return { url: defaultEyeCatch, title: 'defaultImage', description: '' }
  },
  associatePosts: (state) => (currentTag) => {
    const posts = []
    for (let i = 0; i < state.posts.length; i++) {
      const post = state.posts[i]
      if (post.fields.tags) {
        const tag = post.fields.tags.find(
          (tag) => tag.sys.id === currentTag.sys.id
        )

        if (tag) posts.push(post)
      }
    }
    return posts
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
