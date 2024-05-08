<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 13:13:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-01 12:27:45
-->
<template>
  <div>
    <img :src="imgSrc" class="bg_img" />
  </div>
</template>

<script>
export default {
  data() {
    const data = {
      imgSrc: './static/img/jky.jpg'
    };
    if (process.env.VUE_APP_SYSTEM_PATH == 'logistics') {
      data.imgSrc = './static/img/houqin.jpg';
    } else if (process.env.VUE_APP_SYSTEM_PATH == 'sbzc') {
      data.imgSrc = './static/img/sbzc.jpg';
    } else if (process.env.VUE_APP_SYSTEM_PATH == 'student') {
      data.imgSrc = './static/img/student.jpg';
    }
    return data;
  },
  components: {},
  computed: {}
};
</script>

<style scoped lang="less">
/deep/.ant-layout {
  background-color: #fff !important;
}
.bg_img {
  width: 78%;
}
</style>
