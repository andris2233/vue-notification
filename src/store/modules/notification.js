// const notificationTimeout = 5000;
const notificationMaxLength = 10;

export default {
  namespaced: true,

  state: {
    notifications: [],
  },

  mutations: {
    addNotification(state, notification) {
      state.notifications.push(notification);

      if (notificationMaxLength < state.notifications.length) {
        state.notifications.shift();
      }
    },
  },

  actions: {
    removeNotificationById() {},

    addNotification() {},
  },
};
