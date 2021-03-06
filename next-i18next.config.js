module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "es-ES",
    locales: ["es-ES", "en-US"],
    localeDetection: false,
    reloadOnPrerender: process.env.NODE_ENV === "development",
  },
};
