<template>
    <section class="contents-user-info">
        <div class="contents-top">
            <div class="user-info">
                <span class="user-info-txt">당신의 정보</span>
                <div class="user-info-box">
                    <left-box />
                </div>
            </div>
            <div class="user-rate-chart">
                <span class="user-rate-txt">당신의 승률</span>
                <div class="user-rate-chart-box">

                </div>
            </div>
        </div>
        <div class="contents-jungle"></div>
        <div class="contents-middle"></div>
        <div class="contents-bottom"></div>
        <div class="contents-support"></div>
    </section>
</template>

<script>
import LeftBox from '~/components/contents/userInfo/LeftBox'

export default {
    name: "userInfo",
    components: { LeftBox }
}
</script>

<style scoped>
    .contents-user-info {
        width : 1170px;
        margin: 0 auto;
    }
    .contents-top {
        width : 100%;
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
    .contents-top .user-info {
        width : 49%;
    }
    .contents-top .user-info .user-info-txt {
        font-weight: bold;
        color : #ffffff;
    }
    .contents-top .user-info .user-info-box {
        height : 500px;
        margin-top: 5px;
        background-color: #191c20;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 5px;
    }
    .contents-top .user-rate-chart {
        width : 49%;
    }
    .contents-top .user-rate-chart .user-rate-txt {
        font-weight: bold;
        color : #ffffff;
    }
    .contents-top .user-rate-chart .user-rate-chart-box {
        height : 500px;
        margin-top: 5px;
        background-color: #191c20;
        background-clip: border-box;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 5px;
    }

</style>
