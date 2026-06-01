<script setup>
const props = defineProps({
  major: { type: Object, required: true },
})

const emit = defineEmits(['viewSchool'])

function handleViewSchool() {
  emit('viewSchool')
}
</script>

<template>
  <div class="major-card" @click="emit('viewSchool', major)">
    <div class="card-left">
      <div class="major-name">{{ major.name }}</div>
      <div class="major-code">{{ major.code || '--' }}</div>
      <div class="major-hot">
        <span class="hot-tag">热门</span>
      </div>
    </div>

    <div class="card-right">
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">修业年限</span>
          <span class="info-value">{{ major.duration || '--' }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">授予学位</span>
          <span class="info-value">{{ major.degree || '--' }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">男女比例</span>
          <span class="info-value">{{ major.genderRatio || '--' }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">平均薪资</span>
          <span class="info-value">{{ major.avgSalary || '--' }}</span>
        </div>
      </div>
      <el-button size="small" class="school-btn" @click.stop="handleViewSchool">
        开设院校
      </el-button>
    </div>
  </div>
</template>

<style scoped>
.major-card {
  display: flex;
  background: #fff;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  gap: 24px;
}

.major-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.card-left {
  flex-shrink: 0;
  min-width: 140px;
  display: flex;
  flex-direction: column;
}

.major-name {
  font-size: 18px;
  font-weight: 700;
  color: #303133;
  line-height: 1.4;
}

.major-code {
  font-size: 12px;
  color: #909399;
  margin-top: 2px;
}

.major-hot {
  margin-top: 8px;
}

.hot-tag {
  display: inline-block;
  padding: 2px 10px;
  font-size: 12px;
  color: #e6a23c;
  background: #fdf6ec;
  border-radius: 10px;
  border: 1px solid #f5dab1;
}

.card-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 24px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 12px;
  color: #c0c4cc;
}

.info-value {
  font-size: 14px;
  color: #606266;
  font-weight: 500;
}

.school-btn {
  align-self: flex-end;
}
</style>
