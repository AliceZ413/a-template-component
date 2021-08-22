<template>
    <div>
        <header :class="['home-header', 'wrap', { 'active': headerScroll }]">
            <router-link tag="i" to="./category"><i class="iconfont icon-menu"></i></router-link>
            <div class="header-search">
                <span class="app-name">nb商城</span>
                <i class="iconfont icon-search"></i>
                <router-link tag="span" class="search-title" to="./product-list?from=home">搜索</router-link>
            </div>
            <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
            <router-link class="login" tag="span" to="./user" v-else>
                <van-icon name="manager-o"></van-icon>
            </router-link>
        </header>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import { toRefs, reactive, nextTick } from 'vue';
import NavBar from '@/components/NavBar.vue';
export default {
    components: {
        NavBar
    },
    setup() {
        const state = reactive({
            headerScroll: false, // 滚动透明
        });
        nextTick(() => {
            window.addEventListener('scroll', () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false;
            });
        });
        return {
            ...toRefs(state),
        }
    }
}
</script>
 
<style lang = "less" scoped>
    @import '@/assets/style/mixin.less';
    .home-header {
        position: fixed;
        left: 0;
        top: 0;
        .wh(100%, 50px);
        .flex-jc();
        line-height: 50px;
        padding: 0 15px;
        .boxSizing();
        font-size: 15px;
        color: #ffffff;
        z-index: 10000;
        .icon-menu {
            color: @primary;
        }
        &.active {
            background-color: @primary;
            .icon-menu {
                color: #ffffff;
            }
            .login {
                color: #ffffff;
            }
        }
        .header-search {
            display: flex;
            .wh(74%, 20px);
            line-height: 20px;
            margin: 10px 0;
            padding: 5px 0;
            color: #232326;
            background-color: rgba(255, 255, 255, .7);
            border-radius: 20px;
            .app-name {
                padding: 0 10px;
                color: @primary;
                font-size: 20px;
                font-weight: bold;
                border-radius: 1px solid #666666;
            }
            .icon-search {
                padding: 0 10px;
                font-size: 17px;
            }
            .search-title {
                font-size: 12px;
                color: #666;
                line-height: 21px;
            }
        }
    }
</style>