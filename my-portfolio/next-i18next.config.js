module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "ua"],
  },
  fallbackLng: {
    default: ["en"],
  },
  debug: process.env.NODE_ENV === "development",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  localePath: "./public/locales",
  ns: [
    "common",
    "navigation",
    "hero",
    "skills",
    "experience",
    "projects",
    "contact",
  ],
  defaultNS: "common",
};
