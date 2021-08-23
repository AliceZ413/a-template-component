<template>
    <div class="share-card">
        <div class="topbar">
            <div class="topbar-l">
                <img class="avatar" src="@/assets/images/JiaLe.jpg" alt="">
                <span class="username">王珈乐</span>
                <span class="time">5天前</span>
            </div>
            <div class="topbar-r">
                <img class="icon-more" src="@/assets/images/icon-more.png" alt="">
            </div>
        </div>
        <div class="content">
            <!-- <img src="@/assets/images/BeibeiJia1.png" alt="" /> -->
            <swiper
                :pagination="{ 'dynamicBullets': true }"
            >
                <swiper-slide v-for="(pic, index) in picList" :key="'pic_' + index">
                    <img :src="pic" alt="" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="info">
            <div class="info-l">
                <img class="share btn" src="@/assets/images/icon-share.png" alt="">
            </div>
            <div class="info-r">
                <div class="info-r-btn">
                    <img class="share btn" src="@/assets/images/icon-like.png" alt="" @click="handleBeLike">
                    <div>{{ likeNum }}</div>
                </div>
                <div class="info-r-btn">
                    <img class="collect btn" src="@/assets/images/icon-collection.png" alt="">
                    <div>{{ collectNum }}</div>
                </div>
                <div class="info-r-btn">
                    <img class="common btn" src="@/assets/images/icon-pinlun.png" alt="">
                    <div>{{ commonNum }}</div>
                </div>
            </div>
        </div>
        <div class="desc">
            <span class="alert">@乃琳Eileen</span> 这个能转
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.less';
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import { computed } from '@vue/reactivity';
SwiperCore.use([Pagination]);
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        likeNum: {
            type: Number,
            default: 0
        },
        collectNum: {
            type: Number,
            default: 0
        },
        commonNum: {
            type: Number,
            default: 0
        }
    },
    setup(props, ctx) {
        const picList = computed(() => {
            return props.list;
        });
        const likeNum = computed(() => {
            return props.likeNum;
        });
        const collectNum = computed(() => {
            return props.collectNum;
        });
        const commonNum = computed(() => {
            return props.commonNum;
        });
        const handleBeLike = () => {
            ctx.emit('on-like');
        };
        return {
            picList,
            likeNum,
            collectNum,
            commonNum,
            handleBeLike,
        }
    }
}
</script>
 
<style lang = "less" scoped>
    .share-card {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
        .topbar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-content: center;
            .topbar-l {
                height: 30px;
                line-height: 30px;
                display: flex;
                flex: 1;
                .avatar {
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                }
                .username {
                    font-size: 14px;
                    margin-left: 8px;
                }
                .time {
                    font-size: 11px;
                    margin-left: 16px;
                }
            }
            .topbar-r {
                width: 30px;
                height: 30px;
                display: flex;
                .icon-more {
                    margin: auto;
                    width: 20px;
                    height: 20px;
                }
            }
        }
        .content {
            width: 100%;
            margin-top: 6px;
            box-shadow: 0 4px 10px 0 rgba(197, 197, 197, .5);
            margin-bottom: 10px;
            img {
                display: block;
                width: 100%;
                height: 470px;
                object-fit: contain;
            }
        }
        .info {
            width: 100%;
            height: 20px;
            line-height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .info-l {
                display: flex;
                align-items: center;
            }
            .info-r {
                display: inline-block;
                height: 20px;
                line-height: 20px;
                img {
                    margin-left: 15px;
                    display: inline-block;
                    vertical-align: middle;
                }
                .info-r-btn {
                    display: inline-block;
                    vertical-align: middle;
                    div {
                        display: inline-block;
                    vertical-align: middle;
                        margin-left: 4px;
                    }
                }
            }
            .btn {
                width: 20px;
                height: 20px;
            }
        }
        .desc {
            margin-top: 10px;
            font-size: 12px;
            .alert {
                color: #006fff;
            }
        }
    }
</style>