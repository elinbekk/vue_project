<template>
  <div class="main_page">
    <h2 class="header">CookBook</h2>
    <div class="search-form">
      <input class="search" v-model="searchQuery" @input="filterRecipes" placeholder="Искать тут"/>
    </div>
    <div class="recipe-cards">
      <div v-for="recipe in filteredRecipes" :key="recipe.id"
           class="recipe-card">
        <div @click="navigateToDetailsPage(recipe)">
          <img :src="recipe.imageUrl" alt="recipe-image"/>
          <p>{{ recipe.name }}</p>
        </div>
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
  props: ['recipes'],
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'Паста Карбонара',
          imageUrl: 'https://domos.ru/images/blog/15944/Carbonara.jpg',
          description: 'Описание пасты Карбонара и как ее приготовить.',
          images: ['https://sovkusom.ru/wp-content/uploads/blog/i/italyanskie-blyuda/7.jpg', 'https://attuale.ru/wp-content/uploads/2018/01/pasta-karbonara-photo-7.jpg']
        },
        {
          id: 2,
          name: 'Греческий салат',
          imageUrl: 'https://static.tildacdn.com/tild3566-3363-4464-b138-613432383762/DSC_4013_1.jpg',
          description: 'Описание греческого салата и как его приготовить.',
          images: ['https://sovkusom.ru/wp-content/uploads/blog/i/italyanskie-blyuda/7.jpg', 'https://attuale.ru/wp-content/uploads/2018/01/pasta-karbonara-photo-7.jpg']
        }, {
          id: 3,
          name: 'Рататуй',
          imageUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/10137773/pub_64ba2552268aa5202826cbf8_64ba2561217739424558d9c1/scale_1200',
          description: 'Описание рататуя и как его приготовить.',
          images: [
            'https://example.com/ratatouille-image1.jpg',
            'https://example.com/ratatouille-image2.jpg',
          ],
        },
        {
          id: 4,
          name: 'Салат Цезарь',
          imageUrl: 'https://podacha-blud.com/uploads/posts/2022-10/1666457976_20-podacha-blud-com-p-oformlenie-salata-tsezar-s-kuritsei-i-sukh-21.jpg',
          description: 'Описание салата Цезарь и как его приготовить.',
          images: [
            'https://example.com/caesar-salad-image1.jpg',
            'https://example.com/caesar-salad-image2.jpg',
          ],
        },
        {
          id: 5,
          name: 'Спагетти с томатным соусом',
          imageUrl: 'https://img.freepik.com/premium-photo/pasta-with-tomato-sauce-on-plate_1220-5179.jpg?w=2000',
          description: 'Описание спагетти с томатным соусом и как их приготовить.',
          images: [
            'https://example.com/spaghetti-tomato-sauce-image1.jpg',
            'https://example.com/spaghetti-tomato-sauce-image2.jpg',
          ],
        },
        {
          id: 6,
          name: 'Омлет с овощами',
          imageUrl: 'https://www.patee.ru/r/x6/16/7d/20/960m.jpg',
          description: 'Описание омлета с овощами и как его приготовить.',
          images: [
            'https://example.com/vegetable-omelette-image1.jpg',
            'https://example.com/vegetable-omelette-image2.jpg',
          ],
        },
        {
          id: 7,
          name: 'Курица терияки',
          imageUrl: 'https://ideireceptov.ru/wp-content/uploads/2018/03/20100130-Cooking-742-Edit.jpg',
          description: 'Описание курицы терияки и как ее приготовить.',
          images: [
            'https://example.com/chicken-teriyaki-image1.jpg',
            'https://example.com/chicken-teriyaki-image2.jpg',
          ],
        },
        {
          id: 8,
          name: 'Чизкейк с малиновым соусом',
          imageUrl: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666379432_67-mykaleidoscope-ru-p-malinovoe-konfi-krasivo-70.jpg',
          description: 'Описание чизкейка с малиновым соусом и как его приготовить.',
          images: [
            'https://example.com/raspberry-cheesecake-image1.jpg',
            'https://example.com/raspberry-cheesecake-image2.jpg',
          ],
        },
        {
          id: 9,
          name: 'Томатный суп',
          imageUrl: 'https://lafoy.ru/photo_b/foto-1857-0.jpg',
          description: 'Описание томатного супа и как его приготовить.',
          images: [
            'https://example.com/tomato-soup-image1.jpg',
            'https://example.com/tomato-soup-image2.jpg',
          ],
        },
        {
          id: 10,
          name: 'Апельсиновый сок',
          imageUrl: 'https://w.forfun.com/fetch/5c/5c5f273d26ba1c1b353d98fdf0a7d244.jpeg',
          description: 'Описание свежевыжатого апельсинового сока и как его приготовить.',
          images: [
            'https://example.com/fresh-orange-juice-image1.jpg',
            'https://example.com/fresh-orange-juice-image2.jpg',
          ],
        }
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
    saveAsFavourite(recipe) {
      let recipeId = 'id' + recipe.id;
      console.log(recipeId)
      localStorage[recipeId] = JSON.stringify(recipe);
    }
  }
};
</script>
<style scoped>
.main_page {
  text-align: center;
}

.recipe-card {
  cursor: pointer;
}

.header {
  font-size: 2em;
  margin-bottom: 20px;
}

.search {
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
  grid-gap: 30px;
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
  cursor: pointer;
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
