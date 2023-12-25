<template>
  <div class="main_page">
    <h2 class="header">Избранное</h2>
    <div class="search-form">
      <input v-model="searchQuery" @input="filterRecipes" placeholder="Поиск блюд"/>
    </div>
    <div class="recipe-cards">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" @click="navigateToDetailsPage(recipe)"
           class="recipe-card">
        <img :src="recipe.imageUrl" alt="recipe-image"/>
        <p>{{ recipe.name }}</p>
        <button class="button-delete" @click="deleteFromFavourite(recipe)">
          <i class="delete"></i>
        </button>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "FavouritePage",
  data(){

  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  created() {
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      recipes[i] = localStorage.getItem(key);
    }
  },
  methods: {
    navigateToDetailsPage(recipe) {
      this.$router.push({name: 'recipe-details', params: {id: recipe.id}, props: {recipe}});
    },
    filterRecipes() {
    },
    deleteFromFavourite(recipe) {
      window.localStorage.removeItem('id'+recipe.id);
    }
  }
};
</script>
<style>
.main_page{
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.recipe-card {
  cursor: pointer;
}

.header {
  font-size: 2em;
  margin-bottom: 20px;
}

.search-form {
  margin-bottom: 20px;
}


.recipe-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 100px;
  background-color: #E3FDFD;
  border-radius: 1rem;
  margin: 50px;
}

.recipe-card {
  position: relative;
  border: 1px solid #ccc;
  padding: 2px;
  border-radius: 0.5rem;
}

.recipe-card:hover {
  transform: scale(1.05);
}

.recipe-card img {
  max-width: 100%;
  border-radius: 5px;
}

.button-delete {
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
}
.delete{
  display: inline-block;
  width: 35px;
  height: 35px;
  background-image: url('src/assets/trash-bin-minimalistic-svgrepo-com.svg');
  background-size: contain;
  background-repeat: no-repeat;
  /*outline: none;*/
}

</style>