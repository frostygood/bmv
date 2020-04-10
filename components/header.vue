<template>
  <div class="header">
    <nav class="wrapper">
      <svg class="toogle" width="17" height="12" viewBox="0 0 16.67 11.67" shape-rendering="optimizeSpeed">
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
        </li>
        <li class="li-menu">
          <a href="" class='link-menu'>Компания</a>
        </li>
        <li class="li-menu">
          <a href="" class='link-menu'>Статьи</a>
        </li>
        <li class="li-menu">
          <a href="" class='link-menu'>Контакты</a>
        </li>
        <li class='tel'>
          <a href="tel:+7(4712)34-24-33" class='link-menu'>+7(4712)34-24-33</a>
          <a href="mailto:manager@bmvcompany.ru" class='link-menu'>manager@bmvcompany.ru</a>
        </li>
        <li class='phone'>
          <a href="" class='link-menu'>
            <img src="/img/tel.svg" alt="">
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
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
        fill: #4d515c;
        @media (max-width: $sc_small_point){
          display: none;
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