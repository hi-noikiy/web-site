<template>
	<div class='container-fluid'>
		<div class="row title_top ">
			<div class="log">
				<img src="../img/MatrixDaoblack.png" alt="">
			</div>
			<div class="rightMenu">
				<ul class="nav nav-pills navWidth">
					<li role="presentation" class="">
						<a href="#" ><span class='ed'>ETFs</span></a>
					</li>
					<li role="presentation">
						<a class='ed_'><span>Mswap</span></a>
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
			<div class="col-md-12 symbol_1">
				ETF1_Name_symbol
			</div>
		</div>
		
		<div class='row top20'>
			<div class="col-md-12 symbol_2">
				Buy DeFi blue chips at once: receive rewards, take part in fund management, and the protocols governance
			</div>
		</div>
		
		<div class='row'>
			<div class="col-md-3">
				<div class='totalBox'>
					<img src="../img/value.png" alt="">
				</div>
				
				<div class='supplyBox'>
					<img src="../img/supply.png" alt="">
				</div>
			</div>
			<div class="col-md-6">
				<div class='ETFsSubject'>
					<div class="ETFs_tab">
						<div class="ETFs_tab_title">
							<div :class="{'cur': now === '1'}" @click="now = '1'">Buy</div>
							<div :class="{'cur': now === '2'}" @click="now = '2'">Mint</div>
							<div :class="{'cur': now === '3'}" @click="now = '3'">Swap</div>
							<div :class="{'cur': now === '4'}" @click="now = '4'">Redeem</div>
							<div :class="{'cur': now === '5'}" @click="now = '5'">Info</div>
						</div>
					      
					 </div>
					 
					<div class="ETFs_tab_subject">
					        <div class="bd">
								<div v-show="now === '1'">Buy11111</div>
								<div v-show="now === '2'">Mint11111</div>
								<div v-show="now === '3'">Swap11111</div>
								<div v-show="now === '4'">Redeem1111</div>
								<div v-show="now === '5'">Info1111</div>
					        </div>
					</div>
				</div>
			</div>
			<div class="col-md-3 ">
				<div class='walletBox'>
					<img src="../img/wallet.png" alt="">
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
				now:'1'
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
			
		},
		mounted(){
			this.mask()
		}
	}
</script>

<style scoped>
	
	.container-fluid{
		width: 100%;
		height: 100%;
		padding-left: 15%;
		padding-right: 15%;
		background: #F5F5F8!important;
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
	.symbol_1{
		font-size: 24px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 500;
		color: #121315;
	}
	.symbol_2{
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.totalBox{
		width: 100%;
		height:173px;
		margin-top: 40px;
	}
	.totalBox img{
		width: 100%;
		height: 100%;
	}
	.supplyBox{
		width: 100%;
		height:328px;
		margin-top: 30px;
	}
	.supplyBox img{
		width: 100%;
		height: 100%;
		
	}
	.ETFsSubject{
		width: 100%;
		height: 510px;
		margin-top: 40px;
		background: #FFFFFF;
		border-radius: 12px;
	}
	.walletBox{
		width: 243px;
		height:408px;
		margin-top: 40px;
		
	}
</style>
