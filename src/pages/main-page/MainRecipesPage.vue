<template>
  <div class="main_page">
    <h2 class="header">CookBook</h2>
    <div class="search-form">
      <input class="search" v-model="searchQuery" @input="filterRecipes" placeholder="Искать тут"/>
    </div>
    <div class="recipe-cards">
      <div v-for="recipe in filteredRecipes" :key="recipe.id" @click="navigateToDetailsPage(recipe)" class="recipe-card">
        <img :src="recipe.imageUrl" alt="recipe-image"/>
        <p>{{ recipe.name }}</p>
        <button class="button-like" @click="saveAsFavourite(recipe)">
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
          description: 'Описание пасты Карбонара и как ее приготовить.',
          images: ['https://sovkusom.ru/wp-content/uploads/blog/i/italyanskie-blyuda/7.jpg', 'https://attuale.ru/wp-content/uploads/2018/01/pasta-karbonara-photo-7.jpg']
        },
        {
          id: 2,
          name: 'Греческий салат',
          imageUrl: 'https://static.tildacdn.com/tild3566-3363-4464-b138-613432383762/DSC_4013_1.jpg',
          description: 'Описание греческого салата и как его приготовить.',
          images: ['https://sovkusom.ru/wp-content/uploads/blog/i/italyanskie-blyuda/7.jpg', 'https://attuale.ru/wp-content/uploads/2018/01/pasta-karbonara-photo-7.jpg']
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
    navigateToDetailsPage(recipe) {
      this.$router.push({name: 'recipe-details', params: {id: recipe.id}});
    },
    filterRecipes() {
    },
    saveAsFavourite(recipe){
      let recipeId = 'id'+ recipe.id;
      console.log(recipeId)
      localStorage[recipeId] = JSON.stringify(recipe);
    }
  }
};
</script>
<style scoped>
.main_page{
  text-align: center;
}
.recipe-card {
  cursor: pointer;
}

.header {
  font-size: 2em;
  margin-bottom: 20px;
}

.search{
  width: 80%;
  height: calc(2rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(128, 128, 128);
  background-color: #f1f1f1;
  border: 1px solid;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding-left: 1em;
}


.recipe-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 100px;
  background-color: rgba(197, 237, 210, 0.7);;
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
