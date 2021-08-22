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
            <img src="@/assets/images/BeibeiJia1.png" alt="">
        </div>
        <div class="info">
            <div class="info-l">
                <img class="share btn" src="@/assets/images/icon-share.png" alt="">
            </div>
            <div class="info-r">
                <img class="share btn" src="@/assets/images/icon-like.png" alt="">
                <div>637</div>
                <img class="share btn" src="@/assets/images/icon-collection.png" alt="">
                <div>96</div>
                <img class="share btn" src="@/assets/images/icon-pinlun.png" alt="">
                <div>46</div>
            </div>
        </div>
        <div class="desc">
            <span class="alert">@乃琳Eileen</span> 这个能转
        </div>
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
            img {
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
                display: flex;
                align-items: center;
                img {
                    margin-left: 15px;
                }
                div {
                    margin-left: 5px;
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