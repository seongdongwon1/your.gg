<template>
    <div class="header">
        <div class="wrap">
            <div class="title">
                <h1 class="title-txt" @click="goHome()">
                    DONG.GG
                </h1>
            </div>
            <div class="login-area">
                <div class="login-btn">
                    <a class="login-txt" href="/users/login">Login</a>
                </div>
                <div class="sign-btn">
                    <span class="sign-txt">Sign Up</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "headerArea",
    methods: {
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
    .header {
        width : 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color : #000000;
    }
    .wrap {
        width : 1170px;
        margin : 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .title {
        padding : 15px 0 15px 0
    }
    .title .title-txt {
        text-align: center;
        font-weight: bold;
        color : white;
    }
    .login-area {
        display: flex;
        align-items: center;
    }
    .login-area .login-txt {
        font-weight: bold;
        margin-right: 5px;
        background-color: skyblue;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 80px;
        height: 35px;
        border-radius: 6px;
        color: #fff;
        vertical-align: top;
        font-size: 16px;
        box-sizing: border-box;
        cursor : pointer;
    }
    .login-area .login-txt:hover {
        color : blue;
    }
    .login-area .sign-txt {
        font-weight: bold;
        margin-left: 5px;
        background-color: skyblue;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 80px;
        height: 35px;
        border-radius: 6px;
        color: #fff;
        vertical-align: top;
        font-size: 16px;
        box-sizing: border-box;
        cursor : pointer;
    }
    .login-area .sign-txt:hover {
        color : blue;
    }
</style>
