<template>
  <div class="element-demo">
    <h3>按钮</h3>
    <ele-buttons/>
    <h3>加载</h3>
    <el-button type="primary" @click="openFullScreen">加载2秒钟</el-button>
    <!-- <h2>
      element-plus现在还没做暗色调模式，按理说可以改一下全局作用的变量做调整
    </h2> -->
    <!-- <div class="table" style="display: flex; justify-content: center">
      <el-table :data="tableDataLeft" :stripe="false" style="width: 50%">
        <el-table-column label="黑话" prop="value"></el-table-column>
        <el-table-column label="解释" prop="res"></el-table-column>
      </el-table>
      <el-table
        :data="tableDataRight"
        :stripe="false"
        style="width: 50%; margin-left: 50px"
      >
        <el-table-column label="黑话" prop="value"></el-table-column>
        <el-table-column label="解释" prop="res"></el-table-column>
      </el-table>
    </div> -->
    <h3 class="display-in-light">日历</h3>
    <el-calendar
      class="calendar display-in-light"
      v-model="value"
    ></el-calendar>
    <!-- <el-tabs
      class="tabs"
      @edit="handleTabsEdit"
      editable
      type="card"
      v-model="editableTabsValue"
    >
      <el-tab-pane
        :key="item.name"
        :label="item.title"
        :name="item.name"
        v-for="item in editableTabs"
      >
        <p>{{ item.content }}</p>
        <el-input
          placeholder="输入域已绑定该tab页的内容"
          type="textarea"
          v-model="item.content"
          autosize
        >
        </el-input>
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { allegoricalList } from "./common/data/allegorical";
import eleButtons from './elementDemo/eleButtons.vue'
import { ElLoading } from "element-plus";
export default defineComponent({
  data() {
    const value = ref(new Date());
    let tableDataLeft = [],
      tableDataRight = [];
    allegoricalList.map((value, index, array) => {
      if (index < array.length / 2) {
        tableDataLeft.push(value);
      } else {
        tableDataRight.push(value);
      }
    });
    return {
      //日历
      value,
      //表格
      tableDataLeft: tableDataLeft,
      tableDataRight: tableDataRight,
      //
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "这里是tab1",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "这里是tab2",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    openFullScreen() {
      const loading = ElLoading.service({
        lock: true,
        text: "加载中......",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        const newTabName = `${++this.tabIndex}`;
        this.editableTabs.push({
          title: `Tab ${newTabName}`,
          name: newTabName,
          content: `这里是tab${newTabName}`,
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        const tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
  },
  components:{
    eleButtons
  }
});
</script>

<style lang="scss" scoped>
.element-demo {
  margin-top: 20px;
}

.calendar {
  margin-top: 20px;
  width: 100%;

  :deep(table) {
    display: table;
  }

  :deep(.el-button-group) {
    display: flex;
    gap: 10px;
  }
}

:deep(tr:nth-child(2n)) {
  background-color: var(--el-table-tr-background-color);
}

.tabs {
  margin-top: 20px;
}

:deep .dark .element-plus .page {
  display: none;
}

@import "~element-plus/dist/index.css";
</style>
