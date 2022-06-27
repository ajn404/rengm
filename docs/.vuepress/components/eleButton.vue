<template>
  <div class="flex-box column">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button>
        <el-icon> <Delete /> </el-icon
      ></el-button>
      <el-button type="primary">
        <el-icon> <Check /> </el-icon
      ></el-button>
      <el-button type="info">
        <el-icon> <Edit /> </el-icon
      ></el-button>
      <el-button type="warning">
        <el-icon> <Check /> </el-icon
      ></el-button>
      <el-button type="danger">
        <el-icon> <Message /> </el-icon
      ></el-button>
      <el-button type="success">
        <el-icon> <Search /> </el-icon
      ></el-button>
      <el-button type="info">
        <el-icon> <Star /> </el-icon
      ></el-button>
    </el-row>

    
  </div>
</template>

<script lang="ts" setup>
import "element-plus/dist/index.css";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
</script>

<style scoped lang='scss'>
@import url("./style.scss");
.mb-4 {
  margin-bottom: 4rem;
  display: flex;
  gap: 20px;
}
</style>