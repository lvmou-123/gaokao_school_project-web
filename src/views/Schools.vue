<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getSchools, getSchoolsByMajor } from '@/api/schools'
import { addFavorite, removeFavorite, checkFavorite } from '@/api/favorites'

const route = useRoute()
const router = useRouter()

const keyword = ref('')
const province = ref('')
const tag = ref('')
const list = ref([])
const total = ref(0)
const page = ref(0)
const size = ref(20)
const loading = ref(false)
const majorName = ref('')
const favoriteMap = ref({})

const tagOptions = ['985', '211', '双一流', '普通本科', '普通专科']

async function fetchData() {
  loading.value = true
  try {
    const majorId = route.query.majorId
    if (majorId) {
      majorName.value = route.query.majorName || ''
      const res = await getSchoolsByMajor(Number(majorId), { page: page.value, size: size.value })
      list.value = res.data.list || []
      total.value = res.data.total || 0
    } else {
      majorName.value = ''
      const params = { page: page.value, size: size.value }
      if (keyword.value) params.keyword = keyword.value
      if (province.value) params.province = province.value
      if (tag.value) params.tag = tag.value
      const res = await getSchools(params)
      list.value = res.data.list || []
      total.value = res.data.total || 0
    }
    checkFavorites()
  } catch {
    ElMessage.error('获取院校列表失败')
  } finally {
    loading.value = false
  }
}

async function checkFavorites() {
  try {
    const results = await Promise.all(
      list.value.map((s) =>
        checkFavorite(s.id).then((r) => ({ id: s.id, favorited: r.data?.favorited })),
      ),
    )
    favoriteMap.value = Object.fromEntries(
      results.filter((r) => r.favorited).map((r) => [r.id, true]),
    )
  } catch {} // 未登录等场景静默处理
}

async function toggleFavorite(row, e) {
  e.stopPropagation()
  if (favoriteMap.value[row.id]) {
    await removeFavorite(row.id)
    delete favoriteMap.value[row.id]
    ElMessage.success('已取消收藏')
  } else {
    await addFavorite(row.id)
    favoriteMap.value[row.id] = true
    ElMessage.success('已收藏')
  }
}

function handleSearch() {
  page.value = 0
  fetchData()
}

function handlePageChange(val) {
  page.value = val - 1
  fetchData()
}

function handleRowClick(row) {
  router.push(`/school/${row.id}`)
}

onMounted(fetchData)
</script>

<template>
  <div class="schools-page">
    <div class="page-header">
      <h2 class="page-title">院校查询</h2>
      <p v-if="majorName" class="major-hint">开设「{{ majorName }}」的院校</p>
    </div>

    <div class="search-card">
      <el-form inline>
        <el-form-item label="关键词">
          <el-input
            v-model="keyword"
            placeholder="院校名称"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        <el-form-item label="省份">
          <el-input
            v-model="province"
            placeholder="如：河南"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        <el-form-item label="标签">
          <el-select v-model="tag" placeholder="全部" clearable @change="handleSearch">
            <el-option
              v-for="t in tagOptions"
              :key="t"
              :label="t"
              :value="t"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch" round>查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-loading="loading" class="list-card">
      <el-empty v-if="!loading && list.length === 0" description="暂无数据">
        <template #image>
          <div class="empty-icon">🏫</div>
        </template>
      </el-empty>
      <el-table
        v-else
        :data="list"
        stripe
        @row-click="handleRowClick"
        style="cursor: pointer"
        class="data-table"
      >
        <el-table-column prop="name" label="院校名称" min-width="160" />
        <el-table-column prop="code" label="院校代码" width="120" />
        <el-table-column prop="province" label="省份" width="100" />
        <el-table-column prop="city" label="城市" width="100" />
        <el-table-column prop="category" label="类别" width="100" />
        <el-table-column label="标签" min-width="180">
          <template #default="{ row }">
            <el-tag
              v-for="t in row.tags"
              :key="t"
              :type="t === '985' ? 'danger' : t === '211' ? 'warning' : ''"
              class="tag-cell"
            >
              {{ t }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="收藏" width="80" align="center">
          <template #default="{ row }">
            <span
              class="favorite-btn"
              :class="{ active: favoriteMap[row.id] }"
              @click="toggleFavorite(row, $event)"
            >♥</span>
          </template>
        </el-table-column>
      </el-table>

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
.schools-page {
  max-width: 1000px;
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

.major-hint {
  color: #909399;
  font-size: 14px;
  margin-top: 4px;
}

.search-card {
  background: var(--surface-color);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
  border: 1px solid var(--card-border);
}

.list-card {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--card-border);
  min-height: 300px;
  padding: 16px;
}

.data-table {
  border-radius: 12px;
}

.tag-cell {
  margin-right: 4px;
  border-radius: 6px;
}

.favorite-btn {
  font-size: 22px;
  cursor: pointer;
  color: #dcdfe6;
  transition: color 0.2s, transform 0.2s;
  user-select: none;
  display: inline-block;
  line-height: 1;
}

.favorite-btn:hover {
  transform: scale(1.2);
}

.favorite-btn.active {
  color: #f56c6c;
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
