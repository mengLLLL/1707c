<template>
  <div class="home">
    <Top />
    <Bottom />
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Bottom from '@/components/Bottom.vue'
export default {
  name: 'home',
  components: {
    Top,
    Bottom
  },
  created() {
    this.$store.dispatch('getList')
  }
}
</script>
