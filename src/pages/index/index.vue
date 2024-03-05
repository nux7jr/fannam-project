<template>
    <div>
    index
    <div>
        {{ fo.user.test }}
    </div>
    <div>
        <ThemeSwitcher></ThemeSwitcher>
        <LangSwitcher></LangSwitcher>
    </div>
    </div>
</template>
<script setup lang="ts">
const fo = useAuthStore();

import {ThemeSwitcher} from '@/features/theme'

import {LangSwitcher} from '@/features/lang'

</script>
    