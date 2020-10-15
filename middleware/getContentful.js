export default async ({ store }) => {
  if (!store.state.posts.length) await store.dispatch('feedPosts')
  // if (!store.state.categories.length) await store.dispatch('getCategories')
  // await store.dispatch('feedPosts')
  // await store.dispatch('getCategories')
}
