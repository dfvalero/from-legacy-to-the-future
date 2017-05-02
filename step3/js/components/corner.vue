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
        <notification v-for="notification in notifications" :key="notification.id" :id="notification.id" :message="notification.message" @remove="removeNotification"></notification>
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
                this.notifications.push({
                    id: new Date().getTime(),
                    message: message
                })
            })
        },
        methods: {
            removeNotification(id) {
                let removeIndex = false;

                this.notifications.map((notification, index) => {
                    if(notification.id === id) {
                        removeIndex = index;
                    }
                });

                if(removeIndex !== false) {
                    this.notifications.splice(removeIndex, 1);
                }
            }
        }
    }
</script>