import client from '~/plugins/contentful'
// state
export const state = () => ({
  posts: [],
})

// mutation
export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
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
        // commit('setLinks', res.includes.Entry)
        commit('setPosts', res.items)
      })
      .catch((err) => {
        console.log('contentful api error: ' + err)
      })
  },
}
