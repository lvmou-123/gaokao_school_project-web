<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const route = useRoute()
const store = useUserStore()

const navItems = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/schools', label: '查院校', icon: '🏛' },
  { path: '/majors', label: '查专业', icon: '📚' },
  { path: '/ai-chat', label: 'AI 助手', icon: '🤖' },
  { path: '/favorites', label: '我的收藏', icon: '❤️' },
]

const activeRoute = computed(() => route.path)

function navigate(path) {
  router.push(path)
}

async function handleLogout() {
  try {
    await ElMessageBox.confirm('确定要退出登录吗？', '提示', { type: 'warning' })
    store.logout()
    router.push('/')
  } catch {
    // cancelled
  }
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-inner">
      <div class="navbar-left">
        <div class="logo" @click="navigate('/')">
          <span class="logo-icon">🎓</span>
          <span class="logo-text">高考志愿填报助手</span>
        </div>
      </div>

      <nav class="navbar-center">
        <div
          v-for="item in navItems"
          :key="item.path"
          :class="['nav-item', { active: activeRoute === item.path }]"
          @click="navigate(item.path)"
        >
          <span class="nav-icon">{{ item.icon }}</span>
          <span class="nav-label">{{ item.label }}</span>
          <div v-if="activeRoute === item.path" class="nav-indicator" />
        </div>
      </nav>

      <div class="navbar-right">
        <template v-if="store.isLoggedIn">
          <el-dropdown trigger="click">
            <span class="user-info">
              <el-avatar :size="32" icon="UserFilled" class="user-avatar" />
              <span class="user-name">已登录</span>
            </span>
            <template #dropdown>
              <el-dropdown-item command="logout" @click="handleLogout">退出登录</el-dropdown-item>
            </template>
          </el-dropdown>
        </template>
        <template v-else>
          <el-button type="primary" size="small" @click="store.openLoginDialog()">登录</el-button>
        </template>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 20, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
}

.navbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}

.logo-icon {
  font-size: 26px;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-center {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #909098;
  font-size: 14px;
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.08);
  color: #a0a0e8;
}

.nav-item.active {
  color: #667eea;
  background: rgba(102, 126, 234, 0.1);
  font-weight: 600;
}

.nav-icon {
  font-size: 16px;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 3px;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 8px;
  transition: background 0.2s;
}

.user-info:hover {
  background: rgba(255, 255, 255, 0.04);
}

.user-avatar {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.user-name {
  font-size: 14px;
  color: #c0c0d0;
}

@media (max-width: 640px) {
  .navbar-center {
    gap: 0;
  }

  .nav-item {
    padding: 8px 10px;
  }

  .nav-label {
    display: none;
  }

  .logo-text {
    font-size: 15px;
  }
}
</style>
