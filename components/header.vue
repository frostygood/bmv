<template>
  <article class="header fixed">
    <nav class="wrapper">
      <img class="toogle" src="" alt="">
      <ul>
        <li class='logo'>
          <a href="/" title="На главную">
            <img src="http://www.bmvcompany.ru/images/logo1.gif" alt="logo-bmv">
          </a>
        </li>
        <li>
          <a href="" class='link-menu'>
            <svg width="17" height="12" viewBox="0 0 16.67 11.67" shape-rendering="optimizeSpeed">
              <path d="M16.67,1.67V0H0V1.67Zm0,3.33V6.67H0V5Zm0,5v1.67H0V10Z" fill="#4d515c"></path>
            </svg>
            Услуги</a>
        </li>
        <li>
          <a href="" class='link-menu'>Компания</a>
        </li>
        <li>
          <a href="" class='link-menu'>Статьи</a>
        </li>
        <li>
          <a href="" class='link-menu'>Контакты</a>
        </li>
        <li>
          <a href="tel:8678564970" class='link-menu'>675875645764</a>
        </li>
        <li>
          <a href="" class='link-menu phone'>
            <img src="" alt="">
          </a>
        </li>
      </ul>
    </nav>
  </article>
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
      &.fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;
      }
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    .toogle {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .logo {
        width: 160px;
        img {
          width: 100%;
        }
      }
      .link-menu {
        text-decoration: none;
        font-size: $base_font-size;
      }
    }
  }
</style>