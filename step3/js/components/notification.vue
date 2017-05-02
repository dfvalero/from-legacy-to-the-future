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
    <div class="notification" v-if="text">{{ text }}</div>
</template>

<script>
    export default {
        props: ['message'],
        data: () => {
            return {
                text: '',
                delay: 1000
            }
        },
        created() {
            this.text = this.message;

            setTimeout(() => {
                this.text = '';
            }, this.delay);
        }
    }
</script>