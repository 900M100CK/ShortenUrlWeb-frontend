<template>
  <div class="form-wrapper">
    <h2>Rút gọn URL</h2>

    <div class="input-group">
      <input
        v-model="originalUrl"
        type="url"
        placeholder="Nhập URL cần rút gọn..."
        @keyup.enter="handleSubmit"
      />
      <button :disabled="loading" @click="handleSubmit">
        {{ loading ? 'Đang tạo...' : 'Rút gọn' }}
      </button>
    </div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="result" class="result">
      <span>{{ result.shortUrl }}</span>
      <button @click="copyToClipboard(result.shortUrl)">Copy</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { shortenApi } from '@/services/api'

const originalUrl = ref('')
const loading = ref(false)
const error = ref('')
const result = ref(null)

const emit = defineEmits(['created'])

async function handleSubmit() {
  if (!originalUrl.value) return

  loading.value = true
  error.value = ''
  result.value = null

  try {
    const data = await shortenApi.createShortUrl(originalUrl.value)
    result.value = data
    originalUrl.value = ''
    emit('created')               // báo HomeView reload danh sách
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}
</script>