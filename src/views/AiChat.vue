<script setup>
import { ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { postAiChat } from '@/api/ai'

const messages = ref([
  { role: 'assistant', content: '你好！我是高考志愿填报助手，有什么可以帮你的？' },
])
const input = ref('')
const loading = ref(false)
const showScoreForm = ref(false)

const score = ref(null)
const rankNum = ref(null)
const province = ref('')

const chatRef = ref(null)

function scrollToBottom() {
  nextTick(() => {
    if (chatRef.value) {
      chatRef.value.scrollTop = chatRef.value.scrollHeight
    }
  })
}

async function handleSend() {
  const text = input.value.trim()
  if (!text) return

  messages.value.push({ role: 'user', content: text })
  input.value = ''
  scrollToBottom()

  loading.value = true
  try {
    const params = { message: text }
    if (score.value) params.score = score.value
    if (rankNum.value) params.rankNum = rankNum.value
    if (province.value) params.province = province.value

    const res = await postAiChat(params)
    messages.value.push({ role: 'assistant', content: res.data.reply })
  } catch {
    ElMessage.error('获取回复失败，请重试')
    messages.value.push({ role: 'assistant', content: '抱歉，我暂时无法回复，请稍后再试。' })
  } finally {
    loading.value = false
    scrollToBottom()
  }
}

function clearChat() {
  messages.value = [{ role: 'assistant', content: '你好！我是高考志愿填报助手，有什么可以帮你的？' }]
}
</script>

<template>
  <div class="ai-chat-page">
    <div class="page-header">
      <h2 class="page-title">AI 助手</h2>
      <p class="page-desc">智能高考志愿填报咨询，随时为您解答</p>
    </div>

    <div class="score-card" v-if="showScoreForm">
      <el-form inline>
        <el-form-item label="总分">
          <el-input-number v-model="score" :min="0" :max="750" placeholder="总分" />
        </el-form-item>
        <el-form-item label="排名">
          <el-input-number v-model="rankNum" :min="0" placeholder="全省排名" />
        </el-form-item>
        <el-form-item label="省份">
          <el-input v-model="province" placeholder="如：河南" style="width: 120px" />
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="showScoreForm = false">收起</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="chat-card">
      <div class="chat-messages" ref="chatRef">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="['message', msg.role === 'user' ? 'message-user' : 'message-assistant']"
        >
          <div v-if="msg.role === 'assistant'" class="avatar avatar-ai">🤖</div>
          <div class="bubble">{{ msg.content }}</div>
          <div v-if="msg.role === 'user'" class="avatar avatar-user">👤</div>
        </div>
        <div v-if="loading" class="message message-assistant">
          <div class="avatar avatar-ai">🤖</div>
          <div class="bubble typing">
            <span class="dot-pulse" />
          </div>
        </div>
      </div>

      <div class="chat-input">
        <el-button
          type="default"
          size="small"
          @click="showScoreForm = !showScoreForm"
          class="score-toggle"
        >
          {{ showScoreForm ? '隐藏成绩' : '添加成绩' }}
        </el-button>
        <el-input
          v-model="input"
          type="textarea"
          :rows="2"
          placeholder="输入您的问题..."
          :disabled="loading"
          @keydown.ctrl.enter="handleSend"
        />
        <div class="input-actions">
          <span class="hint">Ctrl+Enter 发送</span>
          <div>
            <el-button size="small" @click="clearChat">清空</el-button>
            <el-button
              type="primary"
              size="small"
              :loading="loading"
              :disabled="!input.trim()"
              @click="handleSend"
            >
              发送
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-chat-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
}

.page-header {
  margin-bottom: 20px;
}

.page-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.page-desc {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 4px;
}

.score-card {
  background: var(--surface-color);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
  border: 1px solid var(--card-border);
}

.chat-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  min-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  max-height: 420px;
  overflow-y: auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.15);
}

.message {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.message-user {
  justify-content: flex-end;
}

.message-user .bubble {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border-radius: 16px 4px 16px 16px;
  order: 1;
}

.message-assistant {
  justify-content: flex-start;
}

.message-assistant .bubble {
  background: var(--surface-color);
  color: var(--text-primary);
  border-radius: 4px 16px 16px 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.bubble {
  max-width: 70%;
  padding: 12px 18px;
  line-height: 1.6;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.typing {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.avatar-ai {
  background: #f0f2ff;
}

.avatar-user {
  background: rgba(102, 126, 234, 0.1);
  order: 2;
}

.dot-pulse {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #909399;
  animation: dotPulse 1.2s infinite ease-in-out;
}

@keyframes dotPulse {
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}

.chat-input {
  padding: 16px 20px;
  border-top: 1px solid #f0f2f5;
}

.score-toggle {
  margin-bottom: 10px;
}

.input-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.hint {
  color: var(--text-muted);
  font-size: 12px;
}

@media (max-width: 640px) {
  .bubble {
    max-width: 85%;
  }
}
</style>
