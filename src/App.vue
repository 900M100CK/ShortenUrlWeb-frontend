<template>
  <div id="app">
    <header class="header">
      <div class="header-inner">
        <div class="logo">
          <span class="logo-icon">✂</span>
          <span class="logo-text">Shortly</span>
        </div>
      </div>
    </header>
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">
      <p>Shortly © {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>
/* Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/* Root variables */
:root {
  --primary:       #6c63ff;
  --primary-hover: #574fd6;
  --bg:            #f5f5f7;
  --surface:       #ffffff;
  --border:        #e2e2e2;
  --text:          #1a1a2e;
  --text-muted:    #6b7280;
  --error:         #ef4444;
  --success:       #10b981;
  --radius:        12px;
  --shadow:        0 2px 16px rgba(0,0,0,.08);
}
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* Header */
.header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}
.header-inner {
  max-width: 860px;
  margin: 0 auto;
  padding: 0 24px;
  height: 60px;
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-icon {
  font-size: 22px;
  color: var(--primary);
}
.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.5px;
}
/* Main */
.main {
  flex: 1;
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
}
/* Footer */
.footer {
  text-align: center;
  padding: 24px;
  font-size: 13px;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}
/* Shared component styles */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 28px;
}
input[type="url"],
input[type="text"] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 15px;
  color: var(--text);
  background: var(--bg);
  outline: none;
  transition: border-color .2s;
}
input[type="url"]:focus,
input[type="text"]:focus {
  border-color: var(--primary);
}
button {
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 24px;
  background: var(--primary);
  color: #fff;
  transition: background .2s, opacity .2s;
}
button:hover:not(:disabled) {
  background: var(--primary-hover);
}
button:disabled {
  opacity: .5;
  cursor: not-allowed;
}
.error-msg {
  color: var(--error);
  font-size: 13px;
  margin-top: 8px;
}
.success-msg {
  color: var(--success);
  font-size: 13px;
  margin-top: 8px;
}
</style>
