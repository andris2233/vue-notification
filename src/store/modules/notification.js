const notificationTimeout = 8000;
const notificationMaxLength = 10;

export default {
  namespaced: true,

  state: {
    notifications: [],
  },

  mutations: {
    addNotification(state, notification) {
      state.notifications.unshift(notification);

      if (notificationMaxLength < state.notifications.length) {
        const removed = state.notifications.pop();

        removed.clearTimeout();
      }
    },

    removeNotificationById(state, id) {
      const notificationIndex = state.notifications
        .findIndex((notification) => notification.id === id);

      state.notifications[notificationIndex].clearTimeout();

      state.notifications.splice(notificationIndex, 1);
    },
  },

  actions: {
    /**
     * @param {*} context
     * @param {import('@/_utils/notification').Notification} notification
     */
    addNotification({ commit }, notification) {
      const timeout = setTimeout(() => {
        commit('removeNotificationById', notification.id);
      }, notificationTimeout);

      notification.setTimeout(timeout);

      commit('addNotification', notification);
    },

    removeNotificationByIdImmidiate({ commit }, notificationId) {
      commit('removeNotificationById', notificationId);
    },
  },
};
