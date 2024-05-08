<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-12 13:13:16
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-07-20 22:13:36
-->
<template>
  <div>
    <div v-for="(item, index) in menuData" class="smenu-group" :key="index">
      <div class="sql-div di1">
        INSERT INTO `edu_dev`.`ve_base_sys_menu` (`id`, `pid`, `text`, `url`, `path`, `iconcls`, `iconcolour`, `issort`, `sort`, `status`, `isdev`,
        `terminalid`, `app_id`, `tip`) VALUES ('{{ item.dataId }}', '-{{ item.dataId }}', '{{ item.name }}', '{{ item.path }}', '{{ item.sspath }}',
        'icon', 'red', '0', '1', '0', '0', '0', '{{ appId }}', NULL);
      </div>
      <div class="menuchild">
        <div v-for="(smenu, index) in item.children" :key="index" class="sql-div">
          INSERT INTO `edu_dev`.`ve_base_sys_menu` (`id`, `pid`, `text`, `url`, `path`, `iconcls`, `iconcolour`, `issort`, `sort`, `status`, `isdev`,
          `terminalid`, `app_id`, `tip`) VALUES ('{{ smenu.dataId }}', '{{ smenu.pid }}', '{{ smenu.name }}', '{{ smenu.path }}', '{{ smenu.spath }}',
          '{{ smenu.icon }}', 'red', '0', '1', '0', '0', '0', '{{ appId }}', NULL);
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const menuData = [];
    let ssssssId = 3600;

    this.$router.options.routes.forEach(menu => {
      menu.dataId = ssssssId;
      menu.sspath = `-${menu.dataId}.${menu.dataId}.`;
      ssssssId++;
      if (menu.children && menu.hidden !== true) {
        menu.children.forEach(smenu => {
          smenu.dataId = ssssssId;
          ssssssId++;
          smenu.pid = menu.dataId;
          smenu.sspath = menu.sspath + smenu.dataId + '.';
          smenu.pname = menu.name;
        });
        menuData.push(menu);
      }
    });

    return {
      appId: '0research00000000000000000000000',
      menuData: menuData
    };
  }
};
</script>

<style scoped lang="less">
.sql-div {
  padding: 8px;
}
.di1 {
  color: red;
}
</style>
