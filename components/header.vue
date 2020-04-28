<template>
  <div class="header">
    <nav class="wrapper">
      <svg @click="mobile = true" class="toogle" width="17" height="12" viewBox="0 0 16.67 11.67" shape-rendering="optimizeSpeed">
        <path d="M16.67,1.67V0H0V1.67Zm0,3.33V6.67H0V5Zm0,5v1.67H0V10Z"></path>
      </svg>
      <ul>
        <li class='logo'>
          <a href="/" title="На главную">
            <img src="/img/logo.png" alt="logo-bmv">
          </a>
        </li>
        <li class="drop-menu">
          <a href="" class='link-menu'>
            <svg width="17" height="12" viewBox="0 0 16.67 11.67" shape-rendering="optimizeSpeed">
              <path d="M16.67,1.67V0H0V1.67Zm0,3.33V6.67H0V5Zm0,5v1.67H0V10Z"></path>
            </svg>
            Услуги</a>
          <ul class="sub-menu">
            <li><a href="">Промышленная вентиляция</a></li>
            <li><a href="">Кондиционирование</a></li>
            <li><a href="">Видеонаблюдение</a></li>
            <li><a href="">Автоматика</a></li>
          </ul>
        </li>
        <li class="li-menu">
          <a href="" class='link-menu'>Наши объекты</a>
        </li>
        <!--<li class="li-menu">
          <a href="" class='link-menu'>Статьи</a>
        </li>-->
        <li class="li-menu">
          <a href="" class='link-menu'>Контакты</a>
        </li>
        <li class='tel'>
          <a href="tel:+7(4712)34-24-33" class='link-menu'>+7(4712)34-24-33</a>
          <a href="mailto:manager@bmvcompany.ru" class='link-menu'>manager@bmvcompany.ru</a>
        </li>
        <li class='phone'>
          <a href="#" class='link-menu' @click.prevent="$store.commit('openModal', 'contactUs')">
            <img src="/img/tel.svg" alt="">
          </a>
        </li>
      </ul>
    </nav>
    <div class="mob-menu" :class="{'open': mobile}">
      <img @click="mobile = false" src="/img/close.png" alt="close">
      <ul>
        <li><a @click="mobile = false" href="tel:+7(4712)34-24-33">+7(4712)34-24-33</a></li>
        <li><a @click="mobile = false" href="">Услуги</a>
          <!--<ul class="in-menu">
            <li><a href="">Промышленная вентиляция</a></li>
            <li><a href="">Кондиционирование</a></li>
            <li><a href="">Видеонаблюдение</a></li>
            <li><a href="">Автоматика</a></li>
          </ul>-->
        </li>
        <li><a @click="mobile = false" href="">Наши объекты</a></li>
        <!--<li><a @click="mobile = false" href="">Статьи</a></li>-->
        <li><a @click="mobile = false" href="">Контакты</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
          mobile: false,
        }
    },
}
</script>


<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";
  .header {
    margin: 0 auto;
    padding-bottom: 5px;
    padding-top: 5px;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    height: 66px;
    box-sizing: border-box;
    @media (max-width: $min_point){
      height: 60px;
      position: fixed;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: -1500px;
      right: -1500px;
      height: 1px;
      background: #e3e4e8;
    }
    &.fixed {
      position: fixed;
    }
  }
  .mob-menu {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: -100%;
    z-index: 2;
    background: rgba(45, 65, 109, 0.88);
    opacity: 0;
    transition: .3s;
    &.open {
      opacity: 1;
      left: 0;
    }
    >img {
      position: absolute;
      top: 20px;
      right: 20px;
      height: 40px;
      filter: invert(1) drop-shadow(2px 4px 6px black);
      cursor: pointer;
    }
    >ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      //justify-content: space-between;
      height: 100%;
      padding-top: 70px;
      box-sizing: border-box;
      padding-bottom: 50px;
      .in-menu {
        max-width: 150px;
        li {
          list-style: disc;
          color: white;
          margin-bottom: 10px;
        }
      }
      li {
        margin-bottom: 20px;
        a {
          color: white;
          text-decoration: none;
          font-size: $base_font-size*1.4;
          text-align: center;
        }  
      }
    }
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .toogle {
      display: none;
      width: 30px;
      height: 30px;
      fill: #4d515c;
      cursor: pointer;
      &:hover > a > svg {
        fill: $color_link;
      }
      @media (max-width: $sc_small_point){
        display: inline-block;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .logo {
        width: 130px;
        margin-right: auto;
        @media (max-width: $sc_small_point){
          margin-left: auto;
        }
        @media (max-width: $min_point){
          width: 120px;
        }
        img {
          width: 100%;
        }
      }
      .phone {
          background: $color_primary;
          width: 40px;
          height: 40px;
          display: inline-block;
          box-sizing: border-box;
          transition: .3s;
          @media (max-width: $sc_medium_point){
            display: none;
          }
          @media (max-width: $sc_small_point){
            display: inline-block;
          }
          &:hover {
            background: $color_link;
          }
          img {
            padding: 9px;
            width: 100%;
            box-sizing: border-box;
          }
        }
      .tel {
        margin-left: auto;
        margin-right: 20px;
        text-align: right;
        @media (max-width: $sc_medium_point){
          margin-right: 0;
        }
        @media (max-width: $sc_small_point){
          display: none;
        }
        a {
          white-space: nowrap;
          color: $color_primary;
          font-weight: 700;
          display: block;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .li-menu {
        margin-left: 50px;
        @media (max-width: $sc_medium_point){
          margin-left: 15px;
        }
        @media (max-width: $sc_small_point){
          display: none;
        }
      }
      .drop-menu {
        position: relative;
        @media (max-width: $sc_small_point){
          display: none;
        }
        &:hover .sub-menu {
          max-height: 300px;
          padding: 10px;
          padding-top: 15px;
          opacity: 1;
          border: 1px solid black;
          li {
            font-size: $base_font-size;
          }
        }
        .sub-menu {
          position: absolute;
          top: 15px;
          left: 0;
          background: white;
          border: 0px solid black;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          width: 250%;
          align-items: flex-start;
          padding: 0;
          z-index: 2;
          overflow: hidden;
          max-height: 0;
          box-sizing: border-box;
          transition: .3s;
          li {
            font-size: 0;
            margin-bottom: 10px;
            transition: .2s;
            a {
              text-decoration: none;
              &:hover{
                text-decoration: none;
              }
            }
          }
        }
      }
      .drop-menu > a > svg {
        fill: #4d515c;
      }
      .drop-menu:hover > a > svg {
        fill: $color_link;
      }
      .link-menu {
        text-decoration: none;
        font-size: $base_font-size;
      }
    }
  }
</style>