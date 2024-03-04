<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>
<style>
.layout {
    background-color: var(--color-body);
    transition: 0.2s background-color;
    position: relative;
}
</style>