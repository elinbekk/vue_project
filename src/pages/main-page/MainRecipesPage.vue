<template>
  <div class="main_page">
    <h2 class="header">Что приготовить?</h2>
    <div class="search-form">
      <input v-model="searchQuery" @input="filterRecipes" placeholder="Поиск блюд"/>
    </div>
    <div class="recipe-cards">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" @click="redirectToDetails(recipe.id)" class="recipe-card">
        <img :src="recipe.imageUrl" alt="recipe-image"/>
        <p>{{ recipe.name }}</p>
        <button class="button-like">
          <i class="heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainRecipesPage",
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'Паста Карбонара',
          imageUrl: 'https://mamadona.ru/ckfinder/userfiles/images/s1200(1).jpg',
          description: 'Описание пасты Карбонара и как ее приготовить.'
        },
        {
          id: 2,
          name: 'Греческий салат',
          imageUrl: 'https://static.tildacdn.com/tild3566-3363-4464-b138-613432383762/DSC_4013_1.jpg',
          description: 'Описание греческого салата и как его приготовить.'
        },
      ],
      searchQuery: ''
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    redirectToDetails(recipeId) {
      this.$router.push({name: 'recipe-details', params: {id: recipeId}});
    },
    filterRecipes() {
    }
  }
};
</script>
<style scoped>
.main_page {
  margin: 0 auto;
  padding: 20px;
  text-align: center;
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

.button-like {
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: none;
  background-color: transparent;
}


.heart {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-image: url('src/assets/heart-alt-svgrepo-com.svg');
  background-size: contain;
  background-repeat: no-repeat;
  /*outline: none;*/
}

.heart i:hover {
  cursor: pointer;
  background-color: red;
}

</style>
