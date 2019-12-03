<template>
    <div>
        <span v-if=" type === 'pending' ">进行中</span>
        <span v-if=" type === 'reject' ">强制终止</span>
        <span v-if=" type === 'fullfilled' ">已完成</span>
    </div>
</template>
<script>
export default {
 props: ['type']   
}
</script>