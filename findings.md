# Findings & Decisions

## Requirements
- 基于 api-docs.yaml 中的 OpenAPI 定义生成前端代码
- 遵循 CLAUDE.md 规范（Vue 3 + Vite + Element Plus + Axios + Vue Router 4 + Pinia）
- 所有 API 调用在 src/api/ 下按模块拆分
- 组件 PascalCase 命名
- 使用 Composition API + `<script setup>`
- token 存储在 localStorage，key 为 'token'
- 请求头携带 Authorization: Bearer {token}
- 接口返回格式：{ code, message, data }

## Research Findings
- api-docs.yaml 包含 7 个模块：认证管理、院校管理、专业管理、AI 助手、院校推荐、志愿管理、用户管理
- 所有已登录接口需要 bearer-jwt 鉴权
- 分页接口页码从 0 开始，参数名为 page/size
- 响应统一使用 Result 包装（code/message/data/timestamp）
- 认证接口响应包含 AuthResponse（token/userId/nickname/avatar/phone）

## Technical Decisions
| Decision | Rationale |
|----------|-----------|
| 使用 Pinia composition API 写法 | 与 Vue 3 组合式 API 风格一致 |
| 路由懒加载 | 减少首屏包体积 |
| 响应拦截器直接返回 response.data | 调用方无需每次解包 |
| Token 存储在 localStorage | 与 CLAUDE.md 规范一致，刷新不丢失 |
| 环境变量 VITE_API_BASE_URL | 开发/生产环境切换灵活 |
| request.js 使用独立文件 | 集中管理请求/响应拦截逻辑 |

## Issues Encountered
| Issue | Resolution |
|-------|------------|
| src/router/index.ts 已存在（TypeScript），但规范需要 .js | 新建 `index.js` 覆盖，保留 .ts 作为备用入口文件 |
| request.js 第14行 `return config` 后多余逗号 | 已修正 |

## Resources
- API 文档：api-docs.yaml（项目根目录）
- 项目规范：CLAUDE.md（项目根目录）
- 后端地址：http://localhost:8080

## Visual/Browser Findings
-
