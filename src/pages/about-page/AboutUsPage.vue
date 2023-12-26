<template>
  <div class="about-us">
    <section class="section-header">
      <h1>О нас</h1>
      <p>
        Добро пожаловать на наш кулинарный портал! Мы — команда энтузиастов, объединенных любовью к кулинарии и желанием
        делиться вдохновляющими рецептами со всем миром.
      </p>
    </section>

    <section class="section-mission">
      <h2>Наша миссия</h2>
      <p>
        Мы стремимся сделать кулинарию доступной и увлекательной для каждого. Наша цель — вдохновлять вас готовить
        вкусно и творчески, раскрывая тайны мировой кухни и делясь проверенными рецептами.
      </p>
    </section>

    <section class="section-team">
      <h2>Наша команда</h2>
      <p>
        Мы — группа опытных поваров, кулинарных блоггеров и просто людей, которые страстно увлечены готовкой. Каждый из
        нас приносит свой вклад в создание контента, делится своим опытом и открывает для вас новые гастрономические
        горизонты.
      </p>
    </section>

    <section class="section-values">
      <h2>Наши ценности</h2>
      <p>
        Мы верим в качество, творчество и обмен опытом. Наши рецепты основаны на свежих и качественных продуктах, а наши
        статьи — на исследованиях и личном опыте. Мы ценим ваше время и стремимся предоставить вам лучший опыт в мире
        кулинарии.
      </p>
    </section>

    <section class="section-contact">
      <h2>Свяжитесь с нами</h2>
      <p>
        Мы будем рады услышать ваши вопросы, отзывы и предложения. Не стесняйтесь связаться с нами по адресу электронной
        почты: <a href="mailto:info@yourfoodwebsite.com">info@yourfoodwebsite.com</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-us {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: max-content;
  column-gap: 30px;
}

.section-header, .section-mission, .section-team, .section-values, .section-contact {
  margin-bottom: 30px;
}

h1, h2 {
  color: #333;
}

p {
  line-height: 1.6;
  color: #666;
}

a {
  color: #e44d26;
}
</style>


<script>
export default {
  name: "AboutUsPage",
};
</script>