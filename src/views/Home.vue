<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  { path: '/schools', icon: '🏛', title: '查院校', desc: '全国高校信息查询', color: '#667eea' },
  { path: '/majors', icon: '📚', title: '查专业', desc: '专业目录与详情', color: '#764ba2' },
  { path: '/ai-chat', icon: '🤖', title: 'AI 助手', desc: '智能填报咨询', color: '#f093fb' },
]
</script>

<template>
  <div class="poster-page">
    <!-- ====== Hero Section ====== -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-circle hero-circle-1" />
        <div class="hero-circle hero-circle-2" />
        <div class="hero-circle hero-circle-3" />
      </div>

      <div class="hero-content">
        <div class="hero-badge">🎯 2026 高考志愿填报</div>
        <h1 class="hero-title">
          选对方向<br />
          <span class="hero-gradient">成就未来</span>
        </h1>
        <p class="hero-subtitle">
          智能查询院校专业信息，AI 辅助志愿填报决策<br />
          让你的每一分都发挥最大价值
        </p>
        <div class="hero-actions">
          <el-button type="primary" size="large" round @click="router.push('/schools')">
            开始查询
          </el-button>
          <el-button size="large" round @click="router.push('/ai-chat')">
            AI 咨询
          </el-button>
        </div>
      </div>
    </section>

    <!-- ====== Feature Cards ====== -->
    <section class="features">
      <div
        v-for="f in features"
        :key="f.path"
        class="feature-card"
        @click="router.push(f.path)"
      >
        <div class="feature-icon" :style="{ background: f.color }">
          {{ f.icon }}
        </div>
        <h3 class="feature-title">{{ f.title }}</h3>
        <p class="feature-desc">{{ f.desc }}</p>
        <div class="feature-arrow">→</div>
      </div>
    </section>

    <!-- ====== Info Section ====== -->
    <section class="info">
      <div class="info-card">
        <div class="info-number">2800+</div>
        <div class="info-label">全国院校</div>
      </div>
      <div class="info-card">
        <div class="info-number">700+</div>
        <div class="info-label">本科专业</div>
      </div>
      <div class="info-card">
        <div class="info-number">AI</div>
        <div class="info-label">智能推荐</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.poster-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px 60px;
}

/* ====== Hero ====== */
.hero {
  position: relative;
  margin: 0 -16px 40px;
  padding: 80px 24px 100px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;
  text-align: center;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
}

.hero-circle-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  top: -200px;
  right: -150px;
  animation: float1 12s ease-in-out infinite;
}

.hero-circle-2 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #f093fb, #f5576c);
  bottom: -150px;
  left: -100px;
  animation: float2 15s ease-in-out infinite;
}

.hero-circle-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  top: 30%;
  left: 20%;
  animation: float3 10s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.1); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, 40px) scale(1.05); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, 20px) scale(1.15); }
}

.hero-content {
  position: relative;
  z-index: 1;
  animation: heroEnter 0.8s ease-out;
}

@keyframes heroEnter {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  display: inline-block;
  padding: 6px 20px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  margin-bottom: 24px;
  backdrop-filter: blur(4px);
}

.hero-title {
  font-size: 52px;
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-gradient {
  background: linear-gradient(135deg, #667eea, #f093fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.hero-actions :deep(.el-button--primary) {
  height: 48px;
  padding: 0 36px;
  font-size: 16px;
  font-weight: 600;
}

.hero-actions :deep(.el-button--default) {
  height: 48px;
  padding: 0 36px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  color: #fff !important;
}

.hero-actions :deep(.el-button--default:hover) {
  background: rgba(255, 255, 255, 0.18) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}

/* ====== Features ====== */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.feature-card {
  background: var(--surface-color);
  border-radius: 20px;
  padding: 40px 28px 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.2);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}

.feature-arrow {
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-size: 18px;
  color: #484860;
  transition: all 0.3s;
}

.feature-card:hover .feature-arrow {
  color: #667eea;
  transform: translateX(4px);
}

/* ====== Info Stats ====== */
.info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.info-card {
  background: var(--surface-color);
  border-radius: 16px;
  padding: 32px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s;
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.info-label {
  font-size: 14px;
  color: var(--text-muted);
}

.info-number {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 6px;
}

.info-label {
  font-size: 14px;
  color: #909399;
}

/* ====== Responsive ====== */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero {
    padding: 60px 20px 80px;
  }

  .features,
  .info {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 28px 24px 28px;
  }
}
</style>
