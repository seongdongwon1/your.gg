<template>
  <div class="container">
        <gg-haeder />
      <div class="contents">
          asdasdas
      </div>
      <div class="footer">
          asdasdasd
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
import ggHaeder from '~/components/header'

export default {
    name: 'IndexPage',
    components: {
      ggHaeder
    }
    // async asyncData() {
    //   await axios.get('http://localhost:8000/api/sty-test-func')
    //     .then((res) => {
    //         console.log('res', res)
    //     }).catch((err) => {
    //         console.log('err', err)
    //       })
    // }
}
</script>

<style>
    .container {
        margin : 0;
        padding : 0;
    }
    /* contents */
    .contents {
        width : 1170px;
        margin : 0 auto;
    }
    /* footer */
    .footer {
        width : 100%;
    }
</style>
