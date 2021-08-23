<template>
    <div class="page">
        <div>
            <div class="cell-button" @click="toggle1 = !toggle1">
                大卡片1
                <span class="triggle">{{ toggle1 ? '收起' : '展开' }}</span>
            </div>
            <div :class="['lg-card', toggle1 ? 'open' : 'close']">
                <LCard :type="type1"></LCard>
            </div>
        </div>
        <div>
            <div class="cell-button" @click="toggle2 = !toggle2">
                大卡片2
                <span class="triggle">{{ toggle2 ? '收起' : '展开' }}</span>
            </div>
            <div :class="['lg-card', toggle2 ? 'open' : 'close']">
                <LCard :type="type2"></LCard>
            </div>
        </div>
        <div>
            <div class="cell-button" @click="toggle3 = !toggle3">
                大卡片3
                <span class="triggle">{{ toggle3 ? '收起' : '展开' }}</span>
            </div>
            <div :class="['lg-card share', toggle3 ? 'open' : 'close']">
                <ShareCard
                    :list="list"
                    :likeNum="likeNum"
                    :collectNum="collectNum" 
                    :commonNum="commonNum" 
                    @on-like="handleBeLike"></ShareCard>
            </div>
        </div>
    </div>
</template>

<script>
import LCard from '@/components/Card/LCard.vue';
import ShareCard from '@/components/Card/ShareCard.vue';
import BeibeiJia1 from '@/assets/images/BeibeiJia1.png';
import BeibeiJia2 from '@/assets/images/BeibeiJia2.png';
import BeibeiJia3 from '@/assets/images/BeibeiJia3.jpg';
import BeibeiJia4 from '@/assets/images/BeibeiJia4.png';
import BeibeiJia5 from '@/assets/images/BeibeiJia5.png';
import { reactive, toRefs } from 'vue';
export default {
    components: {
        LCard,
        ShareCard
    },
    setup() {
        const state = reactive({
            type1: 'like',
            toggle1: false,

            type2: 'show',
            toggle2: false,

            toggle3: false,
            list: [
                BeibeiJia1,
                BeibeiJia2,
                BeibeiJia3,
                BeibeiJia4,
                BeibeiJia5
            ],
            likeNum: 637,
            collectNum: 96,
            commonNum: 46,
        });
        const handleBeLike = (val) => {
            state.likeNum += 1;
        };
        return {
            ...toRefs(state),
            handleBeLike,
        }
    }
}
</script>
 
<style lang = "less" scoped>
    .page {
        overflow-y: auto;
    }
    .cell-button {
        width: 100%;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        padding: 0 20px;
        background-color: rgb(197, 197, 197);
        
        .triggle {
            float: right;
            color: #006fff;
        }
    }
    .lg-card {
        width: 100%;
        height: 468px;
        display: flex;
        overflow: hidden;
        transition: height .25s;
        &.open {
            height: 468px;
        }
        &.close {
            height: 0;
        }
        &.share.open {
            height: 600px;
        }
    }
</style>