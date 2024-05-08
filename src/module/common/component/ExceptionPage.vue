<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 18:04:11
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-12 18:07:07
-->
<template>
  <div class="exception-page">
    <div class="img">
      <img :src="config[type].img" />
    </div>
    <div class="content">
      <h1>{{ config[type].title }}</h1>
      <div class="desc">{{ config[type].desc }}</div>
      <div class="action">
        <a-button type="primary" @click="backHome">返回首页</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExceptionPage",
  props: ["type", "homeRoute"],
  data() {
    return {
      config: {
        403: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",
          title: "403",
          desc: "抱歉，你无权访问该页面",
        },
        404: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",
          title: "404",
          desc: "抱歉，你访问的页面不存在或仍在开发中",
        },
        500: {
          img:
            "https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",
          title: "500",
          desc: "抱歉，服务器出错了",
        },
      },
    };
  },
  methods: {
    backHome() {
      if (this.homeRoute) {
        this.$router.push(this.homeRoute);
      }
      this.$emit("backHome", this.type);
    },
  },
};
</script>

<style lang="less" scoped>
.exception-page {
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  .img {
    padding-right: 52px;
    zoom: 1;
    img {
      max-width: 430px;
    }
  }
  .content {
    h1 {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }
    .desc {
      color: #333;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }
}
</style>
