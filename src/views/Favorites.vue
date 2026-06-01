<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { listFavorites, removeFavorite, addFavorite } from '@/api/favorites'

const router = useRouter()

const list = ref([])
const total = ref(0)
const page = ref(0)
const size = ref(20)
const loading = ref(false)

async function fetchData() {
  loading.value = true
  try {
    const res = await listFavorites({ page: page.value, size: size.value })
    list.value = res.data.list || []
    total.value = res.data.total || 0
  } catch {
    ElMessage.error('获取收藏列表失败')
  } finally {
    loading.value = false
  }
}

function handlePageChange(val) {
  page.value = val - 1
  fetchData()
}

function goSchool(row) {
  router.push(`/school/${row.schoolId}`)
}

async function handleRemove(row, e) {
  e.stopPropagation()
  try {
    await removeFavorite(row.schoolId)
    list.value = list.value.filter((item) => item.schoolId !== row.schoolId)
    total.value--
    ElMessage.success('已取消收藏')
  } catch {
    ElMessage.error('操作失败')
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="favorites-page">
    <div class="page-header">
      <h2 class="page-title">我的收藏</h2>
      <p class="page-subtitle">共收藏 {{ total }} 所院校</p>
    </div>

    <div v-loading="loading" class="list-card">
      <el-empty v-if="!loading && list.length === 0" description="还没有收藏任何院校">
        <template #image>
          <div class="empty-icon">💔</div>
        </template>
        <el-button type="primary" round @click="router.push('/schools')">去查院校</el-button>
      </el-empty>

      <div v-else class="school-list">
        <div
          v-for="item in list"
          :key="item.schoolId"
          class="school-row"
          @click="goSchool(item)"
        >
          <div class="school-info">
            <div class="school-name">{{ item.schoolName }}</div>
            <div class="school-meta">
              <span v-if="item.province">{{ item.province }}{{ item.city ? ` · ${item.city}` : '' }}</span>
              <span v-if="item.category"> · {{ item.category }}</span>
            </div>
            <div v-if="item.tags?.length" class="school-tags">
              <el-tag
                v-for="t in item.tags"
                :key="t"
                size="small"
                :type="t === '985' ? 'danger' : t === '211' ? 'warning' : ''"
                class="tag"
              >{{ t }}</el-tag>
            </div>
          </div>
          <div class="school-action">
            <span class="remove-btn" @click="handleRemove(item, $event)" title="取消收藏">♥</span>
          </div>
        </div>
      </div>

      <div class="pagination-wrap" v-if="total > size">
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
.favorites-page {
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
}

.page-subtitle {
  color: #909399;
  font-size: 14px;
  margin-top: 4px;
}

.list-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  min-height: 300px;
  padding: 16px;
}

.school-list {
  display: flex;
  flex-direction: column;
}

.school-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid var(--card-border);
}

.school-row:last-child {
  border-bottom: none;
}

.school-row:hover {
  background: rgba(102, 126, 234, 0.05);
}

.school-info {
  flex: 1;
  min-width: 0;
}

.school-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.school-meta {
  font-size: 13px;
  color: #909399;
  margin-bottom: 6px;
}

.school-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.tag {
  border-radius: 6px;
}

.school-action {
  flex-shrink: 0;
  margin-left: 16px;
}

.remove-btn {
  font-size: 24px;
  color: #f56c6c;
  cursor: pointer;
  transition: transform 0.2s;
  display: inline-block;
  user-select: none;
}

.remove-btn:hover {
  transform: scale(1.25);
}

.pagination-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.empty-icon {
  font-size: 48px;
}
</style>
