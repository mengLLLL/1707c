<template>
    <div>
        <div>
            <input type="text" v-model="addItem">
        </div>
        <div v-for="(item, i) in listData" :key="i">
            <WorkItem :data="item"/>
        </div>
    </div>
</template>
<script>
import WorkItem from '@/components/WorkItem.vue'

export default {
    components: {
        WorkItem,
    },
    data() {
        return {
            addItem: ''
        }
    },
    computed: {
        listData() {
            return this.$store.getters.filterListData
        }
    },
}
</script>