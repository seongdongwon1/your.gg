<template>
    <div class="user-infomation">
        <div class="user-info-top">
            <div class="user-info-top-contents">
                <div class="user-image">
                    <div class="image-area"></div>
                </div>
                <div class="user-name"></div>
                <div class="user-ranking"></div>
                <div class="user-free-ranking"></div>
            </div>
        </div>
        <div class="user-info-bottom">

        </div>
    </div>
</template>

<script>
export default {
    name: "LeftBox"
}
</script>

<style scoped>
    .user-infomation {
        width : 100%;
        height : 100%;
    }
    .user-info-top {
        width : 100%;
        height : 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .user-info-top .user-info-top-contents {
        width : 95%;
        height : 95%;
        display: flex;
    }
    .user-info-top .user-info-top-contents .user-image {
        width : 20%;
        display: flex;
        align-items: center;
    }
    .user-info-top .user-info-top-contents .user-image .image-area {
        width : 100%;
        height : 70%;
    }
    .user-info-top .user-info-top-contents .user-name {
        width : 20%;
    }
    .user-info-top .user-info-top-contents .user-ranking {
        width : 30%;
    }
    .user-info-top .user-info-top-contents .user-free-ranking {
        width : 30%;
    }
    .user-info-bottom {
        width : 100%;
        height : 70%;
    }
</style>
