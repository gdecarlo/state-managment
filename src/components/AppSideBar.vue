<template>
  <aside class="sidebar-left">
    {{ store.doubleCount }}
  </aside>
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore';

const store = useCounterStore()
</script>