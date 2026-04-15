<template>
  <div class="boss-rank-top">
    <n-input-number
      clearable
      placeholder="请输入Boss号查询，1-150"
      autofocus
      min="1"
      max="150"
    />
    <n-button type="primary">查询</n-button>
  </div>

  <div class="boss-rank-content">
    <n-data-table
      :columns="[]"
      :data="[]"
      :bordered="false"
      size="small"
      striped
      :row-key="(row) => row.roleId"
      flex-height
      :scroll-x="650"
      style="height: 600px"
    >
      <template #empty>
        <n-empty description="请输入BOSS号并点击查询按钮获取具体的伤害信息"/>
      </template>
    </n-data-table>
  </div>
</template>

<script setup>
import { formatNumber } from "@/utils/base";
</script>

<style scoped lang="scss">
.boss-rank-top {
  display: flex;
  .n-input-number {
    width: 250px;
    margin-right: 8px;
  }
}
.boss-rank-content {
}
</style>
