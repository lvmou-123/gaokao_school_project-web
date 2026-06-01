<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getMajors } from '@/api/majors'

const router = useRouter()

const keyword = ref('')
const category = ref('')
const list = ref([])
const total = ref(0)
const page = ref(0)
const size = ref(20)
const loading = ref(false)

const categoryOptions = ['工学', '理学', '医学', '文学', '法学', '经济学', '管理学', '教育学', '农学', '哲学', '历史学', '艺术学']

async function fetchData() {
  loading.value = true
  try {
    const params = { page: page.value, size: size.value }
    if (keyword.value) params.keyword = keyword.value
    if (category.value) params.category = category.value

    const res = await getMajors(params)
    list.value = res.data.list || []
    total.value = res.data.total || 0
  } catch {
    ElMessage.error('获取专业列表失败')
  } finally {
    loading.value = false
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

function viewSchool(schoolId) {
  router.push(`/school/${schoolId}`)
}

function getFirstSchoolId(row) {
  if (row.schoolId) return row.schoolId
  if (row.schools?.length) return row.schools[0].id
  return null
}

onMounted(fetchData)
</script>

<template>
  <div class="majors-page">
    <div class="page-header">
      <h2 class="page-title">专业查询</h2>
    </div>

    <div class="search-card">
      <el-form inline>
        <el-form-item label="关键词">
          <el-input
            v-model="keyword"
            placeholder="专业名称"
            clearable
            @keyup.enter="handleSearch"
          />
        </el-form-item>
        <el-form-item label="学科门类">
          <el-select
            v-model="category"
            placeholder="全部"
            clearable
            filterable
            @change="handleSearch"
          >
            <el-option
              v-for="c in categoryOptions"
              :key="c"
              :label="c"
              :value="c"
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
          <div class="empty-icon">📚</div>
        </template>
      </el-empty>
      <el-table v-else :data="list" stripe class="data-table">
        <el-table-column prop="name" label="专业名称" min-width="160" />
        <el-table-column prop="code" label="专业代码" width="120" />
        <el-table-column prop="category" label="学科门类" width="120" />
        <el-table-column prop="duration" label="学制" width="80" />
        <el-table-column prop="degree" label="授予学位" width="120" />
        <el-table-column label="所属院校" min-width="140">
          <template #default="{ row }">
            <el-button
              type="primary"
              link
              @click="viewSchool(getFirstSchoolId(row))"
              :disabled="!getFirstSchoolId(row)"
            >
              查看院校
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="描述" min-width="200">
          <template #default="{ row }">
            <span class="ellipsis">{{ row.description || '暂无' }}</span>
          </template>
        </el-table-column>
      </el-table>

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
.majors-page {
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

.pagination-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.ellipsis {
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.empty-icon {
  font-size: 48px;
}
</style>
