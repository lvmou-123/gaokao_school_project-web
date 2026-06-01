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
    router.push('/')
  } catch {
    ElMessage.error('登录失败，请检查验证码')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container">
    <!-- Animated background shapes -->
    <div class="bg-shapes">
      <div class="shape shape-1" />
      <div class="shape shape-2" />
      <div class="shape shape-3" />
      <div class="shape shape-4" />
    </div>

    <div class="login-card">
      <div class="card-header">
        <div class="card-logo">🎓</div>
        <h2 class="card-title">高考志愿填报助手</h2>
        <p class="card-subtitle">登录后使用全部功能</p>
      </div>

      <el-form @submit.prevent="handleLogin" class="login-form">
        <el-form-item>
          <el-input
            v-model="phone"
            placeholder="手机号"
            maxlength="11"
            size="large"
            :prefix-icon="'Iphone'"
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
              class="code-btn"
              :class="{ 'is-sending': sending }"
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

      <div class="card-footer">
        <span class="footer-text">还没有账号？</span>
        <span class="footer-link" @click="handleSendCode">用验证码直接登录</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

/* ====== Animated Background Shapes ====== */
.bg-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: floatShape 20s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: #fff;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: #fff;
  bottom: -50px;
  left: -80px;
  animation-delay: -5s;
  animation-duration: 25s;
}

.shape-3 {
  width: 180px;
  height: 180px;
  background: #fff;
  top: 40%;
  left: 10%;
  animation-delay: -10s;
  animation-duration: 18s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  background: #fff;
  top: 20%;
  right: 15%;
  animation-delay: -15s;
  animation-duration: 22s;
}

@keyframes floatShape {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30px, -40px) scale(1.05);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.95);
  }
  75% {
    transform: translate(40px, 30px) scale(1.02);
  }
}

/* ====== Login Card ====== */
.login-card {
  position: relative;
  width: 420px;
  padding: 48px 40px 40px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  animation: cardEnter 0.6s ease-out;
}

@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-header {
  text-align: center;
  margin-bottom: 36px;
}

.card-logo {
  font-size: 48px;
  margin-bottom: 12px;
  animation: bounceLogo 1s ease-out;
}

@keyframes bounceLogo {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

/* ====== Form ====== */
.login-form {
  margin-bottom: 24px;
}

.login-form :deep(.el-input__wrapper) {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: none !important;
  border-radius: 12px;
  padding: 4px 16px;
  transition: all 0.3s ease;
}

.login-form :deep(.el-input__wrapper:hover) {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.35);
}

.login-form :deep(.el-input__wrapper.is-focus) {
  background: rgba(255, 255, 255, 0.22);
  border-color: rgba(255, 255, 255, 0.5);
}

.login-form :deep(.el-input__inner) {
  color: #fff;
  height: 44px;
}

.login-form :deep(.el-input__inner::placeholder) {
  color: rgba(255, 255, 255, 0.5);
}

.login-form :deep(.el-input__prefix) {
  color: rgba(255, 255, 255, 0.5);
}

.login-form :deep(.el-form-item) {
  margin-bottom: 20px;
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
  border-radius: 12px !important;
  background: rgba(255, 255, 255, 0.15) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: #fff !important;
  font-size: 14px;
  transition: all 0.3s ease;
}

.code-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.25) !important;
  border-color: rgba(255, 255, 255, 0.4) !important;
}

.code-btn.is-sending {
  background: rgba(255, 255, 255, 0.08) !important;
  color: rgba(255, 255, 255, 0.6) !important;
}

.login-btn {
  width: 100%;
  height: 52px;
  border-radius: 12px !important;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2) !important;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25) !important;
}

/* ====== Footer ====== */
.card-footer {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #fff;
}

/* ====== Responsive ====== */
@media (max-width: 480px) {
  .login-card {
    width: 90%;
    padding: 36px 24px 32px;
  }
}
</style>
