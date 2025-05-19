export default {
  install(app) {
    // Глобальный метод $log
    app.config.globalProperties.$log = (message) => {
      console.log(`[LOG] ${message}`);
    };

    // Дополнительные методы (по желанию)
    app.config.globalProperties.$logError = (message) => {
      console.error(`[ERROR] ${message}`);
    };

    app.config.globalProperties.$logWarning = (message) => {
      console.warn(`[WARNING] ${message}`);
    };
  }
};
