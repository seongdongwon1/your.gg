<template>
    <div class="userSearch-area">
        <div class="search">
            <input
                v-model="userId"
                type="text"
                class="searchTerm"
                placeholder="소환사명을 입력하세요."
            >
            <button type="submit" class="searchButton">
                <span @click="searchUser()">검색</span>
            </button>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "userSearch",
    components : {
    },
    data () {
        return {
            userId : ''
        }
    },
    methods : {
        async searchUser() {
            const id = this.userId
            await axios.post('http://localhost:8000/api/userInfo', {
                    id : this.userId
            })
                .then((res) => {
                    console.log('res', res)
                }).catch((err) => {
                console.log('err', err)
            })
        }
    }
}
</script>

<style scoped>
    .userSearch-area {
        width : 1170px;
        height : 100px;
        margin : 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search {
        width: 80%;
        height : 80px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .searchTerm {
        width : 100%;
        border: 3px solid #00B4CC;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
    }

    .searchTerm:focus{
        color: #00B4CC;
    }

    .searchButton {
        width: 70px;
        height: 36px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;
    }
</style>
