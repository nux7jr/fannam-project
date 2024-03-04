<script setup lang="ts">
</script>

<template>
    <header>
      <WidgetsTheHeader></WidgetsTheHeader>
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