<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getSchoolsByMajor } from '@/api/schools'
import SchoolCard from '@/components/SchoolCard.vue'

const route = useRoute()
const router = useRouter()

const majorId = ref(0)
const majorName = ref('')
const list = ref([])
const total = ref(0)
const page = ref(0)
const size = ref(10)
const loading = ref(false)

async function fetchData() {
  loading.value = true
  try {
    const res = await getSchoolsByMajor(majorId.value, { page: page.value, size: size.value })
    list.value = res.data.list || []
    total.value = res.data.total || 0
  } catch {
    ElMessage.error('获取开设院校列表失败')
  } finally {
    loading.value = false
  }
}

function handlePageChange(val) {
  page.value = val - 1
  fetchData()
}

function viewDetail(id) {
  router.push(`/school/${id}`)
}

onMounted(() => {
  majorId.value = Number(route.params.majorId)
  majorName.value = route.query.name || ''
  fetchData()
})
</script>

<template>
  <div class="schools-by-major-page">
    <div class="page-header">
      <el-button text class="back-btn" @click="router.back()">
        ← 返回
      </el-button>
      <h2 class="page-title">
        {{ majorName ? `开设「${majorName}」的院校` : '开设院校' }}
      </h2>
    </div>

    <div v-loading="loading" class="list-card">
      <el-empty v-if="!loading && list.length === 0" description="暂无院校数据">
        <template #image>
          <div class="empty-icon">🏫</div>
        </template>
      </el-empty>

      <div v-else class="school-grid">
        <SchoolCard
          v-for="item in list"
          :key="item.id"
          :school="item"
          @click="viewDetail"
        />
      </div>

      <div v-if="total > size" class="pagination-wrap">
        <el-pagination
          background
          layout="prev, pager, next, total"
          :total="total"
          :page-size="size"
          :current-page="page + 1"
          @current-change="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.schools-by-major-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}

.page-header {
  margin-bottom: 20px;
}

.back-btn {
  font-size: 14px;
  color: #909399;
  margin-bottom: 4px;
  padding: 0;
}

.back-btn:hover {
  color: #667eea;
}

.page-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 4px 0 0;
}

.list-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  min-height: 300px;
  padding: 20px;
}

.school-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.empty-icon {
  font-size: 48px;
}

@media (max-width: 640px) {
  .school-grid {
    grid-template-columns: 1fr;
  }
}
</style>
