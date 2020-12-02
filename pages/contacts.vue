<template>
  <div class="wrapper">
    <h1 class="h1">Контакты</h1>
    <div class="right">
      <h2 class="h1">Офис</h2>
      <h3 class="h3">Россия, Курск, 1-я Щигровская улица, 52 оф.44</h3>
      <p class="p">Телефон: <a href="tel:+7(4712)34-24-33">+7(4712)34-24-33</a><br>
      E-mail: <a href="emailto:manager@bmvcompany.ru">manager@bmvcompany.ru</a><br>
      Понедельник — пятница, c 9:00 до 18:00</p>
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4dec71f8d2895eae8f9a4d4d22da0cdc4b3e2a5fed88ef68526fd6eb075035ff&amp;source=constructor" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.wrapper {
  margin-bottom: auto;
  padding-top: 50px;
  padding-bottom: 100px;
}
iframe {
  width: 500px;
  height: 400px;
  @media (max-width: $sc_medium_point){
    width: 400px;
    height: 300px;
  }
  @media (max-width: $sc20_small_point){
    width: 100%;
    height: 250px;
  }
}
.right {
  float: right;
  width: calc(100% - 550px);
  @media (max-width: $sc_medium_point){
    width: calc(100% - 450px);
  }
  @media (max-width: $sc20_small_point){
    float: none;
    display: block;
    padding-bottom: 30px;
    width: 100%;
  }
}
h2.h1 {
  @media (max-width: $sc20_small_point){
    display: none;
  }
}
</style>
