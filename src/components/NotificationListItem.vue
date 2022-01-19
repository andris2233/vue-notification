<template>
  <div class="notification">
    <header class="notification__header">
      <h3 class="notification__header-title"> {{ notificationTitle }} </h3>

      <button class="notification__header-clear" @click="onClear"/>
    </header>

    <div class="notification__content"> {{ notification.description }} </div>
  </div>
</template>

<script>
import { getNotificationTitle } from '@/_utils/notification';

export default {
  name: 'NotificationListItem',

  props: {
    notification: { type: Object, required: true },
  },

  computed: {
    notificationTitle() {
      return getNotificationTitle(this.notification);
    },
  },

  methods: {
    onClear() {
      this.$emit('clear');
    },
  },
};
</script>

<style lang="scss" scoped>

.notification {
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
  padding: 10px;

  border-radius: 7px;
  box-shadow: 0 0 10px rgb(196, 196, 196);

  background-color: rgba(235, 235, 235, 0.6);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    opacity 0.2s ease,
  ;

  color: rgb(78, 78, 78);
  width: 350px;

  &:hover {
    background-color: rgba(235, 235, 235, 0.8);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;

    &-title {
      margin-right: 10px;
      font-size: 1rem;
    }

    &-clear {
      cursor: pointer;
      border: 0;
      background: transparent;
      outline: none;

      position: relative;
      width: 10px;
      height: 10px;
      padding: 0;

      &::before, &::after {
        content: '';

        position: absolute;
        top: 0;

        width: 2px;
        height: 13px;

        background-color: rgb(59, 59, 59);
        transform-origin: top center;
        transition: background-color 0.3s ease;
      }

      &:hover {
        &::before, &::after {
          background-color: black;
        }
      }

      &::before {
        right: 0;

        transform: rotate(39deg);
      }

      &::after {
        left: 0;

        transform: rotate(-39deg);
      }
    }

    &__content {
      font-size: 0.6rem;
    }
  }
}

</style>
