export default {
  install(app, options) {
    // Глобальный метод $translate
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((obj, path) => obj?.[path], options) ?? '*Нет перевода*';
    };

    // Делаем options доступными через inject('i18n')
    app.provide('i18n', options);

    // Добавляем $i18n для глобального доступа
    app.config.globalProperties.$i18n = options;
  }
};
