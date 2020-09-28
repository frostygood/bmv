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
    <div class="floor5">
      <h2 class="h2" style="text-transform: uppercase;">19 января 1999 года — </h2>
      <p class="p" style="margin-bottom: 35px;">эта дата стала отправной точкой для формирования в Курске крупнейшего поставщика услуг по подбору, поставке и монтажу систем кондиционирования, вентиляции, отопления, промышленного и коммерческого холодоснабжения, систем контроля доступа, пожарной сигнализации и пожаротушения, видеонаблюдения, систем промышленной автоматики.</p>
      <h2 class="h2" style="text-transform: uppercase;">Сегодня «BMV engineering» — это:</h2>
      <ul class="text">
        <li class="p">Официальный дилер и эксклюзивный представитель Fujitsu General Ltd. — лидера в производстве климатического оборудования для промышленных объектов.</li>
        <li class="p">Официальный дилер Mitsubishi Heavy Ind., Hyundai и United Elements, которые известны всему миру как производители надежных систем кондиционирования, вентиляции и отоплении</li>
        <li class="p">Авторизованный сервисный центр по гарантийному ремонту и обслуживанию теплового оборудования «Тропик».</li>
        <li class="p">Поставщик услуг по разработке комплексных решений вентиляции, холодильного оборудования, систем охраны и наблюдения и других для торговых и промышленных объектов, частных клиентов.</li>
      </ul>
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
    <div class="floor5">
      <p class="h3" style="text-align: center; margin-left: 5%; margin-right: 5%; font-style: italic;">Клиенты «BMV engineering» — это космодром «Восточный», ООО «Грибная долина», более 20 объектов ЗАО «Корпорация «Гринн», сеть супермаркетов «Европа» и другие крупные компании и государственные заказчики. Всю информацию по объектам вы можете прочитать в разделах оборудования.</p>
    </div>
    <div class="floor4">
      <form-contact/>
    </div>
    <div class="floor5">
      <h1 class="h1" style="text-transform: uppercase;">4 принципа эффективной работы «BMV engineering» Курск</h1>
      <p class="p">В работе сотрудники «BMV engineering» Курск руководствуются следующими принципами:</p>
      
      <h2 class="h2">- Прозрачное ценообразование</h2>
      <p class="p">Все работы, будь то подключение умного дома или установки пожарной системы на промышленном объекте, согласованы заранее. На первом этапе на объект выезжает наш специалист для предварительной оценки работ, договор вы подписываете только после согласования бюджета.</p>
      <p class="h3" style="text-align: center; margin-left: 5%; margin-right: 5%; font-style: italic;">«BMV engineering» Курск не приемлет скрытые и “неожиданные” статьи расходов, ценит и свое время, и бюджет заказчика.</p>

      <h2 class="h2">- Материальная ответственность</h2>
      <p class="p">Вы подписываете акт приема только после ввода оборудования в эксплуатацию. На все установленное оборудование предоставляется гарантия производителя: от кондиционеров до источников бесперебойного питания. Аналогичные гарантии предоставляет наша компания на проведение профилактических работ и обслуживание.</p>

      <h2 class="h2">- Репутация</h2>
      <p class="p">За более  чем 20 лет работы специалисты «BMV engineering» не сталкивались с отказом со стороны заказчика. Это касается как юридических лиц, так и небольших заказов на установку и обслуживание кондиционеров: отзывы о нашей компании в сети на 100% положительные. Наша репутация среди клиентов складывается из базовых принципов работы: оперативная обратная связь, персональный подход к бюджету и задачам заказчика, ответственности за произведенные работы.</p>

      <h2 class="h2">- Строгий подбор персонала</h2>
      <p class="p" style="margin-bottom: 25px;">Кадры решают всё — это про «BMV engineering». Для оперативного решения ваших задач созданы подразделения:</p>
      <ul class="text">
        <li class="p">Коммерческий отдел и отдел продаж — составляет для вас коммерческие предложения и готовые решения.</li>
        <li class="p">Договорной отдел — отвечает за юридические моменты подписания договора.</li>
        <li class="p">Проектно-сметный отдел — составляет проекты систем вентиляции, кондиционерного оборудования, пожарных и других систем, отвечает за согласование смет.</li>
        <li class="p">Отдел материально-технического обеспечения — поставляет необходимое для реализации вашего проекта оборудование.</li>
        <li class="p">Технический отдел и группа технического обслуживания — участвует в реализации и обслуживании оборудования на объекте.</li>
        <li class="p">Монтажная группа — устанавливает и вводит в эксплуатацию оборудование на вашем объекте.</li>
      </ul>
      <p class="h3" style="text-align: center; margin-left: 5%; margin-right: 5%; font-style: italic;">«BMV engineering» использует собственные человеческие ресурсы: все монтажники и другие специалисты состоят в нашем штате, что гарантирует нашу материальную ответственность за реализацию проекта.</p>
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
