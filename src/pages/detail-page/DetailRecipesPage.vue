<template>
  <div class="detail-content">
    <template v-for="recipe in this.recipes" :key="recipe.id" class="recipe-card">
      <div v-if="recipe.id === Number($route.params.id)">
        <div class="img-block">
          <h2 class="header">{{ recipe.name }}</h2>
          <img :src="recipe.imageUrl" alt="recipe-image" class="recipe-main_img">
        </div>
        <div class="info-block">
          <div class="recipe-desc">{{ recipe.description }}</div>
          <div class="carousel">
            <div class="carousel-inner">
              <div
                  v-for="(image, index) in recipe.images"
                  :key="index"
                  :class="{'carousel-item': true, 'active': index === currentIndex }"
              >
                <img class="carousel_img" :src="image" alt="recipe-image"/>
              </div>
            </div>
            <button class="carousel-control-prev" @click="prevSlide">
              <i class="carousel-control-prev-icon"></i>
            </button>
            <button class="carousel-control-next" @click="nextSlide">
              <i class="carousel-control-next-icon"></i>
            </button>
          </div>
        </div>
        <button class="button-like" @click="addToFavorites">
          <i class="heart"></i>
        </button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props:['recipes'],
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {
    console.log(typeof this.recipes[1].id);
    console.log(typeof this.$route.params.id);
    console.log(this.recipes[1].id === Number(this.$route.params.id));
  },
  methods: {
    prevSlide() {
      console.log(this.recipes[Number(this.$route.params.id)].images.length);
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.recipes[Number(this.$route.params.id)].images.length - 1;
    },
    nextSlide() {
      this.currentIndex = this.currentIndex < this.recipes[Number(this.$route.params.id)].images.length - 1? this.currentIndex + 1 : 0;
    },
    addToFavorites(recipe) {
      let recipeId = 'id' +this.$route.params.id;
      console.log(recipeId)
      localStorage[recipeId] = JSON.stringify(recipe);
    },
  },
};
</script>
<style>

.img-block {
  display: flex;
  align-items: center;
  column-gap: 30px;
  flex-direction: column;
}

.header {
  padding: 20px;
  text-align: center;
}

.recipe-main_img {
  border-radius: 2rem;
  width: 700px;
}

.info-block {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(197, 237, 210, 0.7);
  margin: 50px;
  grid-column-gap: 30px;
}
.recipe-desc{
  margin: 20px;
  font-size: 20px;
  padding: 10px;;
}
.carousel{
  margin: 20px;
  display: block;
}

.carousel_img{
  max-width: 600px;
  border-radius: 0.5rem;
}
.carousel-item {
  min-height: 325px;
}
.carousel-item.active {
  display: flex;
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  align-items: center;
}

.carousel-control-prev-icon{
  background-image: url("src/assets/back-svgrepo-com.svg");

}
.carousel-control-next-icon{
  background-image: url("src/assets/next-svgrepo-com.svg");
}

.carousel-control-prev {
  margin-right: 530px;
}

.carousel-control-next {
  margin-right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 30px;
  height: 30px;
  background-color: grey;
  border-radius: 50%;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
}

.button-like {
  position: absolute;
  bottom: -310px;
  right: 100px;
  margin: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.heart {
  display: inline-block;
  width: 35px;
  height: 35px;
  background-image: url('src/assets/heart-alt-svgrepo-com.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>