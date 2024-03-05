import { createI18n } from "vue-i18n";
import ru from '@/shared/i18n/locales/ru.json'
import en from '@/shared/i18n/locales/en.json'

const messages = {
    ru: ru,
    en: en,
}

export default createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages
})