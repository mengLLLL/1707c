<template>
    <div>
        <span v-for="(item, i) in 5" :key="i" :class="[{ yellow: i < score }]">☆</span>
    </div>
</template>
<script>
export default {
    props: ['score'],
    created() {
        console.log('start', this.score)
    }
}
</script>
<style lang="scss">
    .yellow {
        color: yellow;
    }
</style>