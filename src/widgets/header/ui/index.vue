<template>
    <div ref="$nav">
        <WidgetsHeaderUiDesktop></WidgetsHeaderUiDesktop>
        <WidgetsHeaderUiMobile v-if="width < 991"></WidgetsHeaderUiMobile>
    </div>
</template>
<script setup>
import { useElementSize } from '@vueuse/core';
const $nav = ref(null);
const { width, height } = useElementSize($nav);
</script>