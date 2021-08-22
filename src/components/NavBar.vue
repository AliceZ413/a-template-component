<template>
    <div class="nav-bar van-hairline--top">
        <ul class="nav-list">
            <router-link tag="li" class="nav-list-item active" to="home">
                <i class="iconfont"></i>
                <span>首页</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {

 
        }
    }
}
</script>
 
<style lang = "less" scoped>
    @import '@/assets/style/mixin.less';
    .nav-bar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 5px 0;
        z-index: 1000;
        background-color: #ffffff;
        transform: translateZ(0);
    }
</style>