// import i18n from "@/shared/i18n";
const Trans = {
    // guessDefaultLocale() {
    //     const userPersistedLocale = Trans.getPersistedLocale();
    //     if (userPersistedLocale) {
    //         return userPersistedLocale;
    //     }
    //     const userPreferredLocale = Trans.getUserLocale();
    //     if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
    //         return userPreferredLocale.locale;
    //     }
    //     if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
    //         return userPreferredLocale.localeNoRegion;
    //     }
    //     return Trans.defaultLocale;
    // },
    // isLocaleSupported(locale: String) {
    //     return Trans.supportedLocales.includes(locale);
    // },
    // getUserLocale() {
    //     const locale =
    //         window.navigator.language ||
    //         Trans.defaultLocale;
    //     return {
    //         locale: locale,
    //         localeNoRegion: locale.split("-")[0],
    //     };
    // },
    // getPersistedLocale() {
    //     const persistedLocale = localStorage.getItem("user-locale");

    //     if (Trans.isLocaleSupported(persistedLocale)) {
    //         return persistedLocale;
    //     } else {
    //         return null;
    //     }
    // },
    // get supportedLocales() {
    //     return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
    // },
    // get defaultLocale() {
    //     return import.meta.env.VITE_DEFAULT_LOCALE;
    // },
    // set currentLocale(newLocale: string) {
    //     i18n.global.locale.value = newLocale;
    // },
    // get currentLocale() {
    //     return i18n.global.locale.value;
    // },

    // async switchLanguage(newLocale: string) {
    //     Trans.currentLocale = newLocale
    //     document.querySelector("html")?.setAttribute("lang", newLocale)
    //     localStorage.setItem("user-locale", newLocale)
    // },
};
export default Trans;