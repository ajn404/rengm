<template>
  <div>
  <div class="searchBox" :class="className">
    <input type="text" placeholder="关注智障儿童" @input="click" />
    <search-icon class="search-icon"></search-icon>
  </div>
  <div class="text">
    <p v-for="(i,index) in textArr" :key="index">{{i}}</p>
  </div>
  </div>
</template>

<script>
import SearchIcon from "vue-ionicons/dist/ios-search.vue";
import { getSaoHua } from "../utils/service";
export default {
  name: "SearchInput",
  data() {
    return {
      className: [],
      textArr:[]
    };
  },
  mounted() {},
  components: {
    SearchIcon,
  },
  methods: {
    click() {
      getSaoHua().then((res) => {
        this.$message.success(res.data);
        this.textArr.push(res.data)

      });

      if (!this.className.length) this.className.push("clicked");
    },
  },
};
</script>

<style lang="scss">
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.searchBox {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }
  position: relative;
  width: 65px;
  height: 50px;
  margin: 0 !important;
  &:hover,
  &:focus,
  &.clicked {
    width: 400px;

    input::placeholder {
      color: #555;
    }
  }

  // overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    z-index: 1;
    filter: blur(1px);
  }

  input {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px 25px;
    outline: none;
    font-size: 1.1em;
    color: #555;
    background: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1),
      15px 15px 15px rgba(0, 0, 0, 0.1), 20px 20px 15px rgba(0, 0, 0, 0.1),
      30px 30px 15px rgba(0, 0, 0, 0.1), inset 1px 1px 2px #fff;

    &::placeholder {
      color: transparent;
    }
  }

  .search-icon {
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 1.5em;
  }
}

  .text{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    position: relative;
    p{
      line-height: 1;
      margin: 0;
    }
  }
</style>