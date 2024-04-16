<template>
  <!-- 主页面 -->
  <div class="contain" ref="appRef">
    <!-- 头部 -->
    <div class="top-title">
      <div class="top-title-text">智慧广电综合公服信息管理平台-龙泉驿区</div>
      <div class="tab-box">
        <div
          :class="{
            'tab-item': true,
            'tab-active': tabIndex === tabActiveIndex,
          }"
          v-for="(item, tabIndex) in tabItemList"
          :key="tabIndex"
          @click="changeTabItem(tabIndex)"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 地图 -->
    <div class="map-container">
      <div id="map" class="map"></div>
      <router-view></router-view>
    </div>
  </div>
  <div>123456</div>
</template>

<script setup>
import { ref, reactive, computed, getCurrentInstance, onMounted } from "vue";
import { useMain } from "@/utils/ScreenApt.js";

const tabItemList = ref(["首页", "应急广播", "雪亮工程", "公共服务"]);
const appRef = ref();
const tabActiveIndex = ref(0);
const center = ref([104.280751, 30.597593]);

// 地图
const map = ref();

//创建地图初始化方法
const initMap = () => {
  new AMap.Map("map", {
    center: center.value,
  });
};

onMounted(() => {
  console.log(appRef.value);
  const { calcRate, windowDraw } = useMain(appRef.value);
  calcRate();
  windowDraw();
});
</script>

<style lang="less" scoped >
@import "@/styles/font.less";
.contain {
  width: 1920px;
  height: 1080px;
  background: url("@/assets/imgs/contain-bg.png");
  color: white;
  transform-origin: 0 0;
}
.top-title {
  width: 100%;
  height: 110px;
  background-image: url("@/assets/imgs/pageBigHome_top.png");
  background-size: 102%;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.top-title-text {
  font-family: YouSheBiaoTiHei;
  font-style: normal;
  font-weight: normal;
  font-size: 38px;
  margin-bottom: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: 30px;
  background: linear-gradient(to top, #87daff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;
}

.tab-box {
  width: 777px;
  height: 47px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 220px;
}

.tab-item {
  width: 160px;
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  background-image: url("@/assets/imgs/nav-item-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.tab-active {
  background-image: url("@/assets/imgs/nav-item-bg-active.png");
}
.map {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
}
</style>