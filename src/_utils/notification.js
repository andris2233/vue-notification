import uuid from '@/_utils/uuid';

export const NOTIFICATIONS_TYPES = Object.freeze({
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  SUCCESS: 'SUCCESS',
  TEXT: 'TEXT',
});

/**
 * Notification type
 * @typedef {Object} Notification
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} description
 * @property {number | null} timeout
 * @property {() => void} clearTimeout
 * @property {() => void} setTimeout
 */

/**
 * function that returns a notification
 * @param {'ERROR' | 'WARNING' | 'SUCCESS' | 'TEXT'} type // NOTIFICATIONS_TYPES property
 * @param {{ title?: string | null, description: string }} notification // notification data object
 * @returns {Notification} // notification implementation
 */
export const createNotification = (type, { title, description }) => {
  if (!(type in NOTIFICATIONS_TYPES)) {
    throw new Error('Notification error: incorrect notification type');
  }

  if (!description.trim()) {
    throw new Error('Notification error: incorrect notification description');
  }

  if (!['string', 'undefined'].includes(typeof title) || title !== null) {
    throw new Error('Notification error: incorrect notification title type');
  }

  return Object.freeze({
    type,
    title: title ? title.trim() : '',
    description: description.trim(),
    timeout: null,
    id: uuid(),

    clearTimeout() {
      clearTimeout(this.timeout);

      this.timeout = null;
    },

    setTimeout(timeout) {
      if (this.timeout) this.clearTimeout();

      this.timeout = timeout;
    },
  });
};
