<template>
  <div class="training-box">
    <h3>css 3创建多列</h3>
    <div class="training-item item_1">
      经济日报上海3月14日讯（记者李景）“不折不扣做到应检尽检、应管尽管、应隔尽隔、应治尽治，争取早日实现社会面清零。”这是14日上海召开市疫情防控工作领导小组专题会议释放的信号。面对复杂严峻的疫情防控形势，连日来，上海市广大干部、疾控人员、医务工作者、市场主体等各条战线人员众志成城、持续奋战，全力保障城市的正常运转和人民群众的生命安全。
      “这两天很多检测点出现了排队时间长、检测结果报告速度慢等问题，主要是因为短时间内核酸检测人数迅速增加，现在正积极采取措施改进，希望广大市民谅解。”针对上海市近日来核酸检测需求激增，上海市卫生健康委副主任陆韬宏表示，已经要求各区、各单位持续加强核酸检测服务管理，尽全力满足核酸检测需求。目前，已安排充足的工作人员、志愿者等确保采样有序安全。同时，上海要求医疗机构调集后备科室医护力量，充实到核酸检测一线，增加采样点位，延长采样服务时间，优化调整检测方式，实现工作人员可以换，但工位不歇、标本转运不停、实验室检测不休。
      针对一些社区因为防疫封闭导致生活物资需求较大，市民反映电商平台送货慢等问题，上海市商务委副主任刘敏表示，已经加强市场运行动态监测，指导电商平台与本市批发市场对接，加大主副食品货源组织
      “目前，电商平台在本市各前置仓刚需品类的平均备货量达到了日常的1.5倍到2倍，大部分区域货源供应较为充足。”刘敏表示，电商平台还主动为封控小区内的居民提供了种类丰富的保供套餐，超市卖场也采取积极措施，确保社区主副食品供应平稳。有的企业通过线上线下联动，为处于封控小区的居民提供点对点服务；有的企业为部分中风险地区坚守岗位的街道、一线防疫工作人员送去了慰问物资。
      此外，上海市经济信息化委近日也对重点应急物资生产企业的产能、产量和库存再次开展了摸排。结果显示，截至目前，上海普通口罩日产能5082万只，日产量1334万只；医用防护口罩日产能25万只，日产量6万只。企业反映近期无需求显著波动情况，生产较为平稳。
    </div>

    <h3>列间隔</h3>
    <div class="training-item item_2">
      我请求熄灭<br />
      生铁的光、爱人的光和阳光<br />
      我请求下雨<br />
      我请求<br />
      在夜里死去<br />
      <br />
      我请求在早上<br />
      你碰见<br />
      埋我的人<br />
      <br />
      岁月的尘埃无边<br />
      秋天<br />
      我请求：<br />
      下一场雨<br />
      洗清我的骨头<br />
      <br />
      我的眼睛合上<br />
      我请求：<br />
      雨<br />
      雨是一生过错<br />
      雨是悲欢离合<br />
    </div>

    <h3>列边框</h3>
    <div class="training-item item_3">
      😁今天面了腾讯运营开发岗位，人生中第一次面试，面试官很好，无奈我太菜鸡。
      工科转码，自学java半年，没项目没实习，学过一点点mysql，力扣刷了130道。
      问了两个题，一个mysql的，就很简单的查询，好久没写，忘了，gg。算法题：最长无重复子串，三个月前刷过，忘了可以用滑动窗口，选择用暴力解法😁然后跟面试官讨论了一下优化。
      转码真难，不转了，看了要学的东西，感觉刷题是最简单的，现在都刷成瘾了，每天都要打开网站刷一刷，即便能做一道也可以，即便不转了，还是会坚持每天刷题。😁
    </div>

    <h3>指定元素跨越多少列 column span</h3>
    <div class="training-item item_4">
      <p>面朝大海，春暖花开</p>
      <span>
        从明天起，做一个幸福的人 <br />
        喂马，劈柴，周游世界<br />
        从明天起，关心粮食和蔬菜 <br />
        我有一所房子，面朝大海，春暖花开
      </span>
      <span>
        <br />从明天起，和每一个亲人通信
        <br />告诉他们我的幸福，那幸福的闪电告诉我的 
        <br />我将告诉每一个人
        <br />给每一条河每一座山取一个温暖的名字
      </span>
      <span>
        <br />陌生人，我也为你祝福 
        <br />愿你有一个灿烂的前程
        <br />愿你有情人终成眷属 
        <br />愿你在尘世获的幸福
        <br />我也愿面朝大海，春暖花开
      </span>
    </div>


    <h3>制定列的宽度 column width </h3>
    <div class="training-item item_5">
      和所有以梦为马的诗人一样，我以此火得度一生的茫茫黑夜
    </div>

    <glide-index></glide-index>
  </div>
</template>

<script>
import GlideIndex from '../glideIndex.vue'
export default {
  name:'multiColumnIndex',
  mounted(){
    
  },
  components:{
    GlideIndex
  }
};
</script>


    GlideIndex<style lang="scss" scoped>
$border_color1: rgba(random(255), random(255), random(255), 0.5);
$border_color2: rgba(random(255), random(255), random(255), 0.5);
$border_color3: rgba(random(255), random(255), random(255), 0.5);
$border_color4: rgba(random(255), random(255), random(255), 0.5);

$rule_column_color: rgba(random(255), random(255), random(255), 0.8);

.training-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 2vh;
  & > .training-item {
    border: 1px solid;
    border-color: $border_color1 $border_color2 $border_color3 $border_color4;
    // height: 20vh;
    padding: .5em 1em;

    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;

    &.item_2 {
      -webkit-column-gap: 10vw;
      -moz-column-gap: 10vw;
      column-gap: 10vw;

      background-image: url("https://images6.alphacoders.com/120/thumb-1920-1206481.png");
      background-position: center;
      background-size: 100%;
      object-fit: cover;
      color: rgba(666, 0, 88, 0.8);
      font-weight: bold;
      font-size: 1.5em;
    }

    &.item_3 {
      -webkit-column-rule-style: solid;
      -moz-column-rule-style: solid;
      column-rule-style: solid;

      -webkit-column-rule-width: 1px;
      -moz-column-rule-width: 1px;
      column-rule-width: 1px;

      -webkit-column-rule-color: $rule_column_color;
      -moz-column-rule-color: $rule_column_color;
      column-rule-color: $rule_column_color;

      // 简写
      // column-rule: solid 1px $rule_column_color;
    }

    &.item_4 {
      & > p {
        column-span: all;
        font-size: 1.2em;
        font-weight: 800;
      }

      & > span {
        column-span: none;
      }
    }

    &.item_5{

        column-width:50px;
    }
  }
}
</style>
