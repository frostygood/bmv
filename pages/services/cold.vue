<template>
  <div class="wrapper page-content">
    <div class="text">
      <h1 class="h1 mb32">Кондиционирование в Курске</h1>

      
    </div>
    <div class="floor-contacts mb32" style="padding: 40px;">
      <div class="wrapper">
        <form-contact/>
      </div>
    </div>
    <div class="text">
 
    </div>
  </div>
</template>

<script>
import formContact from '~/components/forms/contact-us.vue'
export default {
components: {
		formContact
	},
}
</script>

<style lang="scss" scoped>
.text {
  max-width: 720px;
}
</style>
