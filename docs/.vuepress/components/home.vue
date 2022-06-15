<template>
  <div class="box" ref="box">
    <span class="element"></span>
    <div v-show="typingStop" class="slow-show">
      <!-- <div class="element">前已无通路，后不见归途</div> -->
      <div class="calendar">ajn404</div>
      <!-- <el-button
        @click="scrollToBottom"
        style="margin-top: 2em"
        class="elButton scrollToBottom"
        ref="scrollToBottom"
      >
        如你所见，这是个按钮
      </el-button> -->
      <!-- <Swiper
        class="swiper-container"
        :effect="'fade'"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        style="position: relative"
      >
        <SwiperSlide v-for="(i, index) in swiperSlideNums" :key="index">
          <el-image
            :src="'https://picsum.photos/1080/480/?random=' + index"
            fit="cover"
            style="max-width: 100vw"
          ></el-image>
        </SwiperSlide>
      </Swiper> -->
      <!-- <el-button @click="resetSwiperAnimate" class="elButton">
        fade切换
      </el-button> -->
      <!-- <h3>使用wasd上下左右,聚焦后键入m关闭音乐r重制场景</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://bruno-simon.com/"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <div class="nice-u">
        <div>优质的网页收集</div>
        <h3><a href="https://iuri.is">https://iuri.is</a></h3>
        <h3>
          <a href="https://prashantsani.com/">https://prashantsani.com/</a>
        </h3>
        <h3>
          <a href="https://albinotonnina.com/">https://albinotonnina.com/</a>
        </h3>
      </div>
      <h3>算法可视化</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://algorithm-visualizer.org/backtracking/hamiltonean-cycles"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <div class="nice-u">
        <h3>工具学习类的</h3>
        <h3>
          <a href="https://algorithm-visualizer.org/"
            >https://algorithm-visualizer.org/</a
          >
        </h3>
      </div>
      <h3>学习vite vue3系列</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          scrolling="yes"
          src="https://ajn404.github.io/viteV3/"
          frameborder="no"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <h3>学习react gsap系列(iframe点击刷新)</h3>
      <div class="iframe-box">
        <iframe
          style="width: 100%"
          src="https://ajn404.github.io/gsap_ex/"
          allowfullscreen="true"
          lazy="true"
        >
        </iframe>
      </div> -->
      <!--      <audio data-key="65" src="sounds/clap.wav"></audio>-->
      <!--      <audio data-key="83" src="sounds/hihat.wav"></audio>-->
      <!--      <audio data-key="68" src="sounds/kick.wav"></audio>-->
      <!--      <audio data-key="70" src="sounds/openhat.wav"></audio>-->
      <!--      <audio data-key="71" src="sounds/boom.wav"></audio>-->
      <!--      <audio data-key="72" src="sounds/ride.wav"></audio>-->
      <!--      <audio data-key="74" src="sounds/snare.wav"></audio>-->
      <!--      <audio data-key="75" src="sounds/tom.wav"></audio>-->
      <!--      <audio data-key="76" src="sounds/tink.wav"></audio>-->
    </div>

    <div class="art1">
      <div class="face-1"></div>
      <div class="face-2"></div>
      <div class="face-3"></div>
      <div class="face-4"></div>
      <div class="face-5"></div>
      <div class="face-6"></div>
      <div class="face-7"></div>
      <div class="face-8"></div>
      <div class="face-9"></div>
      <div class="face-10"></div>

      <div class="hair-1"></div>
      <div class="hair-2"></div>
      <div class="hair-3"></div>
      <div class="hair-4"></div>

      <div class="eye-left-1"></div>
      <div class="eye-left-2"></div>
      <div class="eye-left-3"></div>
      <div class="eye-left-4"></div>

      <div class="eye-right-1"></div>
      <div class="eye-right-2"></div>
      <div class="eye-right-3"></div>
      <div class="eye-right-4"></div>
      <div class="eye-right-5"></div>
      <div class="eye-right-6"></div>
      <div class="eye-right-7"></div>
    </div>
  </div>
</template>
<script>
// 首页这里我还不是很熟悉vue3和typescript的写法
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import * as Typed from "typed.js";
import GitHubCalendar from "github-calendar";
import MdEditor from "md-editor-v3";
import "github-calendar/dist/github-calendar-responsive.css";
import "md-editor-v3/lib/style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
import "animate.css";
import { ref } from "vue";
export default {
  name: "home",

  data() {
    return {
      text: "hello editor",
      swiperSlideNums: new Array(20),
      typeThing: "",
      typingStop: true,
      styleAnimate: "",
      styleOptions: [
        {
          value: "fade",
          label: "fade",
        },
        {
          value: "cube",
          label: "cube",
        },
        {
          value: "flib",
          label: "flib",
        },
        {
          value: "cards",
          label: "cards",
        },
        {
          value: "creative",
          label: "creative",
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(() => {
      //自动打字
      this.typeThing = this.initType();
      //github提交日历
      this.initCalender();

      // goole map step1
      // this.initcip();
      // this.initSound();
    });
  },
  created() {
    SwiperCore.use([Autoplay, EffectFade]);
  },
  methods: {
    initSound() {
      window.addEventListener("keydown", playSound);
      function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
      }
    },
    initcip() {
      console.log(returnCitySN);
      document.cookie = returnCitySN["cip"];
    },

    initType() {
      let typedString = ["coding blog"];
      let homeTypedFont = new Typed(".element", {
        strings: typedString,
        typeSpeed: 400, //打字速度
        backSpeed: 10, //回退速度
        showCursor: false,
        onComplete: (self) => {
          this.$nextTick(() => {});
        },
      });
      return homeTypedFont;
    },
    initCalender() {
      GitHubCalendar(".calendar", "ajn404", { responsive: true });
    },
    scrollToBottom() {
      const height = document.body.scrollHeight;
      let i = 100;
      var time = setInterval(function () {
        window.scrollTo({
          top: i,
          behavior: "smooth",
        });
        i += 100;
        if (i >= height) {
          clearInterval(time);
          let j = height;
          setTimeout(() => {
            var toTop = setInterval(function () {
              window.scrollTo({
                top: j,
                behavior: "smooth",
              });
              j -= 30;
              if (j < 0) {
                clearInterval(toTop);
              }
            });
          }, 10000);
        }
      }, 50);
    },

    resetSwiperAnimate() {
      this.styleAnimate = "fade";
    },
  },
  components: {
    // cssTransitionAndAnimation,
    MdEditor,
    Swiper,
    SwiperSlide,
  },
};
</script>
<style lang="scss" scoped>
@import "./common/styles/home.scss";
</style>
