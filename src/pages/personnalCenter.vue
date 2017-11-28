<template>
  <div>
    <iframe src="./test.html" frameborder="0" id="contentIFR" width="1500" height="400"></iframe>
  </div>
</template>
<script>
import api from '@/api/api.js'
// import axios from 'axios'
export default {
  name: 'personnalCenter',
  mounted() {
    this.$nextTick(() => {
      this.loadPage();
    })
  },
  methods: {
    loadPage() {
      api.GET_TEST({
        type: 'top',
        key:'7f45725a9dc9c052aca7fbca56b5ddc7'
      }).then(res => {
        console.log(res)
      })
    }
  }
}

</script>
<style lang="less" scoped="scoped">
@import '../styles/var';
div {
  color: @themeColor;
}

</style>
