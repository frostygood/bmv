<template>
  <div class="wrapper">
    <div class="floor1">
      <div class="left">
        <h2 class="h2">Компания BMV Engineering</h2>
        <h1 class="h1">Более 20 лет занимаемся вентиляцией, автоматикой и кондиционированием</h1>
        <a href="/" @click.prevent="$store.commit('openModal', 'contactUs')" class="big button">Бесплатная консультация</a>
      </div>
      <img src="/img/main-screen.jpg" alt="Главный экран" class="right">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
.floor1 {
  padding-top: 30px;
  display: flex;
  @media (max-width: $sc_medium_point){
    flex-direction: column;
  }
  .left {
    width: 50%;
    padding-right: 5%;
    @media (max-width: $sc_medium_point){
      width: 100%;
      padding-right: 0;
      margin-bottom: 50px;
    }
  }
  .right {
    width: 50%;
    @media (max-width: $sc_medium_point){
      width: 100%;
      max-width: 500px;
    }
    @media (max-width: $min_point){
      display: none;
    }
  }
  h1.h1 {
    @media (max-width: $min_point){
      font-size: 20px;
      line-height: 1.2;
    }
  }
  .button.big {
    font-size: 16px;
    padding: 10px 20px;
  }
}
</style>
