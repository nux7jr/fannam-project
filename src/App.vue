<script setup lang="ts">
</script>

<template>
    <header>
      <TheHeader></TheHeader>
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