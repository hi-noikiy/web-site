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
            <li><a href="https://docs.matrixetf.finance/" target="_blank">Docs</a></li>
            <li><a href="https://matrixetf.medium.com/" target="_blank">Blog</a></li>
            <li><a @click="ETF">App</a></li>
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
            <div class="launch" @click="ETF">Launch APP</div>
          </div>
          <div class="col-xs-12 col-sm-9 col-md-10 col-lg-10 more" @click="read">
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
            MatrixETF conceives a financial world in which the acquisition of
            wealth is a passive and automated process. Anyone can make fortune
            through the Internet regardless of geography and infrastructure, and
            obtain an open and transparent investment portfolio and various
            investment strategies to quickily and easily participate in DeFi
            finance so as to obtain income and incentives, and jointly determine
            the direction of development through DAO community. <br />
            The future belongs to every MatrixETF participant.
          </div>
        </div>
        <div class="row page2_imgBox text-center">
          <div class="col-xs-12 col-sm-5 col-md-3 col-lg-3">
            <img
              class="wow lightSpeedIn hidden-xs"
              data-wow-offset="10"
              data-wow-iteration="1"
              src="../img/user.png"
              alt=""
            />
            <img
              class="wow lightSpeedIn visible-xs-inline"
              data-wow-offset="10"
              data-wow-iteration="1"
              src="../img/bg1@2x.png"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-sm-7 col-md-5 col-lg-5">
            <img
              class="wow lightSpeedIn hidden-xs"
              data-wow-offset="20"
              data-wow-iteration="1"
              src="../img/etf.png"
              alt=""
            />
            <img
              class="wow lightSpeedIn visible-xs-inline"
              data-wow-offset="10"
              data-wow-iteration="1"
              src="../img/bg1@2x_.png"
              alt=""
            />
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <img
              class="wow lightSpeedIn hidden-xs"
              data-wow-offset="30"
              data-wow-iteration="1"
              src="../img/Diversified.png"
              alt=""
            />
            <img
              class="wow lightSpeedIn visible-xs-inline"
              data-wow-offset="10"
              data-wow-iteration="1"
              src="../img/bg3@2x.png"
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
          class="row marginTop wow fadeInRightBig"
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
          class="row marginTop wow fadeInRightBig"
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
          class="row marginTop wow fadeInRightBig"
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
     <!-- <div class="container">
         <div
          class="row wow slideInDown top30"
          data-wow-offset="10"
          data-wow-iteration="1"
        >
          <p class="partners">Investors & Partners</p>
        </div>

        <div class="Partners_ row top30">
          <div class="empty_ hidden-xs"></div>
          <div class="empty_ hidden-xs"></div>
          <div class="empty_ hidden-xs"></div>
          <div class="empty_"></div>
          <div class="empty_"></div>
        </div> 
      </div>-->

		<div class="row padding100">
			<p class="partners ">Investors</p>
		</div>
		
		<div class="row top50">
			<div class='col-md-8 col-md-offset-2 text-center  phone'>
				<div class="col-md-3">
					<img src="../img/morningstar-black-clear.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/solana.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/cms.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/spark.png" alt="">
				</div>
				
			</div>
			
			<div class='col-md-8 col-md-offset-2 text-center  top50  phone'>
				<div class="col-md-3">
					<img src="../img/Divergence.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/moon.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/AU21.png" alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/grey.png" alt="">
				</div>
				
			</div>
			
			<div class='col-md-8 col-md-offset-2 text-center  top50  phone'>
				<!-- <div class="col-md-3">
					<img src="../img/GBV.png" alt="">
				</div> -->
				<div class="Partners_ row top30">
						<div class="empty_  GBV"></div>
					
				</div> 
			</div>
			
			<!-- <div class='col-md-8 col-md-offset-2 top50'>
				<div class="Partners_ row top30">
					<div class="empty_ hidden-xs Divergence"></div>
					<div class="empty_ hidden-xs moon"></div>
					<div class="empty_ hidden-xs AU"></div>
					<div class="empty_ hidden-xs grey"></div>
					
				</div> 
			</div>
			<div class='col-md-8 col-md-offset-2 top50'>
				<div class="Partners_ row top30">
						<div class="empty_ hidden-xs GBV"></div>
					
				</div> 
			</div> -->
			
			
		</div>
		<div class="row padding110">
			<p class="partners ">Partners</p>
		</div>
		<div class="row top50">
			<div class='col-md-8 col-md-offset-2 text-center  top50'>
				<!-- <div class="col-md-4 text-left phoneText">
					<img src="../img/mxc.png" alt="">
				</div>
				<div class="col-md-4">
					<img src="../img/okex.png" alt="">
				</div>
				<div class="col-md-4 text-right phoneText">
					<img style='width: 180px;height: 72px;' src="../img/parsiq.png" alt="">
				</div> -->
				<div class="col-md-3">
					<img src="../img/polygon.png" class='imgZise' alt="">
				</div>
				<div class="col-md-3">
					<img src="../img/gate.png" alt="">
						
				</div>
				<div class="col-md-3">
					<img src="../img/mxc.png" alt="">
				
				</div>
				<div class="col-md-3">
						<img src="../img/okex.png" alt="">
					
				</div>
				
			</div>
			<div class='col-md-8 col-md-offset-2 text-center  top50  phone'>
				<div class="col-md-3  col-md-offset-3  top50">
						<img src="../img/chainlink.png" alt="">
				</div>
				<div class="col-md-3 top50">
					<img src="../img/parsiq.png" class='imgZise' alt="">
				</div>
				<!-- <div class="Partners_ row top30">
					<div class="empty_  chainlink "></div>
					
				</div> -->
			</div>
			
		</div>
		
     <div class="beta ">Join Us</div>
      <div class="nowText">
        Our product is about to go into beta, and would you want to be involved
        in product testing as a creator or ambassador? Apply now!
      </div>
      <div class="APPLYBox">
        <div class="APPLY" @click="now">
          APPLY NOW
        </div>
      </div>
    </div>

    <div class="home_page8 container-fluid">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="list_1 col-sm-3 col-xs-12 text-center">
          <img src="../img/MatrixDao.png" alt="" />
          <div class="time">©2021 MatrixETF</div>
        </div>
        <div class="list_2 col-sm-2 hidden-xs">
          <div class="ed">Resources</div>
         <!-- <div>Whitelist</div> -->
          <div><a href="https://docs.matrixetf.finance/" target="_blank">Docs</a> </div>
          
		  <div><a href="https://matrixetf.finance/Disclaimer" target="_blank">Notice and Disclaimer</a> </div>
		 
		  <div><a href="https://drive.google.com/file/d/1UoouQEJ-HEx9kQOTltwwo97bCXemuDHm/view?usp=sharing" target="_blank">Whitepaper</a> </div>
          
		  <div>Brand suite (soon)</div>
		  <!-- <div>Privacy Policy</div> -->
		  
        </div>
        <div class="list_2 col-sm-2 hidden-xs">
          <div class="ed">Token</div>
          <div><a href="https://docs.matrixetf.finance/token-economy/untitled" target="_blank">MDF</a> </div>
          <!-- <div>Token contract address</div>
          <div>Token market value link</div> -->
        </div>
        <div class="list_4 col-sm-4 hidden-xs">
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
		  <div id="mc_embed_signup">
			<form action="https://finance.us1.list-manage.com/subscribe/post?u=cf95d53f7ad6aaec0a68b0854&amp;id=5879f45d58" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div id="mc_embed_signup_scroll">
			
					<div class="mc-field-group">
						<label for="mce-EMAIL" style="height: 10px; width: 100%;"><!-- Email Address  <span class="asterisk">*</span> -->
						</label>
						<input type="email" value="" name="EMAIL" class="required email paddingLeft input_" id="mce-EMAIL" placeholder="E-mail address">
					</div>
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cf95d53f7ad6aaec0a68b0854_5879f45d58" tabindex="-1" value=""></div>
					<div class="clear subscribe"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
				</div>
			</form>
		  </div>
          <!-- <div class="newsletter ed">Subscribe to newsletter</div>
          <div class="inputBox">
            <input class="input_" type="text" placeholder="Email Address" />
          </div>
          <div class="subscribe">subscribe</div> -->
        </div>
      </div>
    </div>
	<Policy class='bottom_Policy' v-if='!policyState'></Policy>
  </div>
</template>
 <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<script>
import { WOW } from "wowjs";
import "@/css/animate.min.css";
import Policy from "@/components/policy";
import Bus from '@/util/bus'
export default {
  name: "home",
  components: {
  	Policy
  },
  data() {
    return {
      show: "",
	  policyState:false
    };
  },
  methods: {
    ETF() {
      //this.$router.push({ path: "/ETFs" });
      window.open("https://app.matrixetf.finance/", "_blank");
    },
	now(){
		 window.open("https://forms.gle/8T53EChmjiNWzgHH7", "_blank");
	},
	read(){
		 window.open("https://docs.matrixetf.finance/", "_blank");
	},
	
	getCookie(name) {
		
	    var prefix = name + "="
	    var start = document.cookie.indexOf(prefix)
		
	    if (start == -1) {
			
	        return null;
	    }
	    var end = document.cookie.indexOf(";", start + prefix.length)
	    if (end == -1) {
	        end = document.cookie.length;
	    }
	 
	    var value = document.cookie.substring(start + prefix.length, end)
		this.policyState = value
	
	    return unescape(value);
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
	var  Policy = 'policy'
	this.getCookie(Policy)
	
	Bus.$on('Policy',val=>{
		this.policyState = val
	})
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
.top50 {
  top: 50px;
}
.top100{
	top:100px;
}
.padding100{
	padding-top: 100px;
	height: 155px;
}
.padding110{
	padding-top: 200px;
	height: 155px;
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
.paddingLeft{
	padding-left: 10px;
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
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
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
  background-size: cover;
  overflow-x: hidden;
}
.empty6 {
  height: 100px;
}
.featuresText {
  margin: 60px 0;
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
		background-size: cover; */
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
.null{
	width: 180px;
	height: 72px;
	background:transparent!important
}
.morningstar{
	background: url(../img/morningstar-black-clear.png)!important;
	background-repeat:no-repeat!important;
	height: 72px;
}
.cms{
	background: url(../img/cms.png)!important;
	background-repeat:no-repeat!important;
	height: 72px;
}
.Divergence{
	background: url(../img/Divergence.png)!important;
	background-repeat:no-repeat!important;
	height: 72px;
}
.spark{
	background: url(../img/spark.png)!important;
	background-repeat:no-repeat!important;
	
}
.GBV{
	background: url(../img/GBV.png)!important;
	
}
.chainlink{
	background: url(../img/chainlink.png)!important;
	
}
.moon{
	background: url(../img/moon.png)!important;
}
.AU{
	background: url(../img/AU21.png)!important;
}
.solana{
	background: url(../img/solana.png)!important;
	background-repeat:no-repeat!important;
	height: 72px;
}
.okex{
	background: url(../img/okex.png)!important;
}
.mxc{
	background: url(../img/mxc.png)!important;
}
.grey{
	background: url(../img/grey.png)!important;
}
/* .parsiq{
	background: url(../img/parsiq.png)!important;
} */
.beta {
  width: 100%;
  margin-top: 278px;
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
  background: #272a36;
  padding: 60px 0 30px 0;
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
.subscribe input{
	background: transparent!important;
	border: 0px!important;
}
.imgZise{
	width: 180px;
	height: 72px;
	
}
.bottom_Policy{
	position: fixed; 
	width: 100%;
	left: 0px; 
	bottom: 0px; 
	z-index: 9999;
}

@media (max-width: 768px){
	.phone{
		top: 0px;
	}
	.phone img{
		margin-top: 20px;
	}
	.phoneText{
		text-align: center;
	}
}
</style>
