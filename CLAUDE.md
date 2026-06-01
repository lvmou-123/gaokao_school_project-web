# 高考志愿填报前端项目规范

## 技术栈
- Vue 3（组合式 API + <script setup>）
- Vite
- Element Plus
- Axios
- Vue Router 4
- Pinia

## 代码规范
- 组件文件使用 PascalCase 命名（如 SchoolCard.vue）
- API 调用统一放在 src/api/ 目录下，按模块拆分
- 使用 composition API 和 script setup 语法
- 样式使用 scoped CSS，优先使用 Element Plus 组件
- 路由守卫在 src/router/index.js 中配置
- 全局状态使用 Pinia，存放在 src/stores/

## 目录结构
- src/views/     页面组件
- src/components/公共组件
- src/api/       API 调用
- src/stores/    Pinia store
- src/utils/     工具函数（如 request.js）
- src/router/    路由配置

## 后端接口
- 后端已提供 OpenAPI 文档 api-docs.yaml
- 所有接口返回格式为 { code, message, data }
- token 存储在 localStorage，key 为 'token'
- 请求头携带 Authorization: Bearer {token}

## 前端 API 同步规范
- 后端接口变更后，执行 `npm run sync:api` 拉取最新 api-docs.yaml 并重新生成 API 代码。
- 禁止手动修改 src/api/api.ts 及 src/api/data-contracts.ts，所有修改应通过后端 OpenAPI 文档同步。
- 生成后需检查 API 变更，并更新调用该接口的组件。