<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getSchoolById } from '@/api/schools'
import { getMajors } from '@/api/majors'
import { postRecommend } from '@/api/recommendation'

const route = useRoute()
const school = ref(null)
const majors = ref([])
const recommendations = ref([])
const loading = ref(true)
const recommending = ref(false)

async function fetchSchool() {
  try {
    const res = await getSchoolById(route.params.id)
    school.value = res.data
  } catch {
    ElMessage.error('获取院校详情失败')
  }
}

async function fetchMajors() {
  try {
    const res = await getMajors({ schoolId: route.params.id, page: 0, size: 50 })
    if (Array.isArray(res.data)) {
      majors.value = res.data
    } else if (res.data?.list) {
      majors.value = res.data.list
    } else if (res.data?.content) {
      majors.value = res.data.content
    } else {
      majors.value = []
    }
  } catch {
    ElMessage.error('获取专业数据失败')
  }
}

async function handleRecommend() {
  recommending.value = true
  try {
    const res = await postRecommend({
      userId: 1,
      score: 600,
      rankNum: 15000,
      province: school.value?.province || '',
      preferences: school.value ? [school.value.category] : [],
    })
    recommendations.value = res.data || []
  } catch {
    ElMessage.error('获取推荐失败')
  } finally {
    recommending.value = false
  }
}

onMounted(async () => {
  await fetchSchool()
  await fetchMajors()
  loading.value = false
})
</script>

<template>
  <div class="detail-page">
    <!-- 学校信息 -->
    <div v-loading="loading" class="info-card">
      <div class="info-header">
        <div class="info-title-group">
          <h1 class="school-name">{{ school?.name }}</h1>
          <div class="header-tags">
            <el-tag
              v-for="t in school?.tags || []"
              :key="t"
              :type="t === '985' ? 'danger' : t === '211' ? 'warning' : ''"
              class="header-tag"
            >
              {{ t }}
            </el-tag>
          </div>
        </div>
        <div class="info-code">院校代码：{{ school?.code || '—' }}</div>
      </div>

      <el-descriptions :column="2" border class="info-descriptions">
        <el-descriptions-item label="院校类别">
          <span class="desc-value">{{ school?.category || '—' }}</span>
        </el-descriptions-item>
        <el-descriptions-item label="省份">
          <span class="desc-value">{{ school?.province || '—' }}</span>
        </el-descriptions-item>
        <el-descriptions-item label="城市">
          <span class="desc-value">{{ school?.city || '—' }}</span>
        </el-descriptions-item>
        <el-descriptions-item label="简介" :span="2">
          <span class="desc-text">{{ school?.description || '暂无' }}</span>
        </el-descriptions-item>
      </el-descriptions>
    </div>

    <!-- 开设专业 -->
    <div class="section-card">
      <div class="section-header">
        <h3>开设专业</h3>
        <span class="section-count" v-if="majors.length">共 {{ majors.length }} 个</span>
      </div>
      <el-empty v-if="majors.length === 0" description="暂无专业数据">
        <template #image>
          <div class="empty-icon">📖</div>
        </template>
      </el-empty>
      <el-table v-else :data="majors" stripe class="data-table">
        <el-table-column prop="name" label="专业名称" min-width="160" />
        <el-table-column prop="code" label="专业代码" width="120" />
        <el-table-column prop="category" label="学科门类" width="120" />
        <el-table-column prop="duration" label="学制" width="80" />
        <el-table-column prop="degree" label="授予学位" width="120" />
        <el-table-column label="描述" min-width="200">
          <template #default="{ row }">
            <span class="ellipsis">{{ row.description || '暂无' }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 智能推荐 -->
    <div class="section-card recommend-card">
      <div class="section-header">
        <h3>智能推荐</h3>
        <el-button
          size="small"
          type="primary"
          :loading="recommending"
          @click="handleRecommend"
          round
        >
          开始推荐
        </el-button>
      </div>
      <el-empty
        v-if="recommendations.length === 0"
        description="点击「开始推荐」获取冲刺/稳妥/保底建议"
      >
        <template #image>
          <div class="empty-icon">🎯</div>
        </template>
      </el-empty>
      <div v-else class="recommend-list">
        <div
          v-for="r in recommendations"
          :key="r.id"
          class="recommend-item"
        >
          <div class="recommend-header">
            <strong class="recommend-school">{{ r.schoolName }}</strong>
            <el-tag
              :type="r.probability === '冲刺' ? 'danger' : r.probability === '稳妥' ? 'warning' : 'success'"
              class="recommend-tag"
            >
              {{ r.probability }}
            </el-tag>
          </div>
          <p class="recommend-reason">{{ r.reason }}</p>
          <p v-if="r.majorName" class="recommend-major">推荐专业：{{ r.majorName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}

/* ====== Info Card ====== */
.info-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  padding: 28px 32px;
  margin-bottom: 16px;
  min-height: 200px;
}

.info-header {
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.info-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.school-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.header-tags {
  display: flex;
  gap: 6px;
}

.header-tag {
  border-radius: 6px;
}

.info-code {
  font-size: 14px;
  color: var(--text-muted);
}

.desc-value {
  font-weight: 600;
  color: var(--text-primary);
}

.desc-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* ====== Section Cards ====== */
.section-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  padding: 24px 28px;
  margin-bottom: 16px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.section-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.section-count {
  font-size: 13px;
  color: var(--text-muted);
}

.data-table {
  border-radius: 12px;
}

.ellipsis {
  display: inline-block;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-icon {
  font-size: 48px;
}

/* ====== Recommendations ====== */
.recommend-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}

.recommend-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 14px;
  padding: 18px 20px;
  transition: all 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.recommend-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.recommend-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.recommend-school {
  font-size: 15px;
  color: var(--text-primary);
}

.recommend-tag {
  border-radius: 6px;
}

.recommend-reason {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
}

.recommend-major {
  color: var(--text-muted);
  font-size: 13px;
  margin: 6px 0 0;
}
</style>
