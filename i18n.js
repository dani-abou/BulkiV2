const LOCALES_LOCATIONS = './src/assets/translation'

module.exports = {
  // These are all the locales you want to support in
  locales: ['default', 'en-US', 'fr', 'nl-NL'],
  defaultLocale: 'default',
  pages: [{ '*': ["common"] }],
  loadLocaleFrom: (lang, ns) =>
    import(`${LOCALES_LOCATIONS}/${lang}/${ns}.json`).then((m) => m.default)
}
