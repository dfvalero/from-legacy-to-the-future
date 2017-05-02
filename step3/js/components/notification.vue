<style>
    .notification {
        position: relative;
        float: right;
        margin-bottom: 0.625rem;
        border-radius: 0.25rem;
        padding: 1.375rem;
        color: #FFFFFF;
        background: rgba(0, 0, 0, 0.75);
        text-align: left;
        clear: both;
    }
</style>

<template>
    <div class="notification">{{ message }}</div>
</template>

<script>
    let delay = 1000;

    export default {
        props: ['id', 'message'],
        created() {
            setTimeout(() => {
                this.$emit('remove', this.id);
            }, delay);
        }
    }
</script>