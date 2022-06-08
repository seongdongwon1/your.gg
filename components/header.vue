<template>
    <div class="header">
        <div class="wrap">
            <div class="title">
                <span class="title-txt">
                    your GG
                </span>
            </div>
            <div class="login-area">
                <div class="login-btn">
                    Login
                </div>
                <div class="sign-btn">
                    Sign Up
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "header"
}
</script>

<style scoped>
    .header {
        width : 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .wrap {
        width : 1170px;
        margin : 0 auto;
    }
    .title {
        padding : 15px 0 15px 0
    }
    .login-area {
        display: flex;
    }
</style>
