<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
  },
});
</script>

<template>
  <button class="button" :class="[props.size, props.color]" :disabled="props.disabled">
    <slot />
  </button>
</template>

<style scoped>
.button {
  color: #ffffff;
  outline: none;
  border: none;
  padding: 0 16px;
  font-size: 15px;
  font-family: Mulish;
  transition: 0.3s all;
}

.button:hover {
  opacity: 0.7;
}

.button:disabled {
  opacity: 0.6;
}

.small {
  padding: 6px 16px;
  border-radius: 4px;

  font-size: 8px;
}

.medium {
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 12px;
}

.large {
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 15px;
}

.primary {
  background-color: var(--color-btn-primary);
  color: var(--color-btn-bg-primary);
}

.secondary {
  background-color: transparent;
  color: var(--color-btn-bg-secondary);
  border: 1px solid var(--color-btn-bg-secondary);
}

@media (min-width: 991.98px) {
  .small {
    padding: 10px 14px;
    border-radius: 8px;
    font-size: 12px;
  }

  .medium {
    padding: 14px 24px;
    border-radius: 10px;
    font-size: 15px;
  }

  .large {
    padding: 20px 28px;
    border-radius: 12px;
    font-size: 18px;
  }
}
</style>