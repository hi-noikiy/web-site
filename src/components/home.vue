<template>
	<div class='homeBox'>
		<div class='home_page1'>
			<div class="row title_top ">
				<div class="log">
					<img src="../img/MatrixDao.png" alt="">
				</div>
				<div class="rightMenu">
					<ul class="nav nav-pills navWidth">
						<li role="presentation" class="">
							<a href="#" ><span class='navEd'>Home</span></a>
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
			
			<div class='MatrixETFText'>
				MatrixETF
			</div>
			<div class='EnabledText'>
				The Next Generation of ETF, Cross Chain Enabled
			</div>
			<div class=''>
				<div class='launch'>
					Launch APP
				</div>
				<div class='more'>
					Read More
					<span>></span>
				</div>
			</div>
		</div>
		<div class='home_page2'>
			<div class='empty'></div>
			<div class='MatrixETF_'>What's MatrixETF？</div>
			<div class='growthText'>
				MatrixETF is building a Decentralized, automated, personalized, and diversified investment <br>
				portfolio for you to easily achieve long-term and stable wealth growth.
			</div>
		</div>
		
		<div class='home_page4'>
			<div class='empty4'></div>
			<div class="page4_title">
				MatrixETF Features
			</div>
		</div>
		
		<div class='home_page5'>
			<div class='empty5'></div>
			<div class='fundText'>MatrixETF Fund</div>
			<div class='growthText'>
				MatrixETF will Launch Several ETFsdesigned to <br>
				track the performance of high-quality tokens in <br>
				the blockchain and DeFi industry.
			</div>
		</div>
		
		<div class='home_page6'>
			<div class='empty6'></div>
			<div class='featuresText'>
				MDF is a governance token for the MatrixETF community that includes, <br>
				but is not limited to, the following features
			</div>
			<div class='empty6_2'></div>
			<div class='followsText'>
				The max supply of MDF is 1,000,000,000 <br>
				and will be distributed as follows
			</div>
			<div class='pie'></div>
		</div>
		
		<div class='home_page7'>
			<div class='empty6'></div>
			<div class='partners'>Investors & Partners</div>
			<div class='Partners_'>
				<div class='empty_' style="margin-left: 18%;"></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
				<div class='empty_'></div>
			</div>
			<div class='beta'>Join Our Public Beta</div>
			<div class='nowText'>
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
				<div style='margin-top: 60px;'>Resources</div>
				<div>Whitelist</div>
				<div>Docs</div>
				<div>Brand suite</div>
				<div>Privacy Policy</div>
			</div>
			
			<div class='list_2'>
				<div style='margin-top: 60px;'>Token</div>
				<div>MDF</div>
				<div>Token contract address</div>
				<div>Token market value link</div>
				
			</div>
			<div class='list_4'>
				<div class='contact'>Contact Us</div>
				<div class='bottomImg'>
					<div>
						<img  src="../img/twitter.png" alt="">
					</div>
					<div style='height: 28px;margin-top: 31px;'>
						<img  src="../img/medium.png" alt="">
					</div>
					<div>
						<img  src="../img/telegram.png" alt="">
					</div>
					<div>
						<img  src="../img/github.png" alt="">
					</div>
					<!-- <a href="https://twitter.com/MatrixDao" >
						<img  src="../img/twitter.png" alt="">
					</a>
					<a href="https://medium.com/@MatrixDao" >
						<img  src="../img/medium.png" alt="">
					</a>
					<a href="#">
						<img  src="../img/telegram.png" alt="">
					</a>
					<a href="https://github.com/MatrixDaoFinance" >
						<img  src="../img/github.png" alt="">
					</a> -->
				</div>
				<div class='newsletter'>Subscribe to newsletter</div>
				<div class='inputBox'>
					<input class='input_' type="text" placeholder="Email Address">
					<div class='subscribe'>subscribe</div>
				</div>
			</div>
			
			
		</div>
	</div>
</template>
<script>

export default {
	name: 'home',
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>
<style scoped>
	.homeBox{
		width: 100%;
		height:100%;	
	}
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
		float: left;
		margin-left: 41px;
	}
	
	.home_page1{
		width: 100%;
		height:100%;
		background: url(../img/bg.png)no-repeat;
		background-size: 100% 100%;
	}
	.MatrixETFText{
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
		margin-left: 16%;
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
	}
	.more span{
		color: #8ACE5B;
	}
	
	
	.home_page2{
		width: 100%;
		height:100%;
		background: url(../img/bg3.png)no-repeat;
		background-size: 100% 100%;
	}
	.empty{
		height: 226px;
	}
	.MatrixETF_{
		margin-left: 16%;
		height: 80px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 80px;
	}
	.growthText{
		margin-left: 16%;
		margin-top: 40px;
		height: 60px;
		font-size: 18px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #BFBFBF;
		line-height: 30px;
	}
	
	.home_page4{
		width: 100%;
		height:100%;
		background: url(../img/bg_yuan1.png)no-repeat;
		background-size: 100% 100%;
	}
	.empty4{
		height: 91px;
	}
	.page4_title{
		width: 100%;
		text-align: center;
		height: 60px;
		font-size: 60px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 90px;
	}
	.empty5{
		height: 300px;
	}
	.home_page5{
		width: 100%;
		height:100%;
		background: url(../img/zhanshi.png)no-repeat;
		background-size: 100% 100%;
	}
	.fundText{
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
		height: 659px;
	}
	.followsText{
		width: 100%;
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
		margin-top: 80px;
		width: 709px;
		height:413px;
		background: url(../img/bingtu.png)no-repeat;
		background-size: 100% 100%;
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
		margin-top: 30px;
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
		width: 50px;
		height: 50px;
		border:1px dashed #fff;
		margin-right: 40px;
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
		margin-top: 23px;
	}
	.inputBox{
		margin-top: 39px;
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
		
		
		font-size: 20px;
		font-family: SourceHanSansCN-Medium, SourceHanSansCN;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 40px;
	}
	
</style>