<template>
  <transition-group
    name="notification"
    tag="section"
    class="notification-list"
  >
    <NotificationListItem
      v-for="notification of notifications"
      :key="notification.id"
      :notification="notification"
      class="notifications__item"
      @clear="onClear(notification)"
    />
  </transition-group>
</template>

<script>
import NotificationListItem from '@/components/NotificationListItem.vue';

export default {
  name: 'NotificationList',

  components: { NotificationListItem },

  computed: {
    notifications() {
      return this.$store.state.notification.notifications;
    },
  },

  methods: {
    onClear(notification) {
      this.$store.dispatch('notification/removeNotificationByIdImmidiate', notification.id);
    },
  },
};
</script>

<style lang="scss" scoped>

.notification-list {
  position: fixed;
  top: 10px;
  right: 10px;

  display: inline-flex;
  flex-direction: column;

  & > *:nth-child(n):not(:last-child) {
    margin-bottom: 20px;
  }

  &__item {
    transition: all 0.3s;
  }
}

.notification-enter {
  transform: translateX(100%);
  opacity: 0;
}

.notification-leave-active {
  position: absolute;
}

.notification-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

</style>
