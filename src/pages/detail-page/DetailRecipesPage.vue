<template>
  <div v-if="recipe">
    <h2>{{ recipe.name }}</h2>
    <div>
      <div class="carousel">
        <div class="carousel-inner">
          <div
              v-for="(image, index) in recipe.images"
              :key="index"
              :class="{ 'carousel-item': true, 'active': index === currentIndex }"
          >
            <img class="d-block w-100" :src="image"/>
          </div>
        </div>
        <button class="carousel-control-prev" @click="prevSlide">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="nextSlide">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div>{{ recipe.description }}</div>
      <button class="button-like" value="{{}}" @click="addToFavorites">
        <i class="heart"></i>
      </button>
    </div>
  </div>
  <div v-else>
    <h1>Page not found!</h1>
  </div>
</template>


<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.recipe.images.length - 1;
    },
    nextSlide() {
      this.currentIndex = this.currentIndex < this.recipe.images.length - 1 ? this.currentIndex + 1 : 0;
    },
    addToFavorites(recipe) {
      //window.localStorage.setItem('fav', JSON.stringify(recipe));
      let recipeId = 'id'+ recipe.id;
      console.log(recipeId)
      localStorage[recipeId] = JSON.stringify(recipe);
    },
  },
};
</script>