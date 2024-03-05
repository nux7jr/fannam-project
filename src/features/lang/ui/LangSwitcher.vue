<script setup>
import { useI18n } from "vue-i18n";
import {useLang} from "../model";
const {switchLanguage, currentLocale, supportedLocales, getPersistedLocale, getUserLocale, guessDefaultLocale } = useLang()
const { t, locale, availableLocales } = useI18n();
const switchHandler = async (event) => {
    const newLocale = event.target.value;
    await switchLanguage(newLocale);
};
</script>
<template>
    <pre>
        {{ availableLocales }}
    </pre>
    <select class="switch-lang" @change="switchHandler">
        <option
            v-for="sLocale in availableLocales"
            :key="`locale-${sLocale}`"
            :value="sLocale"
            :selected="locale === sLocale"
        >
            {{ t(`locale.${sLocale}`) }}
        </option>
    </select>
</template>
<style>
.switch-lang {
    width: 120px;
    border-radius: var(--border-radius);
    padding: 5px;

    cursor: pointer;
}
</style>