<template>
    <div class="large-card">
        <div class="bg" v-if="type == 'like'">
            <img src="@/assets/images/BeibeiJia1.png" alt="">
        </div>
        <div :class="['large-card-content', type]">
            <div class="top" v-if="type == 'like'">
                <!-- 将用button组件替代 -->
                <div :class="['button', active ? 'active' : '']" @click="handleClick">
                    {{ active ? '取消的有难了' : '赞' }}
                </div>
                <div class="love">❤ {{ textObj.likeNum || 0}}</div>
            </div>
            <div :class="['bottom', type]">
                <div class="title">{{ textObj.title }}</div>
                <div class="sub-title">{{ textObj.subTitle }}</div>
            </div>
            <div class="bg">
                <img :src="textObj.bg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs, reactive, computed, onMounted } from 'vue';
import bg1 from '@/assets/images/JiaLe.jpg';
import bg2 from '@/assets/images/BeibeiJia1.png';
import bg3 from '@/assets/images/BeibeiJia2.png';
export default {
    props: {
        type: {
            type: String,
            default: 'like'
        },
    },
    setup(props) {
        const state = reactive({
            active: false,
            likeNum: 0,
            textObj: {},
        });
        const handleClick = () => {
            state.active = !state.active;
            if (state.active) {
                state.textObj.likeNum += 1;
            }
        };
        const init = () => {
            if (props.type == 'like') {
                state.textObj = {
                    title: '王珈乐 18岁',
                    subTitle: '就读于枝江大学',
                    likeNum: 0,
                    bg: bg1
                };
            } else {
                state.textObj = {
                    title: '什么叫我嗑贝贝珈',
                    subTitle: '我不嗑贝贝珈我干嘛啊',
                    likeNum: 0,
                    bg: bg3
                };
            }
        };
        onMounted(() => {
            init();
        });
        return {
            ...toRefs(state),
            handleClick,
        }
    }
}
</script>
 
<style lang = "less" scoped>
    .large-card, .large-card-content {
        position: relative;
        width: 311px;
        height: 420px;
        box-sizing: border-box;
        background-color: #CBCBCB;
        border-radius: 8px;
        margin: auto;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .15);
        .bg {
            position: absolute;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
            }
        }
        .large-card-content {
            padding: 16px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &.like {
                transform: rotate(3deg);
                transform-origin: 95% 90%;
            }
            &.show {
                z-index: 1;
            }
            .top {
                display: flex;
                align-content: center;
                justify-content: space-between;
                .button {
                    display: inline-block;
                    padding: 0 20px;
                    height: 36px;
                    box-sizing: border-box;
                    line-height: 36px;
                    text-align: center;
                    border-radius: 4px;
                    font-size: 14px;
                    border: 1px solid #1BBE0A;
                    color: #1BBE0A;
                    transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
                    &.active {
                        color: #FFFFFF;
                        background-color: #1BBE0A;
                    }
                }
                .love {
                    color: rgba(255, 0, 0, 0.726);
                }
            }
            .bottom {
                z-index: 1;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(255, 255, 255, .8);
                    z-index: -1;
                    border-radius: 4px;
                    box-shadow: 0 4px 10px 0 rgba(197, 197, 197, .8);
                }
                .title{
                    padding: 5px 10px;
                    font-size: 20px;
                    color: #000;
                }
                .sub-title {
                    padding: 5px 10px;
                    font-size: 14px;
                    color: #000;
                }
            }
            .bg {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    object-fit: cover;
                }
            }
        }
    }
</style>