<template>
	<div class='container-fluid'>
		<div class="row title_top ">
			<div class="log">
				<img src="../img/MatrixDaoblack.png" alt="">
			</div>
			<div class="rightMenu">
				<ul class="nav nav-pills navWidth">
					<li role="presentation" class="">
						<a href="https://matrixetf.finance/#/"  target="_blank"><span class='ed_'>Home</span></a>
					</li>
					<li role="presentation" class="">
						<a href="#" ><span class='ed'>ETFs</span></a>
					</li>
					<li role="presentation">
						<a class='ash'><span>Mswap</span></a>
					</li>
					<li role="presentation">
						<a class='ash'><span>Farming</span></a>
					</li>
					<li role="presentation">
						<a ><span class='ash'>Pool</span></a>
					</li>
					<li role="presentation" class='left'>
						<div class='overview' @click="mask">
							{{wallet}}
						</div>
						
					</li>
				</ul>
			</div>
		</div>
		<div class='row top56'>
			<div class="col-md-12 risk">
				<div class='riskBox'>
					<img src="../img/alert-octagon.png" alt="">
					<span class='left'>MatrixETF has passed several public security audits. Still, It is experimental software. Please, use it at your own risk.</span>
				</div>
			</div>
		</div>
		
		<div class='row top56'>
			<div class="col-md-12 SmartText">
				Smart DeFi & Concept Indices
			</div>
		</div>
		
		<div class='row top20'>
			<div class="col-md-12 onceText">
				Buy DeFi blue chips at once: receive rewards, take part in fund management, and the protocols governance
			</div>
		</div>
		
		<div class='row top56'>
			<div class="col-md-6 ">
				<div class='ETF1_Name1'>
					<div class='Name1ImgBox'>
						<img src="../img/Image3.png" alt="">
					</div>
					<div class='symbol_1'>
						<div class='symbol_1Text'>
							ETF1_Name_symbol
						</div>
						<div class='address'>
							0x2660……8b699c
							<span class='left'>
								<img src="../img/copy.png" alt="">
							</span>
							<span class='left5'>
								<img src="../img/share.png" alt="">
							</span>
						</div>
						<div class='symbol_1Text_'>
							Market Value:$37,784,7884
						</div>
						<div  class='symbol_1Text_'>
							APY:28%
						</div>
					</div>
					<div class='OverviewBox'>
						<div class='overview' @click="details_ETFs">
							Overview
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-md-6 ">
				<div class='ETF1_Name1'>
					<div class='Name1ImgBox'>
						<img src="../img/yfi.png" alt="">
					</div>
					<div class='symbol_1'>
						<div class='symbol_1Text'>
							ETF1_Name_symbol
						</div>
						<div class='address'>
							0x2660……8b699c
							<span class='left'>
								<img src="../img/copy.png" alt="">
							</span>
							<span class='left5'>
								<img src="../img/share.png" alt="">
							</span>
						</div>
						<div class='symbol_1Text_'>
							Market Value:$37,784,7884
						</div>
						<div  class='symbol_1Text_'>
							APY:28%
						</div>
					</div>
					<div class='OverviewBox'>
						<div class='overview_'>
							Overview
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 top20">
				<div class='ETF1_Name1'>
					<div class='Name1ImgBox'>
						<img src="../img/Image3.png" alt="">
					</div>
					<div class='symbol_1'>
						<div class='symbol_1Text'>
							ETF1_Name_symbol
						</div>
						<div class='address'>
							0x2660……8b699c
							<span class='left'>
								<img src="../img/copy.png" alt="">
							</span>
							<span class='left5'>
								<img src="../img/share.png" alt="">
							</span>
						</div>
						<div class='symbol_1Text_'>
							Market Value:$37,784,7884
						</div>
						<div  class='symbol_1Text_'>
							APY:28%
						</div>
					</div>
					<div class='OverviewBox'>
						<div class='overview_'>
							Overview
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-md-6 top20">
				<div class='ETF1_Name1'>
					<div class='Name1ImgBox'>
						<img src="../img/yfi.png" alt="">
					</div>
					<div class='symbol_1'>
						<div class='symbol_1Text'>
							ETF1_Name_symbol
						</div>
						<div class='address'>
							0x2660……8b699c
							<span class='left'>
								<img src="../img/copy.png" alt="">
							</span>
							<span class='left5'>
								<img src="../img/share.png" alt="">
							</span>
						</div>
						<div class='symbol_1Text_'>
							Market Value:$37,784,7884
						</div>
						<div  class='symbol_1Text_'>
							APY:28%
						</div>
					</div>
					<div class='OverviewBox'>
						<div class='overview_'>
							Overview
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Web3 from 'web3'
	import NCWeb3 from "@/util/web3";
	export default {
		name: 'ETFs',
		data() {
			return {
				wallet:'Connect Wallet',
				addr:'',
			}
		},
		methods: {
			mask(){
				NCWeb3.init(addr=>{
					this.addr = addr
					console.log(addr)
					var disLength = addr.length;
					var str = addr.substring(0,6);
					var str_ = addr.substring(disLength-4,disLength);
					this.wallet = str+'......'+str_
				})
			},
			details_ETFs(){
				this.$router.push({path:'/details_ETFs'})
			}
		},
		mounted(){
			//this.mask()
		}
	}
</script>

<style scoped>
	.container-fluid{
		width: 100%;
		height: 100%;
		padding-left: 15%;
		padding-right: 15%;
	}
	a{ text-decoration:none} 
	.nav>li>a:focus, .nav>li>a:hover{
		background-color:transparent;
	}
	.top56{
		margin-top: 44px;
	}
	.top20{
		margin-top: 20px;
	}
	.title_top{
		margin-top: 30px;
	}
	.log{
		float: left;
	}
	.rightMenu{
		float: right;
	}
	.rightMenu ul li{
		
		font-size: 16px;
		font-family: Montserrat-Bold, Montserrat;
		font-weight: bold;
	}
	.ed{
		color: #74C935;
	}
	.ed_{
		color: #121315;
	}
	.ash{
		color: #BFBFBF;
	}
	.left{
		margin-left: 18px;
	}
	.left5{
		margin-left: 8px;
	}
	.riskBox{
		width: 72%;
		margin: 0 auto;
		border-radius: 23px;
		background-color: rgba(116, 201, 53, 0.07);
	}
	.riskBox span{
		text-align: center;
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #74C935;
	}
	.SmartText{
		text-align: center;
		font-size: 24px;
		font-family: Montserrat-Medium, Montserrat;
		font-weight: 600;
		color: #121315;
	}
	.onceText{
		text-align: center;
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.ETF1_Name1{
		width: 100%;
		height: 300px;
		background: url(../img/ETF1bg.png)no-repeat;
		background-size: 100% 100%;
	}
	.Name1ImgBox{
		float: left;
		width: 85px;
		height: 85px;
		margin-left: 38px;
		margin-top: 50px;
	}
	.symbol_1{
		float: left;
		margin-left: 20px;
	}
	.symbol_1Text{
		font-size: 20px;
		font-family: Montserrat-Bold, Montserrat;
		font-weight: bold;
		color: #121315;
		margin-top: 30px;
	}
	.symbol_1Text_{
		font-size: 14px;
		font-family: Montserrat-Bold, Montserrat;
		font-weight: bold;
		color: #121315;
		margin-top: 10px;
	}
	.address{
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
		margin-top: 10px;
	}
	.OverviewBox{
		float: right;
		margin-right: 40px;
		margin-top: 60px;
	}
	.overview{
		width: 150px;
		height: 40px;
		background: #74C935;
		box-shadow: 0px 4px 8px 0px rgba(116, 201, 53, 0.32);
		border-radius: 8px;
		color: #fff;
		text-align:center;
		line-height: 40px;
		cursor:pointer;
	}
	.overview:hover {
		background: #65B72C;
	}
	.overview_{
		width: 150px;
		height: 40px;
		
		
		border-radius: 8px;
		color: #fff;
		text-align:center;
		line-height: 40px;
		cursor:pointer;
		background: #BFBFBF;
	}
</style>
