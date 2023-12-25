<template>
  <div class="container">
    <div class="logo-block">
      <button class="button-logo" value="logo" disabled>
        <i class="logo"></i></button>
      <p class="logo-text">CookBook</p></div>
    <ul>
      <router-link to="/">Главная</router-link>
      <router-link to="/favourite">Избранное</router-link>
      <router-link to="/about">О нас</router-link>
    </ul>
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

.logo-block{
  display: flex;
  column-gap: 15px;
}
.logo-text{
  margin-bottom:auto;
  margin-top: auto;
}

.logo {
  background-image: url("src/assets/recipe-logo.svg");
  display: inline-block;
  width: 35px;
  height: 35px;
  background-size: contain;
  background-repeat: no-repeat;
}

.button-logo {
  bottom: 5px;
  right: 20px;
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 5px;
  column-gap: 20px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 40px;
}

</style>
<script>
export default {
  name: "LayoutHeader",
};
</script>
