<template>
  <main>
    <form @submit.prevent="createNotification">
      <h2> Notification </h2>

      <input v-model.trim="notification.title" type="text">
      <input v-model.trim="notification.description" type="text">

      <button type="submit"> create </button>
    </form>

    <NotificationList />
  </main>
</template>

<script>
import NotificationList from '@/components/NotificationList.vue';

import { createNotification, NOTIFICATIONS_TYPES } from '@/_utils/notification';

export default {
  name: 'App',

  components: { NotificationList },

  data: () => ({
    notification: {
      title: '',
      description: '',
      type: NOTIFICATIONS_TYPES.TEXT,
    },
  }),

  methods: {
    createNotification() {
      const { notification } = this;
      const notificationData = createNotification(NOTIFICATIONS_TYPES.TEXT, notification);

      this.$store.dispatch('notification/addNotification', notificationData);
      this.clearNotificationData();
    },

    clearNotificationData() {
      this.notification.title = '';
      this.notification.description = '';
    },
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

h1, h2, h3 {
  margin: 0;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 320px;
  height: 170px;

  border-radius: 7px;
  box-shadow: 0 0 7px gray;
  padding: 20px;

  h2 {
    font-family: sans-serif;
    color: rgb(71, 71, 71);
    text-align: center;
  }

  button {
    width: 80px;
    align-self: flex-end;
  }
}

</style>
