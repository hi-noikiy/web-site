<template>
  <div class="page" id="page">
    <nav class="navbar navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <img src="../img/MatrixDao.png" alt="" />
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a @click="App">App</a></li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>

    <div class="home_page1 container-fluid">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 wow MatrixETFText bounceInDown"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            MatrixETF
          </div>
          <div
            class="col-xs-12 wow EnabledText bounceIn"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            The Next Generation of ETF, Cross Chain Enabled
          </div>
        </div>
        <div
          class="row wow EnabledText bounceInLeft"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <div class="col-xs-8 col-sm-3 col-md-2 col-lg-2">
            <div class="launch" @click="App">Launch APP</div>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 more">
            Read More
            <span>></span>
          </div>
        </div>
      </div>
    </div>

    <div class="home_page2 container-fluid">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 MatrixETF_ wow bounceInLeft"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            What's MatrixETF？
          </div>
        </div>
        <div class="row">
          <div
            class="col-xs-12 growthText wow flipInX"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            MatrixETF conceives a financial world in which the acquisition of wealth is a passive and automated process. Anyone can make fortune through the Internet regardless of geography and infrastructure, and obtain an open and transparent investment portfolio and various investment strategies to quickily and easily participate in DeFi finance so as to obtain income and incentives, and jointly determine the direction of development through DAO community. <br>
            The future belongs to every MatrixETF participant.
          </div>
        </div>
        <div class="row page2_imgBox">
          <div class="col-xs-12 col-sm-5 col-md-3 col-lg-3">
            <img
              class="wow lightSpeedIn"
              data-wow-offset="10"
              data-wow-iteration="1"
              src="../img/user.png"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-sm-7 col-md-5 col-lg-5">
            <img
              class="wow lightSpeedIn"
              data-wow-offset="20"
              data-wow-iteration="1"
              src="../img/etf.png"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <img
              class="wow lightSpeedIn"
              data-wow-offset="30"
              data-wow-iteration="1"
              src="../img/Diversified.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="home_page3 container-fluid">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 page3_title wow bounceInLeft"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            MatrixETF Features
          </div>
        </div>
        <div
          class="row marginTop text-center wow fadeInRightBig"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon_1.png" alt="" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon4.png" alt="" />
          </div>
        </div>
        <div
          class="row marginTop text-center wow fadeInRightBig"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon2.png" alt="" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon5.png" alt="" />
          </div>
        </div>
        <div
          class="row marginTop text-center wow fadeInRightBig"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon3.png" alt="" />
          </div>
          <div class="col-xs-12 col-md-6 col-lg-6">
            <img src="../img/icon6.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="home_page4 col-xs-12 container-fluid">
      <div class="container">
        <div
          class="row wow bounceIn"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <p class="page4_title">MatrixETF Fund</p>

            <p class="growthText_">
              MatrixETF will Launch Several ETFsdesigned to <br />
              track the performance of high-quality tokens in <br />
              the blockchain and DeFi industry.
            </p>
          </div>
          <div
            class="col-xs-12 col-sm-12 col-md-7 col-lg-7 wow rollIn"
            data-wow-offset="10"
            data-wow-iteration="1"
          >
            <img src="../img/etf1.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="home_page5 container-fluid">
      <div class="container">
        <div
          class="row wow rotateInDownLeft"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <p class="col-lg-12 featuresText">
            MDF is a governance token for the MatrixETF community that includes,
            <br />
            but is not limited to, the following features
          </p>
        </div>
        <div
          class="row wow bounceInLeft text-center"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <img src="../img/bg_41.png" alt="" />
        </div>

        <div
          class="row wow rotateInDownRight"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <p class="followsText">
            The max supply of MDF is 1,000,000,000 <br />
            and will be distributed as follows
          </p>
        </div>
        <div
          class="row wow fadeInUpBig text-center"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <img src="../img/bingtu.png" alt="" />
        </div>
      </div>
    </div>

    <div class="home_page7 container-fluid">
      <div class="container">
        <div
          class="row wow slideInDown"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <p class="partners">Investors & Partners</p>
        </div>

        <div class="Partners_ row">
          <div class="empty_ hidden-xs"></div>
          <div class="empty_ hidden-xs"></div>
          <div class="empty_ hidden-xs"></div>
          <div class="empty_"></div>
          <div class="empty_"></div>
        </div>
      </div>

      <div class="beta">Join Us</div>
      <div class="nowText">
        Our product is about to go into beta, and would you want to be involved in product testing as a creator or ambassador? Apply now!
      </div>
      <div class="APPLYBox">
        <div class="APPLY">
          APPLY NOW
        </div>
      </div>
    </div>

    <div class="home_page8 container-fluid hidden-xs">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="list_1 col-sm-3">
          <img src="../img/MatrixDao.png" alt="" />
          <div class="time">©2020 MatrixETF</div>
        </div>
        <div class="list_2 col-sm-2">
          <div class="ed">Resources</div>
          <div>Whitelist</div>
          <div>Docs</div>
          <div>Brand suite</div>
          <div>Privacy Policy</div>
        </div>
        <div class="list_2 col-sm-2">
          <div class="ed">Token</div>
          <div>MDF</div>
          <div>Token contract address</div>
          <div>Token market value link</div>
        </div>
        <div class="list_4 col-sm-4">
          <div class="contact ed">Contact Us</div>
          <div class="bottomImg">
            <div>
              <a href="https://twitter.com/MatrixETF" target="_blank">
                <img src="../img/twitter.png" alt="" />
              </a>
            </div>
            <div>
              <a href="https://medium.com/@MatrixETF" target="_blank">
                <img src="../img/medium.png" alt="" />
              </a>
            </div>
            <div>
              <a href="https://t.me/MatrixETF" target="_blank">
                <img src="../img/telegram.png" alt="" />
              </a>
            </div>
            <div>
              <a href="https://github.com/MatrixETF" target="_blank">
                <img src="../img/github.png" alt="" />
              </a>
            </div>
          </div>
          <div class="newsletter ed">Subscribe to newsletter</div>
          <div class="inputBox">
            <input class="input_" type="text" placeholder="Email Address" />
          </div>
          <div class="subscribe">subscribe</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
import "@/css/animate.min.css";

export default {
  name: "home",
  data() {
    return {
      show: ""
    };
  },
  methods: {
    App() {
      this.$router.push({ path: "/ETFs" });
    }
  },
  mounted() {
    const wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      scrollContainer: null
    });
    wow.init();
  }
};
</script>

<style scoped>
/* eslint-disable */
@import "../css/animate.min.css";
.wow {
  visibility: hidden;
}
.hide {
  display: none;
}
.top30 {
  top: 30px;
}
.marginLeft70 {
  margin-left: 70px;
}
.marginRight {
  margin-right: 70px;
}
.marginTop {
  /* margin-top: 60px; */
}
.page {
  width: 100%;
  overflow: auto;
}
.page > div {
  overflow-x: hidden;
}
.page .navbar {
  height: 78px;
  padding-top: 28px;
}
.page .navbar-nav > li {
  margin-left: 41px;
}
.page .navbar-brand {
  padding: 0px 15px;
}
.nav > li > a:focus,
.nav > li > a:hover {
  background-color: transparent;
}
/* .homeBox{
		width: 100%;
		height:100%;	
	} */
a {
  text-decoration: none;
}
.row {
  width: 100%;
  position: relative;
}
.title_top {
  height: 78px;
}
.log {
  position: absolute;
  top: 30px;
  left: 16%;
}
.rightMenu {
  position: absolute;
  top: 41px;
  right: 16%;
}
.rightMenu ul li {
  /* font-size: 0.3rem; */
  float: left;
  margin-left: 41px;
}

.home_page1 {
  width: 100%;
  height: 100vh;
  /* background: url(../img/bg.png)no-repeat; */
  background: url(../img/donghua.gif) no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
}
.MatrixETFTextBox {
  position: relative;
}
.MatrixETFText {
  /* width: 800px;
		margin-left: 16%; */

  font-size: 80px;
  font-family: Montserrat-Bold, Montserrat;
  font-weight: bold;
  color: #ffffff;
  line-height: 97px;
  letter-spacing: 3px;
}

.EnabledText {
  margin-top: 30px;
  font-size: 32px;
  font-family: Montserrat-Regular, Montserrat;
  font-weight: 400;
  color: #ffffff;
  line-height: 39px;
}
@media (max-width: 768px) {
  .MatrixETFText {
    font-size: 60px;
  }
  .EnabledText {
    margin-top: 15px;
    font-size: 30px;
  }
}

.launchBox {
  width: 800px;
  margin-left: 16%;
}
.floatLeft {
  float: left;
}
.floatRight {
  float: right;
}
.nav li {
  list-style-type: none;
}

a {
  color: #bfbfbf;
}
a:hover {
  text-decoration: none;
  cursor: pointer;
  color: #fff;
}
.launch {
  width: 100%;
  /* margin-left: 16%; */
  background: linear-gradient(270deg, #8ace5b 0%, #74c935 100%);
  border-radius: 6px;
  font-size: 20px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.launch:hover {
  background: #65b72c;
}
.more {
  float: left;
  font-size: 20px;
  font-family: Montserrat-Regular, Montserrat;
  font-weight: 400;
  color: #ffffff;
  line-height: 50px;
  cursor: pointer;
}
.more span {
  color: #8ace5b;
}

.home_page2 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(../img/bg3.png) no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
}
.imgMargin {
  margin: 0px 50px;
}
.page2_imgBox {
  margin-top: 20px;
}
.page2_imgBox > div {
}
.page2_imgBox img {
  max-width: 100%;
  height: 250px;
  margin-top: 20px;
}
.empty {
  height: 226px;
}
.MatrixETF_ {
  margin-top: 25px;
  font-size: 60px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 80px;
}
.growthText {
  margin-top: 10px;
  font-size: 18px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #bfbfbf;
  line-height: 30px;
}
.growthText_ {
  margin-top: 20px;
  font-size: 18px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #bfbfbf;
  line-height: 30px;
}

.home_page3 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(../img/bg_yuan.png) no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
}
.marginTop img {
  max-width: 100%;
  margin-top: 60px;
}
.page3ImgBox {
  margin-top: 70px;
}
.empty3 {
  height: 100px;
}
.page3_title {
  text-align: center;
  font-size: 60px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 90px;
}
.home_page4 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(../img/zhanshi.png) no-repeat;
  /* background: url(../img/zhanshi1.png)no-repeat; */
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.home_page4 img {
  max-width: 100%;
}
.page4ImgBox {
  position: absolute;
  right: 10%;
}
.page4_title {
  font-size: 50px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 90px;
}
.empty5 {
  height: 300px;
  overflow-x: hidden;
}
.home_page5 {
  width: 100%;
  min-height: 100vh;
  background: url(../img/bg_4.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.home_page5 img {
  max-width: 100%;
}
.fundText {
  width: 800px;
  margin-left: 16%;
  height: 60px;
  font-size: 60px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 90px;
}

.home_page6 {
  width: 100%;
  height: 150%;
  background: url(../img/bg_4.png) no-repeat;
  background-size: 100% 100%;
  overflow-x: hidden;
}
.empty6 {
  height: 100px;
}
.featuresText {
  margin: 30px 0;
  text-align: center;
  font-size: 24px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 40px;
}
.empty6_2 {
  /* height: 659px; */
  margin: 74px 0px;
  text-align: center;
}
.followsText {
  margin: 30px 0;
  text-align: center;
  font-size: 24px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 40px;
}
.pie {
  margin: 0 auto;
  margin-top: 50px;
  width: 709px;
  height: 413px;
  /* background: url(../img/bingtu.png)no-repeat;
		background-size: 100% 100%; */
}
.home_page7 {
  width: 100%;
  min-height: 100vh;
  background: #121315;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
}
.partners {
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 60px;
}
.Partners_ {
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
}
.Partners_ div {
  width: 180px;
  height: 72px;
  background: #31333a;
}
.beta {
  width: 100%;
  margin-top: 160px;
  text-align: center;
  height: 60px;
  font-size: 40px;
  font-family: SourceHanSansCN-Bold, SourceHanSansCN;
  font-weight: bold;
  color: #ffffff;
  line-height: 60px;
}
.nowText {
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #bfbfbf;
  line-height: 33px;
}
.APPLYBox {
  width: 100%;
  height: 80px;
  text-align: center;
}
.APPLY {
  margin: 0 auto;
  margin-top: 80px;
  width: 280px;
  height: 80px;
  background: linear-gradient(270deg, #8ace5b 0%, #74c935 100%);
  border-radius: 4px;
  font-size: 24px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 80px;
  cursor: pointer;
}
.APPLY:hover {
  background: #65b72c !important;
}
.home_page8 {
  width: 100%;
  height: 325px;
  background: #272a36;
  padding: 60px 0 0 0;
}
.list_1 {
  height: 100%;
}
.list_1 img {
}
.time {
  font-size: 14px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #bfbfbf;
  line-height: 18px;
}
.list_2 {
  height: 100%;
}
.list_2 div {
  margin-bottom: 25px;
  height: 16px;
  font-size: 16px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #bfbfbf;
}
.list_4 {
  height: 100%;
}
.contact {
  font-size: 20px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #bfbfbf;
  line-height: 30px;
}
.bottomImg {
  height: 60px;
  /* text-align: center; */
}
.bottomImg div {
  float: left;
  margin-top: 21px;
  width: 60px;
  height: 60px;
  /* border:1px dashed #fff; */
  margin-right: 25px;
}
.bottomImg div img {
  width: 100%;
  height: 100%;
}
.newsletter {
  /* width: 220px; */
  height: 20px;
  font-size: 20px;
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  font-weight: 400;
  color: #bfbfbf;
  line-height: 30px;
  margin-top: 30px;
}
.inputBox {
  margin-top: 30px;
}
.input_ {
  color: #fff;
  float: left;
  height: 40px;
  border: none;
  background: #1e212c;
  outline: none;
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #bfbfbf;
  margin-left: 10px;
}
.subscribe {
  width: 120px;
  height: 40px;
  background: linear-gradient(270deg, #8ace5b 0%, #74c935 100%);
  text-align: center;
  float: left;
  cursor: pointer;

  font-size: 20px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: #ffffff;
  line-height: 40px;
}

.subscribe:hover {
  background: #65b72c !important;
}

.ed {
  color: #fff !important;
  font-weight: 600 !important;
}
</style>
