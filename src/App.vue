<template>
  <base-header></base-header>
  <router-view/>
  <base-footer></base-footer>
</template>
<script>
import baseHeader from '@/components/base/header';
import baseFooter from '@/components/base/footer';
export default {
  components:{
    baseHeader,baseFooter
  }
}
</script>