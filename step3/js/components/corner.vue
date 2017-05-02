<style>
    .corner {
        position: fixed;
        top: 0;
        right: 0;
        padding: 0.625rem;
    }
</style>

<template>
    <div class="corner">
        <notification v-for="notification in notifications" :key="notification" :message="notification"></notification>
    </div>
</template>

<script>
    import { Bus } from '../bus';
    import Notification from './notification.vue';

    export default {
        data: () => {
            return {
                notifications: []
            }
        },
        components: { Notification },
        created() {
            Bus.$on('add.notification', (message) => {
                this.notifications.push(message)
            })
        }
    }
</script>