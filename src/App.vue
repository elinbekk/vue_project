<template>
  <div class="page">
  <header><LayoutHeader></LayoutHeader></header>
  <MainRecipesPage/>
<!--  <router-view/>-->
  <footer><LayoutFooter></LayoutFooter></footer>
  </div>
</template>
<script>

import LayoutHeader from '@/layout/header/LayoutHeader.vue'
import LayoutFooter from "@/layout/footer/LayoutFooter.vue";
import MainRecipesPage from "@/pages/main-page/MainRecipesPage.vue";

export default {
  name: 'App',
  components: {
    LayoutFooter,
    LayoutHeader,
    MainRecipesPage
  }
}
</script>

<style scoped>

</style>

