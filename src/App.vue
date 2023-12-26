<template>
  <div class="page">
    <header>
      <LayoutHeader></LayoutHeader>
    </header>
     <DetailRecipesPage v-bind:recipes="recipes"/>
    <router-view/>
    <footer>
      <LayoutFooter></LayoutFooter>
    </footer>
  </div>
</template>
<script>

import LayoutHeader from '@/layout/header/LayoutHeader.vue'
import LayoutFooter from "@/layout/footer/LayoutFooter.vue";
import MainRecipesPage from "@/pages/main-page/MainRecipesPage.vue";
import DetailRecipesPage from "@/pages/detail-page/DetailRecipesPage.vue";

export default {
  name: 'App',
  components: {
    DetailRecipesPage,
    LayoutFooter,
    LayoutHeader,
    MainRecipesPage
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          name: 'Паста Карбонара',
          imageUrl: 'https://domos.ru/images/blog/15944/Carbonara.jpg',
          description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' +
              ' Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. ' +
              'Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. ' +
              'Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. ' +
              'Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни.' +
              ' Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. ',
          images: ['https://attuale.ru/wp-content/uploads/2018/01/pasta-karbonara-photo-7.jpg']
        },
        {
          id: 2,
          name: 'Греческий салат',
          imageUrl: 'https://static.tildacdn.com/tild3566-3363-4464-b138-613432383762/DSC_4013_1.jpg',
          description: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.' +
              ' Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. ' +
              'Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.' +
              ' Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. ' +
              'Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни.' +
              ' Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. ',
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
    }
  }
}
</script>

<style scoped>

</style>

