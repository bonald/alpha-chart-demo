<template>
  <trading-vue
    :data="chart"
    :width="this.width"
    :height="this.height"
    :toolbar="true"
    :color-back="colors.colorBack"
    :color-grid="colors.colorGrid"
    :color-text="colors.colorText"
  ></trading-vue>
</template>

<script>
import Data from "./data/data.json";
import { TradingVue, IndiCube } from "./vendor/trading-vue.min.js";
export default {
  name: "app",
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
  },
  components: {
    TradingVue
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.chart.addIndicator("sma", true, {
      periods: [5, 10, 20, 60, 120],
      lineWidths: [1, 1, 1, 1, 1],
      colors: ["#B46EF0", "#FF3200", "#F0B432", "#5FB464", "#058787"]
    });
    this.chart.addIndicator("vol", false);
    this.chart.addIndicator("rsi", false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      chart: new IndiCube(Data),
      width: window.innerWidth,
      height: window.innerHeight,
      colors: {
        colorBack: "#fff",
        colorGrid: "#eee",
        colorText: "#333"
      }
    };
  }
};
</script>

<style>
html,
body {
  background-color: #000;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
