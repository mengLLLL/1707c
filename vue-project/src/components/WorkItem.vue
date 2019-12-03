<template>
    <div class="item">
        <div class="left">
            <Icon :type="data.type" />
        </div>
        <div class="center">
            <div>{{data.title}}</div>
            <div>
                <Star :score="data.score" />
                <span>{{ data.people.join() }}</span>
            </div>
            <div>
                <span>{{data.startTime}}</span>
                <span>{{data.endTime}}</span>
            </div>
        </div>
        <div class="right">
            {{ data.class === 1 ? '日常工作' : (data.class === 2 ? '专项工作' : '临时工作') }}
        </div>
    </div>
</template>
<script>
import Icon from './Icon.vue'
import Star from './Star'
export default {
    props: ['data'],
    components: {
        Icon,
        Star
    },
    created() {
        console.log(123, this.data)
    }
}
</script>
<style lang="scss">
    .item {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
    }
</style>