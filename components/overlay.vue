<template>
  <div 
    class="overlay"
    @click="$store.commit('closeAllModals')"/>
</template>

<style lang="scss" scoped>
  .overlay {
    display: block;
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,.88);
    position: fixed;
    z-index: 5;
    cursor: pointer;
  }
</style>
