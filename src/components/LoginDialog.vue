<script setup>
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { postSendSms, postLogin } from '@/api/auth'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const store = useUserStore()

const phone = ref('')
const code = ref('')
const sending = ref(false)
const countdown = ref(0)
const loading = ref(false)
let timer = null

function startCountdown() {
  countdown.value = 60
  sending.value = true
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      timer = null
      sending.value = false
    }
  }, 1000)
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

async function handleSendCode() {
  if (!/^1\d{10}$/.test(phone.value)) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  try {
    await postSendSms({ phone: phone.value })
    startCountdown()
    ElMessage.success('验证码已发送')
  } catch {
    ElMessage.error('发送失败，请重试')
  }
}

async function handleLogin() {
  if (!/^1\d{10}$/.test(phone.value)) {
    ElMessage.warning('请输入正确的手机号')
    return
  }
  if (!code.value) {
    ElMessage.warning('请输入验证码')
    return
  }
  loading.value = true
  try {
    const res = await postLogin({ phone: phone.value, code: code.value })
    store.setToken(res.data.token)
    ElMessage.success('登录成功')
    const pending = store.pendingRoute
    store.closeLoginDialog()
    router.push(pending || '/')
  } catch {
    ElMessage.error('登录失败，请检查验证码')
  } finally {
    loading.value = false
  }
}

function handleClose() {
  store.closeLoginDialog()
}
</script>

<template>
  <el-dialog
    :model-value="store.showLoginDialog"
    @close="handleClose"
    :show-close="false"
    :close-on-click-modal="false"
    width="400px"
    class="login-dialog"
    top="15vh"
  >
    <div class="dialog-body">
      <div class="dialog-header">
        <div class="dialog-logo">🎓</div>
        <h2 class="dialog-title">高考志愿填报助手</h2>
        <p class="dialog-subtitle">登录后使用全部功能</p>
      </div>

      <el-form @submit.prevent="handleLogin" class="login-form">
        <el-form-item>
          <el-input
            v-model="phone"
            placeholder="手机号"
            maxlength="11"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <div class="code-row">
            <el-input
              v-model="code"
              placeholder="验证码"
              maxlength="6"
              size="large"
              class="code-input"
            />
            <el-button
              :disabled="sending"
              size="large"
              :class="['code-btn', { 'is-sending': sending }]"
              @click="handleSendCode"
            >
              {{ sending ? `${countdown}s` : '发送验证码' }}
            </el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            :loading="loading"
            class="login-btn"
            native-type="submit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>

      <div class="dialog-footer-text">
        <span class="footer-hint">开发环境验证码：123456</span>
      </div>
    </div>
  </el-dialog>
</template>

<style scoped>
.dialog-body {
  padding: 8px 0;
}

.dialog-header {
  text-align: center;
  margin-bottom: 28px;
}

.dialog-logo {
  font-size: 44px;
  margin-bottom: 10px;
}

.dialog-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
}

.dialog-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
}

.login-form :deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.06) !important;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08) inset !important;
  border-radius: 10px;
  padding: 4px 14px;
}

.login-form :deep(.el-input__wrapper:hover) {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset !important;
}

.login-form :deep(.el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--primary-color) inset !important;
}

.login-form :deep(.el-input__inner) {
  color: var(--text-primary);
  height: 44px;
}

.login-form :deep(.el-input__inner::placeholder) {
  color: var(--text-muted);
}

.login-form :deep(.el-form-item) {
  margin-bottom: 18px;
}

.code-row {
  display: flex;
  gap: 12px;
  width: 100%;
}

.code-input {
  flex: 1;
}

.code-btn {
  flex-shrink: 0;
  height: 52px;
  border-radius: 10px !important;
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--text-secondary) !important;
  font-size: 14px;
  transition: all 0.3s ease;
}

.code-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
  color: var(--text-primary) !important;
}

.code-btn.is-sending {
  background: rgba(255, 255, 255, 0.04) !important;
  color: var(--text-muted) !important;
}

.login-btn {
  width: 100%;
  height: 48px;
  border-radius: 10px !important;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
}

.dialog-footer-text {
  text-align: center;
  margin-top: 16px;
}

.footer-hint {
  font-size: 12px;
  color: var(--text-muted);
}
</style>
