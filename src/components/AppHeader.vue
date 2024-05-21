<template>
    <header>
        El contador vale {{ store.count }}
    </header>
</template>

<script setup>
import { useCounterStore } from '../stores/counterStore';

const store = useCounterStore()
</script>