<template lang="pug">
v-container 
  h1 stages _slug.vue
  h3 param: {{ $route.params.slug }}
</template>
<script>
export default {
  layout: 'fullscreenNav',
}
</script>
