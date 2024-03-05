<script setup lang="ts">
import {Header} from '@/widgets/header/ui'

</script>

<template>
    <header>
      <Header></Header>
    </header>
    <main class="page container">
      <router-view></router-view>
    </main>
    <footer></footer>
</template>
<style scoped>
.page {
  min-height: calc(100vh - 80px);
}
</style>