<template>
	<div class='container-fluid'>
		<div class='home_page1'>
		   	<div class="row title_top ">
		   		<div class="log">
		   			<img src="../img/MatrixDao.png" alt="">
		   		</div>
				<div class="rightMenu">
					<ul class="nav nav-pills navWidth">
						<li role="presentation" class="">
							<a href="#" ><span class='ed'>Home</span></a>
						</li>
						<li role="presentation">
							<a href=""><span>Docs</span></a>
						</li>
						<li role="presentation">
							<a href="https://docsend.com/view/ditsqzm7uciumw6a" target="_blank"><span>Whitepaper</span></a>
						</li>
						<li role="presentation">
							<a href=""><span>Blog</span></a>
						</li>
						<li role="presentation">
							<a href=""><span>App</span></a>
							
						</li>
					</ul>
				</div>
		   	</div>
			<div class='row'>
				<div class="MatrixETFText animated bounceInDown">MatrixETF</div>
				<div class="col-md-8 EnabledText animated bounceIn">The Next Generation of ETF, Cross Chain Enabled</div>
				
				<div class="col-md-8 EnabledText animated bounceInLeft">
					<div class='launch'>
						Launch APP
					</div>
					<div class='more'>
						Read More
						<span>></span>
					</div>
				</div>
				
			</div>
		</div>
		
		<div class='home_page2'>
			<div :class='show'>
				<div :class='MatrixETF_'>What's MatrixETF？</div>
				<div :class='growthText'>
					MatrixETF is building a Decentralized, automated, personalized, and diversified investment <br>
					portfolio for you to easily achieve long-term and stable wealth growth.
				</div>
				<div class='row page2_imgBox'>
					<div :class="page2_imgBox_">
						<img src="../img/user.png" alt="">
						<img class='imgMargin' src="../img/etf.png" alt="">
						<img src="../img/Diversified.png" alt="">
					</div>
				</div>
			</div>
			
			
		</div>
		
		<div class='home_page3'>
			<div class='empty3'></div>
			<div :class="page3_title">
				MatrixETF Features
			</div>
			<div class='row'>
				<div :class="page3ImgBox">
					<div class='marginTop'>
						<img class='marginRight' src="../img/icon_1.png" alt="">
						<img  src="../img/icon4.png" alt="">
					</div>
					<div class='marginTop'>
						<img class='marginRight' src="../img/icon2.png" alt="">
						<img  src="../img/icon5.png" alt="">
					</div>
					
					<div class='marginTop'>
						<img class='marginRight' src="../img/icon3.png" alt="">
						<img  src="../img/icon6.png" alt="">
					</div>
					
				</div>
				
			</div>
		</div>
		
		
		
		<div class='home_page4'>
			<div class='empty4'></div>
			
			<div :class="page4_title">
				MatrixETF Fund
			</div>
			<div :class='growthText_'>
				MatrixETF will Launch Several ETFsdesigned to <br>
				track the performance of high-quality tokens in <br>
				the blockchain and DeFi industry.
			</div>
			<div :class='page4ImgBox'>
				<img src="../img/etf1.png" alt="">
			</div>
			
		</div>
		
		<div class='home_page5'>
			<div class='empty6'></div>
			<div :class='featuresText'>
				MDF is a governance token for the MatrixETF community that includes, <br>
				but is not limited to, the following features
			</div>
			<div :class='empty6_2'>
				<img src="../img/bg_41.png" alt="">
			</div>
			<div :class='followsText_'>
				The max supply of MDF is 1,000,000,000 <br>
				and will be distributed as follows
				
			</div>
			<div :class='pie'>
				<img src="../img/bingtu.png" alt="">
			</div>
		</div>
		
		<div class='home_page7'>
			<div class='empty6'></div>
			<div :class='partners'>Investors & Partners</div>
			<div class='Partners_'>
				<div class='empty_' style="margin-left: 18%;"></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
			</div>
			<div :class='beta'>Join Our Public Beta</div>
			<div :class='nowText'>
				Interested in joining our public beta Waiting list？ Apply as a Creator or Ambassador to our first APP now!
			</div>
			<div class='APPLYBox'>
				<div class='APPLY'>
					APPLY NOW
				</div>
			</div>
		</div>
		
		
		<div class='home_page8'>
					<div class='list_1'>
						<img src="../img/MatrixDao.png" alt="">
						<div class='time'>©2020 MatrixETF</div>
					</div>
					<div class='list_2'>
						<div class='ed' style='margin-top: 60px;'>Resources</div>
						<div>Whitelist</div>
						<div>Docs</div>
						<div>Brand suite</div>
						<div>Privacy Policy</div>
					</div>
					
					<div class='list_2'>
						<div class='ed' style='margin-top: 60px;'>Token</div>
						<div>MDF</div>
						<div>Token contract address</div>
						<div>Token market value link</div>
						
					</div>
					<div class='list_4'>
						<div class='contact ed'>Contact Us</div>
						<div class='bottomImg'>
							<div>
								<a href="https://twitter.com/MatrixETF" target="_blank">
									<img  src="../img/twitter.png" alt="">
								</a>
							</div>
							<div >
								<a href="https://medium.com/@MatrixETF" target="_blank">
									<img  src="../img/medium.png" alt="">
								</a>
							</div>
							<div>
								<a href="https://t.me/MatrixETF" target="_blank">
									<img  src="../img/telegram.png" alt="">
								</a>
							</div>
							<div>
								<a href="https://github.com/MatrixETF" target="_blank">
									<img  src="../img/github.png" alt="">
								</a>
								
							</div>
							
						</div>
						<div class='newsletter ed'>Subscribe to newsletter</div>
						<div class='inputBox'>
							<input class='input_' type="text" placeholder="Email Address">
							
						</div>
						<div class='subscribe'>subscribe</div>
					</div>
		</div>
	</div>
</template>
<script>
import '@/css/animate.min.css'
export default {
	name: 'home',
	data() {
		return {
			MatrixETF_:'hide',
			page2_imgBox_:'hide',
			growthText:'hide',
			page3_title:'hide',
			page3ImgBox:'hide',
			page4_title:'hide',
			page4ImgBox:'hide',
			fundText:'hide',
			growthText_:'hide',
			featuresText:'hide',
			followsText:'hide',
			followsText_:'hide',
			partners:'hide',
			beta:'hide',
			nowText:'hide',
			empty6_2:'hide',
			pie:'hide',
			show:'',
			
			contentStyleObj:{
				height: "",
			}
		}
	},
	methods: {
		scrollHandle(e){
			
			let top = e.srcElement.scrollingElement.scrollTop;
			console.log(top);
			if(top>500){
				this.MatrixETF_ = 'MatrixETF_ animated bounceInLeft'
				this.growthText = 'growthText animated flipInX'
				this.page2_imgBox_ = 'col-md-12 animated lightSpeedIn'
				
			}
			
			if(top>1800){
				this.page3_title = 'page3_title animated bounceInLeft'
				this.page3ImgBox = 'page3ImgBox animated fadeInRightBig'
			}
			
			
			
			if(top>2800){
				this.page4_title = 'page4_title animated bounceIn'
				this.growthText_ = 'growthText_ animated bounceInLeft'
				this.page4ImgBox = 'page4ImgBox animated rollIn'
			}
			
			if(top>4300){
				this.pie = 'pie animated fadeInUpBig'
				
			}
			
			// if(top>2700){
			// 	this.fundText = 'fundText animated bounceInLeft'
				
			// }
			if(top>3700){
				this.featuresText = 'featuresText animated rotateInDownLeft'
				this.empty6_2 = 'empty6_2 animated bounceInLeft'
			}
			if(top>4100){
				this.followsText_ = 'followsText animated rotateInDownRight'
			}
			if(top>4855){
				this.partners = 'partners animated slideInDown'
			}
			if(top>5255){
				this.beta = 'beta animated slideInDown'
			}
			if(top>5255){
				this.nowText = 'nowText animated slideInLeft'
			}
			
			
		}
	},
	mounted(){
		window.addEventListener('scroll',this.scrollHandle)
	}
}
</script>

<style scoped>
	/* eslint-disable */
	@import '../css/animate.min.css';
	.hide{
		display: none;
	}
	.top30{
		 top:30px;
	}
	.marginLeft70{
		margin-left: 70px;
	}
	.marginRight{
		margin-right: 70px;
	}
	.marginTop{
		/* margin-top: 60px; */
	}
	.container-fluid{
		padding: 0px;
		width: 100%;
		height:100%;
	}
	.nav>li>a:focus, .nav>li>a:hover{
		background-color:transparent;
	}
	/* .homeBox{
		width: 100%;
		height:100%;	
	} */
	a{ text-decoration:none} 
	.row{
		width: 100%;
		position: relative;
	}
	.title_top{
		height: 78px;
		
	}
	.log{
		position: absolute;
		top: 30px;
		left:16%;
	}
	.rightMenu{
		position: absolute;
		top: 41px;
		right: 16%;
		
	}
	.rightMenu ul li{
		/* font-size: 0.3rem; */
		float: left;
		margin-left: 41px;
	}
	
	.home_page1{
		width: 100%;
		height:100%;
		/* background: url(../img/bg.png)no-repeat; */
		background: url(../img/donghua.gif)no-repeat;
		background-size: 100% 100%;
	}
	.MatrixETFTextBox{
		position: relative;
		
	}
	.MatrixETFText{
		/* width: 800px;
		margin-left: 16%; */
		
		margin-left: 16%;
		margin-top: 200px;
		height: 97px;
		font-size: 80px;
		font-family: Montserrat-Bold, Montserrat;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 97px;
		letter-spacing: 3px;
		
	}
	
	.launchBox{
		width: 800px;
		margin-left: 16%;
	}
	.EnabledText{
		
		margin-left: 16%;
		margin-top: 30px;
		height: 39px;
		font-size: 32px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 39px;
	}
	.floatLeft{
		float: left;
	}
	.floatRight{
		float: right;
	}
	.nav li{
		list-style-type:none
	}
	
	a{
		color: #BFBFBF;
	}
	a:hover {
		text-decoration: none;
		cursor:pointer;
		color: #fff;
	}
	.launch{
		float: left;
		/* margin-left: 16%; */
		margin-top: 30px;
		width: 170px;
		height: 50px;
		background: linear-gradient(270deg, #8ACE5B 0%, #74C935 100%);
		border-radius: 6px;
		font-size: 20px;
		font-family: SourceHanSansCN-Bold, SourceHanSansCN;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
	}
	.launch:hover{
		background:#65B72C;
	}
	.more{
		float: left;
		margin-top: 30px;
		height: 50px;
		font-size: 20px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 50px;
		margin-left: 40px;
		cursor: pointer;
	}
	.more span{
		color: #8ACE5B;
	}
	
	
	.home_page2{
		position: relative;
		width: 100%;
		height:100%;
		background: url(../img/bg3.png)no-repeat;
		background-size: 100% 100%;
		overflow-x:hidden;
	}
	.imgMargin{
		margin: 0px 50px;
	}
	.page2_imgBox{
		position: absolute;
		padding-left:16%;
		top: 43%;
	}
	.empty{
		height: 226px;
	}
	.MatrixETF_Box{
		position: absolute;
		width: 100%;
		height: 700px;
	}
	.MatrixETF_BoxText{
		height: 200px;
	}
	.MatrixETF_{
		position: absolute;
		top: 23%;
		left: 16%;
		height: 80px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 80px;
	}
	.growthText{
		position: absolute;
		left: 16%;
		top:34%;
		height: 60px;
		font-size: 18px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #BFBFBF;
		line-height: 30px;
	}
	.growthText_{
		position: absolute;
		left: 16%;
		top:44%;
		height: 60px;
		font-size: 18px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #BFBFBF;
		line-height: 30px;
	}
	
	.home_page3{
		position: relative;
		width: 100%;
		height:100%;
		background: url(../img/bg_yuan.png)no-repeat;
		background-size: 100% 100%;
		overflow-x:hidden;
	}
	.marginTop img{
		margin-top: 60px;
	}
	.page3ImgBox{
		padding-left: 16%;
		margin-top: 100px;
	}
	.empty3{
		height: 100px;
	}
	.page3_title{
		width: 80%;
		margin-left: 10%;
		text-align: center;
		height: 60px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 90px;
	}
	.home_page4{
		position: relative;
		width: 100%;
		height:100%;
		background: url(../img/zhanshi.png)no-repeat;
		/* background: url(../img/zhanshi1.png)no-repeat; */
		background-size: 100% 100%;
		overflow-x:hidden;
	}
	.empty4{
		height: 91px;
	}
	.page4ImgBox{
		position: absolute;
		right: 10%;
	}
	.page4_title{
		position: relative;
		left: 16%;
		top: 21%;
		
		height: 60px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 90px;
	}
	.empty5{
		height: 300px;
		overflow-x:hidden;
	}
	.home_page5{
		width: 100%;
		height:150%;
		background: url(../img/bg_4.png)no-repeat;
		background-size: 100% 100%;
		overflow-x:hidden;
	}
	.fundText{
		width: 800px;
		margin-left: 16%;
		height: 60px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 90px;
	}
	
	.home_page6{
		width: 100%;
		height:150%;
		background: url(../img/bg_4.png)no-repeat;
		background-size: 100% 100%;
		overflow-x:hidden;
	}
	.empty6{
		height: 100px;
	}
	.featuresText{
		width: 100%;
		text-align: center;
		height: 80px;
		font-size: 24px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 40px;
	}
	.empty6_2{
		/* height: 659px; */
		margin: 74px 0px;
		text-align: center;
	}
	.followsText{
		margin-left: 10%;
		width: 80%;
		text-align: center;
		height: 80px;
		font-size: 24px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 40px;
	}
	.pie{
		
		margin: 0 auto;
		margin-top: 50px;
		width: 709px;
		height:413px;
		/* background: url(../img/bingtu.png)no-repeat;
		background-size: 100% 100%; */
	}
	.home_page7{
		width: 100%;
		height: 100%;
		background: #121315;
	}
	.partners{
		width: 100%;
		text-align: center;
		height: 60px;
		font-size: 40px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 60px;
	}
	.Partners_{
		margin-top: 100px;
		width: 100%;
		height: 72px;
		text-align: center;
	}
	.Partners_ div{
		float: left;
		width: 180px;
		height: 72px;
		background: #31333A;
		margin-left: 74px;
	}
	.beta{
		width: 100%;
		margin-top: 160px;
		text-align: center;
		height: 60px;
		font-size: 40px;
		font-family: SourceHanSansCN-Bold, SourceHanSansCN;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 60px;
	}
	.nowText{
		margin-top: 40px;
		width: 100%;
		text-align: center;
		font-size: 18px;
		font-family: SourceHanSansCN-Regular, SourceHanSansCN;
		font-weight: 400;
		color: #BFBFBF;
		line-height: 33px;
	}
	.APPLYBox{
		width: 100%;
		height:80px;
		text-align: center;
	}
	.APPLY{
		margin: 0 auto;
		margin-top: 80px;
		width: 280px;
		height: 80px;
		background: linear-gradient(270deg, #8ACE5B 0%, #74C935 100%);
		border-radius: 4px;
		font-size: 24px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 80px;
		cursor: pointer;
	}
	.APPLY:hover{
		background: #65B72C!important;
	}
	.home_page8{
		width: 100%;
		height: 325px;
		background: #272A36;
	}
	.list_1{
		float: left;
		width: 36%;
		height: 100%;
		
	}
	.list_1 img{
		margin-left: 157px;
		margin-top: 60px;
	}
	.time{
		margin-left: 157px;
		height: 12px;
		font-size: 14px;
		font-family: SourceHanSansCN-Regular, SourceHanSansCN;
		font-weight: 400;
		color: #BFBFBF;
		line-height: 18px;
	}
	.list_2{
		float: left;
		width: 15%;
		height: 100%;
	}
	.list_2 div{
		margin-top: 25px;
		height: 16px;
		font-size: 16px;
		font-family: SourceHanSansCN-Regular, SourceHanSansCN;
		font-weight: 400;
		color: #BFBFBF;
	}
	.list_4{
		float: left;
		width: 34%;
		height: 100%;
	}
	.contact{
		margin-top: 60px;
	
		height: 20px;
		font-size: 20px;
		font-family: SourceHanSansCN-Regular, SourceHanSansCN;
		font-weight: 400;
		color: #BFBFBF;
		line-height: 30px;
	}
	.bottomImg{
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
	.bottomImg div img{
		width: 100%;
		height: 100%;
		
	}
	.newsletter{
		/* width: 220px; */
		height: 20px;
		font-size: 20px;
		font-family: SourceHanSansCN-Regular, SourceHanSansCN;
		font-weight: 400;
		color: #BFBFBF;
		line-height: 30px;
		margin-top: 30px;
	}
	.inputBox{
		margin-top: 30px;
		
	}
	.input_{
		color: #fff;
		float: left;
		height: 40px;
		border: none;
		background: #1E212C;
		outline:none;
	}
	input::-webkit-input-placeholder { 
	/* WebKit browsers */ 
		color: #BFBFBF; 
		margin-left: 10px;
	} 
	.subscribe{
		width: 120px;
		height: 40px;
		background: linear-gradient(270deg, #8ACE5B 0%, #74C935 100%);
		text-align: center;
		float: left;
		cursor: pointer;
		
		font-size: 20px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 40px;
		
	}
	
	.subscribe:hover{
		background: #65B72C!important;
	}
	
	.ed{
		color: #fff!important;
		font-weight: 600!important;
	}
	
</style>