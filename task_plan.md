# Task Plan: 高考志愿填报前端项目

## Goal
基于 api-docs.yaml 和 CLAUDE.md 规范，完整生成高考志愿填报前端项目的所有核心文件（API 模块、路由、Store、页面组件、配置文件）。

## Current Phase
Phase 10

## Phases

### Phase 1: 创建 Vue3 项目并安装依赖
- [x] 手动在外部完成
- **Status:** complete

### Phase 2: 生成 CLAUDE.md 规范
- [x] 已完成（项目根目录已有 CLAUDE.md）
- **Status:** complete

### Phase 3: 封装 request.js
- [x] 创建 `src/utils/request.js`（Axios 实例，baseURL 从环境变量读取，请求拦截器添加 token，响应拦截器处理 401）
- [x] 创建 `.env.development`（VITE_API_BASE_URL = '/api'）
- **Status:** complete

### Phase 4: 基于 api-docs.yaml 生成 API 模块
- [x] 创建 `src/api/auth.js`（postSendSms, postRegister, postLogin）
- [x] 创建 `src/api/schools.js`（getSchools, getSchoolById）
- [x] 创建 `src/api/majors.js`（getMajors, getMajorById）
- [x] 创建 `src/api/ai.js`（postAiChat）
- **Status:** complete

### Phase 5: 创建路由和 store
- [x] 创建 `src/stores/user.js`（Pinia store: token, setToken, logout, getToken, isLoggedIn）
- [x] 创建 `src/router/index.js`（/login, /schools, /school/:id, /majors, /ai-chat + beforeEach 守卫）
- **Status:** complete

### Phase 6: 生成登录页
- [x] 创建 `src/views/Login.vue`（手机号验证码登录/注册表单）
- **Status:** complete

### Phase 7: 生成院校列表和详情
- [x] 创建 `src/views/Schools.vue`（院校搜索列表，支持关键词/省份/标签分页查询）
- [x] 创建 `src/views/SchoolDetail.vue`（院校详情页，含基本信息+专业列表 + 推荐功能）
- [x] 补充创建 `src/api/recommendation.js`（postRecommend）
- **Status:** complete

### Phase 8: 生成专业查询页
- [x] 创建 `src/views/Majors.vue`（专业搜索列表，支持关键词/学科门类分页查询）
- **Status:** complete

### Phase 9: 生成 AI 助手页
- [x] 创建 `src/views/AiChat.vue`（AI 对话页面，可附带成绩信息）
- **Status:** complete

### Phase 10: 配置 vite 代理和入口文件
- [x] 配置 `vite.config.ts`（开发代理到 localhost:8080）
- [x] 确认 `src/main.ts` 引入 Element Plus、router、Pinia
- **Status:** complete

## Key Questions
1. vite.config.ts 中代理路径如何配置？（/api -> http://localhost:8080）

## Decisions Made
| Decision | Rationale |
|----------|-----------|
| 使用 Pinia composition API 写法 | 与 Vue 3 组合式 API 风格一致 |
| 路由懒加载 | 减少首屏包体积 |
| 响应拦截器直接返回 response.data | 调用方无需每次解包 |
| Token 存储在 localStorage | 与 CLAUDE.md 规范一致，刷新不丢失 |

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| request.js 第14行多了一个逗号 | 1 | 移除多余的逗号 |

## Notes
- 每完成一个 Phase 更新状态
- 所有 API 接口基于 api-docs.yaml 中的定义
- 页面组件使用 `<script setup>` + Composition API
