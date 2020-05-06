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
    <div class="floor2">
      <div class="numbers">
        <div class="col">
          <span>320</span>
        </div>
        <p>Российских клиентов</p>
      </div>
      <div class="numbers">
        <div class="col">
          <span>400</span>
        </div>
        <p>Реализованных проектов</p>
      </div>
      <div class="numbers">
        <div class="col">
          <span>20 лет</span>
        </div>
        <p>На российском рынке</p>
      </div>
      <div class="numbers">
        <div class="col">
          <span>30</span>
        </div>
        <p>Поставщиков с нами работает</p>
      </div>
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
  padding-top: 100px;
  display: flex;
  margin-bottom: 100px;
  @media (max-width: $sc_medium_point){
    flex-direction: column;
    margin-bottom: 50px;
    padding-top: 70px;
  }
  @media (max-width: $min_point){
    margin-bottom: 0;
    padding-top: 50px;
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
      margin: 0 auto;
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
.floor2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 100px;
  @media (max-width: $sc_medium_point){
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  @media (max-width: $min_point){
    margin-bottom: 0;
  }
  .numbers {
    text-align: center;
    width: 25%;
    @media (max-width: $sc_medium_point){
      width: 50%;
      margin-bottom: 25px;
    }
    .col {
      border: 3px solid #222;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      position: relative;
      display: inline-block;
      @media (max-width: $sc_medium_point){
        width: 80px;
        height: 80px;
      }
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 40px;
        line-height: 1;
        color: #222;
        text-align: center;
        transform: translate(-50%, -50%);
        @media (max-width: $sc_medium_point){
          font-size: 30px;
        }
      }
    }
    p {
      font-size: 18px;
      color: #222;
      width: 60%;
      text-align: center;
      display: inline-block;
      @media (max-width: $sc_medium_point){
        display: block;
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
