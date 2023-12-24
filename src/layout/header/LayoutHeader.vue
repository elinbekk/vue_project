<template>
  <div class="container">
    <button class="button-logo" value="logo" disabled>
      <i class="logo"></i></button>
    <p>CookBook</p>
    <router-link to="/">Главная</router-link>
    <router-link to="/favourite">Избранное</router-link>
    <router-link to="/about">О нас</router-link>
  </div>
</template>

<style scoped>
.container {
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.logo {
  background-image:url("src/assets/recipe-logo.svg");
  display: inline-block;
  width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
}
.button-logo{
  bottom: 5px;
  right: 20px;
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

</style>
<script>
export default {
  name: "LayoutHeader",
};
</script>
