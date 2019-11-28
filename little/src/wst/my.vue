<template>
    <div>
      <div id="box">
        <header class="top">
          <img src="img/head.jpg" alt="">
          <p>用户手册</p>
          <input type="button" value="关闭">
        </header>
        <!--    用户手册 关闭按钮    -->
        <div class="center">
          <li><ol>触控界面</ol><ol>常见问题</ol></li>
        </div>

        <!--    触控界面 常见问题     -->
        <div id="write">
          <div class="one">
            <p>基本信息</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="char">
            <a href="#">如何恢复出厂设置?</a><br>
            <a href="#">音箱怎么关机/定时关机？</a>
          </div>
          <!--    基本信息......    -->

          <div class="two">
            <p>网络信息</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chsr">
            <a href="#">音响箱支持哪些网络？</a><br>
            <a href="#">我能给音箱链接多个Wi-Fi吗？</a><br>
            <a href="#">如何给音箱配置网络？</a><br>
            <a href="#">手机在初始化和配置音箱Wi-Fi时，找不到音响怎么办？</a><br>
            <a href="#">配置失败怎么办？</a><br>
            <a href="#">使用中提示连接外网失败怎么办？</a><br>
            <a href="#">音箱网络断开了该怎么办？</a><br>
            <a href="#">播放歌曲卡顿/网络速度慢/音箱频率离线怎么办？</a>
          </div>
          <!--    网络信息......    -->

          <div class="three">
            <p>语音</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chdr">
            <a href="#">很难唤醒怎么办？</a><br>
            <a href="#">老人和小朋友很难唤醒小爱同学？</a><br>
            <a href="#">“小爱同学”以外的唤醒词也能唤醒？</a><br>
            <a href="#">为什么唤醒后小爱指示的角度不对？</a><br>
            <a href="#">总会识别错</a><br>
            <a href="#">总会理解错</a><br>
            <a href="#">语言会的能力少，不满意</a><br>
            <a href="#">放的歌不是我想要的那一首</a><br>
            <a href="#">学被唤醒之后，不能播放音乐或者有声读物怎么办？</a>
          </div>
          <!--        语音......     -->

          <div class="four">
            <p>蓝牙问题</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chfr">
            <a href="#">为什么音箱是默认关闭的？</a><br>
            <a href="#">为什么音箱蓝牙会突然放出声音？</a><br>
            <a href="#">为什么我连不上音箱的蓝牙？</a><br>
            <a href="#">苹果手机连不上音箱</a><br>
            <a href="#">蓝牙播放时会卡顿</a><br>
            <a href="#">蓝牙扫描时无法发现音箱</a><br>
            <a href="#">我发现音箱的蓝牙会自动关闭？</a><br>
            <a href="#">怎么使用蓝牙播放？</a><br>
            <a href="#">怎么让小爱和电脑链接？</a><br>
            <a href="#">我想把音箱蓝牙关掉，该怎么办？</a>
          </div>
          <!--        蓝牙问题......     -->

          <div class="five">
            <p>其他播放方式问题</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chgr">
            <a href="#">怎么使用DLANA播放？</a><br>
            <a href="#">DLNA无法找到音箱</a><br>
            <a href="#">DLNA时播放一首歌就停止了</a><br>
            <a href="#">qplay找不到音箱</a>
          </div>
          <!--        其他播放方式问题......      -->

          <div class="six">
            <p>智能家居控制</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chhr">
            <a href="#">如何绑定/控制智能家居设备？</a><br>
            <a href="#">小爱不能控制我的智能家居</a><br>
            <a href="#">米家授权里，设备不全</a><br>
            <a href="#">授权了，但是还是不能控制</a><br>
            <a href="#">怎么控制小米电视/小米盒子？</a><br>
            <a href="#">如何自定义设备名/如何分别控制同一型号的不同设备？</a><br>
            <a href="#">如何同时控制多个设备？</a><br>
            <a href="#">我有多个小爱音箱，怎么分配它们控制的智能设备？</a><br>
            <a href="#">如何定时控制智能设备？</a>
          </div>
          <!--        智能家居设备......       -->

          <div class="seven">
            <p>APP功能</p>
            <img src="img/gray.jpg" alt="">
          </div>
          <div class="chjr">
            <a href="#">小爱音箱App有哪些用途？</a><br>
            <a href="#">App-首页</a><br>
            <a href="#">App-智能家居</a><br>
            <a href="#">App-技能中心</a><br>
            <a href="#">App-我的</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "my"
    }
</script>

<style scoped>
  *{margin: 0; padding: 0; text-decoration: none;}
  a{color:#666666;}
  html{
    font-size: 100px;
  }
  #box{
    width: 100%;
    height:46rem;
    background: #f4f4f4;

  }
  header{
    width: 100%;
    height: 1rem;
    background: #3b3a42;
    position: relative;
  }
  header img{
    position: absolute;
    top: 14px; left: 30px;
  }
  header p{
    height: 0.3rem;
    line-height:1rem;
    text-align: center;
    font-size: 0.35rem;
    color: white;
  }
  header input{
    width: 0.6rem;
    height: 0.4rem;
    font-size: 0.2rem;
    color:black;
    position: absolute;
    top:30px; right:30px;
  }
  /*用户手册 关闭按钮样式*/
  .center{
    width: 100%;
    height:0.8rem;
    background:#f4f4f4;
    border-bottom:0.05rem #e5e5e5 solid;
  }
  .center li{
    font-size: 0.35rem;
    list-style: none;
  }
  .center ol:nth-child(1){
    height:0.3rem;
    line-height:0.9rem;
    text-align: center;
    margin-right: 5rem;
  }
  .center ol:nth-child(2){
    height:0.3rem;
    line-height:0.25rem;
    text-align: center;
    margin-left: 5rem;
  }
  /*触控界面 常见问题样式*/
  #write{
    width:90%;
    height:45rem;
    background:white;
    margin:0.5rem auto;
    position: relative;
  }
  #write .one{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .one p{
    position: absolute;
    left:0.5rem;
    top:0.3rem;
  }
  #write .one img{
    position: absolute;
    right:0.5rem;
    top:0.3rem;
  }
  #write .char{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*基本信息......*/

  #write .two{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .two p{
    position: absolute;
    left:0.5rem;
    top:3rem;
  }
  #write .two img{
    position: absolute;
    right:0.5rem;
    top:3rem;
  }
  #write .chsr{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*网络信息......*/

  #write .three{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .three p{
    position: absolute;
    left:0.5rem;
    top:9.8rem;
  }
  #write .three img{
    position: absolute;
    right:0.5rem;
    top:9.8rem;
  }
  #write .chdr{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*语音......*/

  #write .four{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .four p{
    position: absolute;
    left:0.5rem;
    top:17.3rem;
  }
  #write .four img{
    position: absolute;
    right:0.5rem;
    top:17.3rem;
  }
  #write .chfr{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*蓝牙问题......*/

  #write .five{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .five p{
    position: absolute;
    left:0.5rem;
    top:25.5rem;
  }
  #write .five img{
    position: absolute;
    right:0.5rem;
    top:25.5rem;
  }
  #write .chgr{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*其他播放方式问题......*/

  #write .six{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .six p{
    position: absolute;
    left:0.5rem;
    top:29.5rem;
  }
  #write .six img{
    position: absolute;
    right:0.5rem;
    top:29.5rem;
  }
  #write .chhr{
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin:0.1rem 0.5rem;
  }
  /*智能家居控制......*/

  #write .seven{
    width:100%;
    height: 1rem;
    border-bottom: #e5e5e5 0.05rem solid;
    font-size: 0.35rem;
  }
  #write .seven p{
    position: absolute;
    left:0.5rem;
    top:37rem;
  }
  #write .seven img{
    position: absolute;
    right:0.5rem;
    top:37rem;
  }
  #write .chjr {
    font-size: 0.3rem;
    line-height: 0.7rem;
    margin: 0.1rem 0.5rem;
  }
</style>
