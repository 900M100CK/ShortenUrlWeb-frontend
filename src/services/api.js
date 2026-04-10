const BASE_URL = process.env.VUE_APP_API_URL

export const shortenApi = {
  // POST /api/shorten
  async createShortUrl(originalUrl) {
    const response = await fetch(`${BASE_URL}/api/shorten`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl })
    })
    if (!response.ok) throw new Error('Tạo link thất bại')
    return response.json()
  },

  // GET /api/shorten
  async getAllShortUrls() {
    const response = await fetch(`${BASE_URL}/api/shorten`)
    if (!response.ok) throw new Error('Lấy danh sách thất bại')
    return response.json()
  }
}