<template>
  <main>
    <ShortenForm @created="listRef.fetchList()" />
    <ShortenList ref="listRef" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ShortenForm from '@/components/ShortenForm.vue'
import ShortenList from '@/components/ShortenList.vue'

const listRef = ref(null)
</script>