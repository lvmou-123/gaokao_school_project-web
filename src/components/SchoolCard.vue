<script setup>
defineProps({
  school: { type: Object, required: true },
})

defineEmits(['click'])
</script>

<template>
  <el-card shadow="never" class="school-card" @click="$emit('click', school.id)">
    <div class="card-badge" v-if="school.tags?.includes('985')">985</div>
    <div class="card-content">
      <div class="school-name">{{ school.name }}</div>
      <div class="school-tags">
        <el-tag
          v-for="t in (school.tags || []).filter(t => t !== '985')"
          :key="t"
          size="small"
          :type="t === '211' ? 'warning' : ''"
          class="school-tag"
        >
          {{ t }}
        </el-tag>
        <el-tag v-if="!school.tags?.length" size="small" type="info" class="school-tag">普通</el-tag>
      </div>
      <div class="school-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          <span>{{ school.province || '—' }} · {{ school.city || '—' }}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🏷</span>
          <span>{{ school.category || '—' }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.school-card {
  position: relative;
  border-radius: 14px !important;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid var(--card-border) !important;
  background: var(--surface-color) !important;
}

.school-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.2) !important;
  border-color: rgba(102, 126, 234, 0.3) !important;
}

.card-badge {
  position: absolute;
  top: 12px;
  right: -26px;
  width: 80px;
  text-align: center;
  padding: 2px 0;
  background: linear-gradient(135deg, #f56c6c, #e6a23c);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  transform: rotate(45deg);
  letter-spacing: 1px;
}

.card-content {
  padding: 4px 0;
}

.school-name {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
  line-height: 1.4;
}

.school-tags {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.school-tag {
  border-radius: 6px;
}

.school-meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: var(--text-muted);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-icon {
  font-size: 14px;
}
</style>
