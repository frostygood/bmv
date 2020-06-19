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
    <div class="floor3">
      <h2 class="h1">Реализованные объекты</h2>
      <div class="cards">
        <card v-for="(item,n) in articles" :key="n" :img="item.imgUrl" :link="item.path" :name="item.title"></card>
      </div>
      <p class="p">
        <nuxt-link to="/objects">Посмотреть ещё</nuxt-link>
      </p>
    </div>
    <div class="floor4">
      <form-contact/>
    </div>
    <div class="floor5">
      <h2 class="h2">КОНДИЦИОНЕРЫ НЕДОРОГО ОТ КОМПАНИИ «BMV»</h2>
      <p class="p">Распродажа систем кондиционирования воздуха - это хорошая возможность приобретения современного устройства от известного бренда по приемлемой цене. Акционные предложения не всегда направлены на избавление от некачественной техники, как принято полагать, в большинстве случаев - это сбыт моделей производителей, с которыми прекращается сотрудничество, проявление лояльного отношения к покупателям, либо освобождение склада от залежавшихся товаров.</p>
      <h2 class="h2">КАЧЕСТВЕННЫЕ ДЕШЕВЫЕ КОНДИЦИОНЕРЫ - ЭТО РЕАЛЬНО</h2>
      <p class="p">Наша компания предлагает кондиционеры со скидкой, существенно снижающей их реальную стоимость. Данные устройства пользуются стабильной популярностью, так как имеется множество моделей с разнообразными характеристиками, подходящими для любых условий применения. Это могут быть изделия и для больших офисных помещений, и для небольших жилых комнат. Правильный выбор, в основном, заключается в подборе параметров, наиболее соответствующих планируемому режиму функционирования. </p>
      <p class="p">Скидки на кондиционеры позволяют существенно снизить затраты на приобретение техники, необходимой для поддержания оптимальной и комфортной температуры. Чтобы подобрать хорошую модель, следует учитывать перечень рабочих режимов, которыми она оснащена. К наиболее ключевым из них относятся: обогрев, очистка воздуха, осушение, корректировка температуры, таймер, возможность смены направления воздушного потока.</p>
      <h2 class="h2">ПРИОБРЕТАЙТЕ КОНДИЦИОНЕРЫ СО СКИДКОЙ У НАС</h2>
      <p class="p">Кондиционеры, акция на которые предоставляется нашей компанией, отличаются хорошим качеством сборки и большой продолжительностью эксплуатации. Мы не занимаемся реализацией бракованного заводского товара и продукции с дефектами, полученными в результате транспортировки или неаккуратного обращения. Все дешевые кондиционеры предлагаются с минимальной торговой наценкой, что обеспечивает получение выгоды в виде отсутствия переплаты за бренд. </p>
      <p class="p">Чтобы купить кондиционеры, недорогие или по максимальной цене, достаточно ознакомиться с нашим ассортиментом и оформить покупку. Также мы предлагаем дополнительные услуги, сервисное обслуживание и монтаж. В частности, данный сервис позволяет оперативно выполнить полноценную установку устройства практически сразу после покупки. Отдать предпочтение дешевому кондиционеру часто становится хорошим решением, экономящим средства. </p>
      <p class="p">Акции в «BMV» позволяют выбрать отличное изделие с минимальными затратами. Обратитесь в "BMV" и получите профессиональный проект, включающий расчет необходимой мощности, проектирование монтаж и настройку климатического оборудования.</p>
    </div>
  </div>
</template>

<script>
import card from '~/components/blocks/object.vue'
import formContact from '~/components/forms/contact-us.vue'
export default {
  async asyncData ({ $content, params, error }) {
    let articles
    try {
      articles = await $content('objects').limit(3).fetch();
      //console.log(articles);
    } catch (e) {
      error({ message: 'Article not found' })
    }
    return {
      articles,
    }
  },
  components: {
    card,
    formContact
	},
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
    margin-bottom: 40px;
    padding-top: 30px;
  }
  @media (max-width: $min_point){
    margin-bottom: 0;
    padding-top: 20px;
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
.floor3 {
  margin-bottom: 50px;
  .h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  .p {
    text-align: center;
  }
}
.floor4 {
  margin-bottom: 100px;
  padding: 40px;
  padding-top: 60px;
  background: $color_grey_lite;
  @media (max-width: $sc_medium_point){
    flex-wrap: wrap;
    margin-bottom: 50px;
    padding: 20px;
    padding-top: 30px;
  }
  @media (max-width: $min_point){
    padding: 15px;
    padding-top: 25px;
  }
}
.floor5 {
  margin-bottom: 100px;
  @media (max-width: $sc_medium_point){
    margin-bottom: 50px;
  }
  @media (max-width: $min_point){
    margin-bottom: 20px;
  }
}
</style>
