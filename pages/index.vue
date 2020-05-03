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
.floor1 {
  padding-top: 30px;
  display: flex;
  .left {
    width: 50%;
    padding-right: 5%;
  }
  .right {
    width: 50%;
  }
}
</style>
