<script setup>
import NavBar from '@/components/NavBar.vue'
import LoginDialog from '@/components/LoginDialog.vue'
</script>

<template>
  <NavBar />
  <div class="has-nav">
    <router-view v-slot="{ Component }">
      <transition name="page-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <LoginDialog />
</template>

<style>
/* ====== CSS Variables ====== */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea, #764ba2);
  --primary-color: #667eea;
  --primary-light: rgba(102, 126, 234, 0.12);
  --bg-color: #0a0a14;
  --surface-color: #16162a;
  --surface-hover: #1c1c34;
  --card-border: rgba(255, 255, 255, 0.06);
  --card-radius: 12px;
  --text-primary: #e8e8f0;
  --text-secondary: #a0a0b8;
  --text-muted: #6b6b80;
  --shadow-sm: 0 2px 12px rgba(0, 0, 0, 0.2);
  --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* ====== Global Reset ====== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: var(--bg-color);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ====== Scrollbar ====== */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

/* ====== Main layout ====== */
.has-nav {
  padding-top: 60px;
  min-height: 100vh;
}

/* ====== Route transition ====== */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* ====== Element Plus overrides ====== */

/* Card */
.el-card {
  border-radius: var(--card-radius) !important;
  border: 1px solid var(--card-border) !important;
  background: var(--surface-color) !important;
  color: var(--text-primary) !important;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.el-card:hover {
  box-shadow: var(--shadow-hover);
}
.el-card__header {
  border-bottom: 1px solid var(--card-border) !important;
  color: var(--text-primary);
}

/* Button primary */
.el-button--primary {
  background: var(--primary-gradient) !important;
  border: none !important;
}
.el-button--primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.35);
}
.el-button--primary:active {
  transform: translateY(0);
}
.el-button--default {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: var(--text-secondary) !important;
}
.el-button--default:hover {
  background: rgba(255, 255, 255, 0.1) !important;
  color: var(--text-primary) !important;
}

/* Table */
.el-table {
  background: transparent !important;
  color: var(--text-primary) !important;
  --el-table-bg-color: transparent !important;
  --el-table-header-bg-color: rgba(255, 255, 255, 0.02) !important;
  --el-table-tr-bg-color: transparent !important;
  --el-table-tr-bg-color-striped: rgba(255, 255, 255, 0.02) !important;
  --el-table-row-hover-bg-color: rgba(102, 126, 234, 0.08) !important;
  --el-table-border-color: rgba(255, 255, 255, 0.06) !important;
}
.el-table__inner-wrapper,
.el-table__body-wrapper {
  background: transparent !important;
}
.el-table th.el-table__cell {
  background: rgba(255, 255, 255, 0.03) !important;
  color: var(--text-secondary) !important;
}
.el-table td.el-table__cell {
  background: transparent !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04) !important;
}

/* Input */
.el-input__wrapper {
  background: rgba(255, 255, 255, 0.06) !important;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08) inset !important;
}
.el-input__wrapper:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15) inset !important;
}
.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px var(--primary-color) inset !important;
}
.el-input__inner {
  color: var(--text-primary) !important;
  background: transparent !important;
}
.el-input__inner::placeholder {
  color: var(--text-muted) !important;
}
.el-input__prefix {
  color: var(--text-muted) !important;
}

/* Popper base (dropdowns, popovers, pickers) */
.el-popper {
  --el-popper-bg-color: var(--surface-color) !important;
  --el-popper-border-color: var(--card-border) !important;
}

/* Select */
.el-select .el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px var(--primary-color) inset !important;
}
.el-select-dropdown {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
}
.el-select-dropdown__item {
  color: var(--text-secondary) !important;
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item.highlighted {
  background: rgba(255, 255, 255, 0.06) !important;
}
.el-select-dropdown__item.selected {
  color: var(--primary-color) !important;
}

/* Pagination */
.el-pagination.is-background .el-pager li {
  background: rgba(255, 255, 255, 0.06) !important;
  color: var(--text-secondary) !important;
}
.el-pagination.is-background .el-pager li:hover {
  color: var(--text-primary) !important;
}
.el-pagination.is-background .el-pager li.is-active {
  background: var(--primary-gradient) !important;
  color: #fff !important;
}
.el-pagination button {
  background: transparent !important;
  color: var(--text-secondary) !important;
}

/* Tabs */
.el-tabs__item {
  color: var(--text-muted) !important;
}
.el-tabs__item.is-active {
  color: var(--primary-color) !important;
}
.el-tabs__active-bar {
  background: var(--primary-gradient) !important;
}
.el-tabs__header {
  border-bottom: 1px solid var(--card-border) !important;
}

/* Radio buttons */
.el-radio-button__inner {
  background: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: var(--text-secondary) !important;
}
.el-radio-button__original-radio:checked + .el-radio-button__inner {
  background: var(--primary-gradient) !important;
  color: #fff !important;
  border-color: transparent !important;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3) !important;
}

/* Checkbox */
.el-checkbox__label {
  color: var(--text-secondary) !important;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: var(--primary-color) !important;
}

/* Form item label */
.el-form-item__label {
  color: var(--text-secondary) !important;
}

/* Loading mask */
.el-loading-mask {
  background: rgba(0, 0, 0, 0.6) !important;
}
.el-loading-spinner .el-loading-text {
  color: var(--text-secondary) !important;
}
.el-loading-spinner .circular {
  color: var(--primary-color) !important;
}

/* Descriptions */
.el-descriptions {
  --el-descriptions-table-border-color: rgba(255, 255, 255, 0.06) !important;
  --el-descriptions-item-bordered-label-background: rgba(255, 255, 255, 0.03) !important;
  --el-descriptions-table-bg-color: transparent !important;
}
.el-descriptions__body {
  background: transparent !important;
}
.el-descriptions__table {
  background: transparent !important;
}
.el-descriptions__cell {
  background: transparent !important;
  color: var(--text-primary) !important;
}
.el-descriptions__cell.el-descriptions__label {
  background: rgba(255, 255, 255, 0.03) !important;
  color: var(--text-muted) !important;
}
.el-descriptions__cell.el-descriptions__content {
  background: transparent !important;
}

/* Tag */
.el-tag {
  --el-tag-bg-color: rgba(255, 255, 255, 0.06) !important;
  --el-tag-border-color: rgba(255, 255, 255, 0.1) !important;
  --el-tag-text-color: var(--text-secondary) !important;
}
.el-tag.el-tag--info {
  --el-tag-bg-color: rgba(255, 255, 255, 0.06) !important;
  --el-tag-border-color: rgba(255, 255, 255, 0.1) !important;
  --el-tag-text-color: var(--text-secondary) !important;
}
.el-tag.el-tag--primary {
  --el-tag-bg-color: rgba(102, 126, 234, 0.15) !important;
  --el-tag-border-color: rgba(102, 126, 234, 0.3) !important;
  --el-tag-text-color: var(--primary-color) !important;
}
.el-tag.el-tag--danger {
  --el-tag-bg-color: rgba(245, 108, 108, 0.15) !important;
  --el-tag-border-color: rgba(245, 108, 108, 0.3) !important;
  --el-tag-text-color: #f56c6c !important;
}
.el-tag.el-tag--warning {
  --el-tag-bg-color: rgba(230, 162, 60, 0.15) !important;
  --el-tag-border-color: rgba(230, 162, 60, 0.3) !important;
  --el-tag-text-color: #e6a23c !important;
}
.el-tag.el-tag--success {
  --el-tag-bg-color: rgba(103, 194, 58, 0.15) !important;
  --el-tag-border-color: rgba(103, 194, 58, 0.3) !important;
  --el-tag-text-color: #67c23a !important;
}

/* Empty */
.el-empty__description p {
  color: var(--text-muted) !important;
}

/* Input number */
.el-input-number__decrease,
.el-input-number__increase {
  background: rgba(255, 255, 255, 0.06) !important;
  color: var(--text-secondary) !important;
  border-color: rgba(255, 255, 255, 0.08) !important;
}

/* Dropdown */
.el-dropdown-menu {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
}
.el-dropdown-menu__item {
  color: var(--text-secondary) !important;
}
.el-dropdown-menu__item:hover {
  background: rgba(255, 255, 255, 0.06) !important;
  color: var(--text-primary) !important;
}

/* Message */
.el-message {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
  color: var(--text-primary) !important;
}

/* Message box */
.el-message-box {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
}
.el-message-box__title {
  color: var(--text-primary) !important;
}
.el-message-box__content {
  color: var(--text-secondary) !important;
}

/* Dialog */
.el-dialog {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
}
.el-dialog__title {
  color: var(--text-primary) !important;
}
.el-dialog__body {
  color: var(--text-secondary) !important;
}

/* Collapse */
.el-collapse {
  --el-collapse-header-bg-color: transparent !important;
  --el-collapse-content-bg-color: transparent !important;
  border-color: var(--card-border) !important;
}
.el-collapse-item {
  border-color: var(--card-border) !important;
}
.el-collapse-item__header {
  color: var(--text-primary) !important;
}
.el-collapse-item__content {
  color: var(--text-secondary) !important;
}

/* Alert */
.el-alert {
  --el-alert-bg-color: rgba(255, 255, 255, 0.04) !important;
}
.el-alert__title {
  color: var(--text-primary) !important;
}
.el-alert__description {
  color: var(--text-secondary) !important;
}

/* Divider */
.el-divider {
  --el-divider-border-color: var(--card-border) !important;
}

/* Link */
.el-link {
  --el-link-text-color: var(--primary-color) !important;
}
.el-link.el-link--default {
  --el-link-text-color: var(--text-secondary) !important;
}

/* Radio */
.el-radio {
  --el-radio-text-color: var(--text-secondary) !important;
}
.el-radio__input.is-checked + .el-radio__label {
  color: var(--primary-color) !important;
}

/* Switch */
.el-switch {
  --el-switch-off-color: rgba(255, 255, 255, 0.15) !important;
}

/* Steps */
.el-step__title {
  color: var(--text-muted) !important;
}
.el-step__title.is-process {
  color: var(--primary-color) !important;
}
.el-step__title.is-finish {
  color: var(--text-secondary) !important;
}

/* Timeline */
.el-timeline-item__content {
  color: var(--text-secondary) !important;
}
.el-timeline-item__timestamp {
  color: var(--text-muted) !important;
}

/* Badge */
.el-badge__content {
  background: var(--primary-color) !important;
}

/* Progress */
.el-progress-bar__outer {
  background: rgba(255, 255, 255, 0.08) !important;
}

/* Tooltip / Popover */
.el-popover {
  background: var(--surface-color) !important;
  border: 1px solid var(--card-border) !important;
  color: var(--text-secondary) !important;
}
.el-popover__title {
  color: var(--text-primary) !important;
}

/* Upload */
.el-upload-dragger {
  background: rgba(255, 255, 255, 0.03) !important;
  border-color: var(--card-border) !important;
}
.el-upload__tip {
  color: var(--text-muted) !important;
}
</style>
