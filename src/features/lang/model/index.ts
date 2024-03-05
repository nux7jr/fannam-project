import i18n from "@/shared/i18n";
export function useLang() {
    function guessDefaultLocale() {
        const userPersistedLocale = getPersistedLocale();
        if (userPersistedLocale) {
            return userPersistedLocale;
        }
        const userPreferredLocale = getUserLocale();
        if (isLocaleSupported(userPreferredLocale.locale)) {
            return userPreferredLocale.locale;
        }
        if (isLocaleSupported(userPreferredLocale.localeNoRegion)) {
            return userPreferredLocale.localeNoRegion;
        }
        return defaultLocale();
    }
    function isLocaleSupported(locale: any) {
        // i18n.global.availableLocales проверить!
        return i18n.global.availableLocales.includes(locale);
    }
    function getUserLocale() {
        const locale =
            window.navigator.language ||
            defaultLocale();
        return {
            locale: locale,
            localeNoRegion: locale.split("-")[0],
        };
    }
    function getPersistedLocale() {
        const persistedLocale = localStorage.getItem("user-locale");

        if (isLocaleSupported(persistedLocale)) {
            return persistedLocale;
        } else {
            return null;
        }
    }
    function defaultLocale() {
        return 'ru';
        // return import.meta.env.VITE_DEFAULT_LOCALE;
    }
    function currentLocale(newLocale: any) {
        i18n.global.locale.value = newLocale;
        return i18n.global.locale.value;
    }
    async function switchLanguage(newLocale: any) {
        currentLocale(newLocale);
        document.querySelector("html")?.setAttribute("lang", newLocale)
        localStorage.setItem("user-locale", newLocale)
    }
    return {
        switchLanguage,
        currentLocale,
        getPersistedLocale,
        getUserLocale,
        guessDefaultLocale,
    };
}
