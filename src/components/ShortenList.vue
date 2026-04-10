<template>
  <div class="list-wrapper">
    <h2>Danh sách link</h2>

    <div v-if="loading">Đang tải...</div>
    <div v-else-if="error" class="error">{{ error }}</div>

    <table v-else>
      <thead>
        <tr>
          <th>URL gốc</th>
          <th>Link rút gọn</th>
          <th>Lượt click</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.originalUrl }}</td>
          <td>
            <a :href="item.shortUrl" target="_blank">{{ item.shortUrl }}</a>
          </td>
          <td>{{ item.clickCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { shortenApi } from '@/services/api'

const list = ref([])
const loading = ref(false)
const error = ref('')

async function fetchList() {
  loading.value = true
  error.value = ''
  try {
    list.value = await shortenApi.getAllShortUrls()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

// expose để HomeView gọi reload
defineExpose({ fetchList })

onMounted(fetchList)
</script>