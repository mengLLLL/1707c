<template>
    <div>
        <div class="top-box">
            <div class="left">
                <span>任务发放</span>
                <span class="filter">
                    <span @click="show('')">全部任务</span>
                    <span @click="show('pending')">进行中的任务</span>
                    <span @click="show('reject')">强制终止的任务</span>
                    <span @click="show('fullfilled')">已完成的任务</span>
                </span>
            </div>
            <div class="right">
                <input type="text" placeholder="请输入工作名称进行查询" @input="handleInput" v-model="search">
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        show(type) {
            this.$store.commit('setFilterType', type)
        },
        handleInput(e) {
            this.$store.commit('searchData', e.target.value)
        }
    },
}
</script>
<style lang="scss">
    .top-box {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #333;
        div {
            flex: 1;
        }
    }
    .filter {
        span {
            margin-right: 5px;
        }
    }
    
</style>