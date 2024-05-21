<template>
   <main>
      <button class="btn" @click="store.increment">Incrementar</button>
   </main>
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore';

const store = useCounterStore()
</script>