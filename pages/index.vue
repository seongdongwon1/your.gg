<template>
  <div class="container">
        <gg-haeder />
      <div class="middle-header">
          <p>당신의 내전 기록을 분석해 줍니다.</p>
      </div>
      <div class="contents">
          <user-search />
          <user-info />
      </div>
      <div class="footer">
          asdasdasd
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import ggHaeder from '~/components/header'
import UserInfo from '~/components/contents/userInfo'
import UserSearch from "~/components/contents/userSearch";

export default {
    name: 'IndexPage',
    components: {
      ggHaeder, UserInfo, UserSearch
    }
    // async asyncData() {
    //   await axios.get('http://localhost:8000/api/userInfo')
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
        background-color : #2e2f32;
        font-family: "Roboto", "Helvetica", "Malgun Gothic", "Apple SD Gothic Neo", "AppleGothic", "Dotum", "Arial", "Tahoma"
    }
    .middle-header {
        width : 100%;
        background-color : #191c20;
        padding: 3px 0 7px 0;
        color : #a3a3a3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* contents */
    .contents {
        width :100%;
        margin : 0 auto;
    }
    /* footer */
    .footer {
        width : 100%;
    }
</style>
