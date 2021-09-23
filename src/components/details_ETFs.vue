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
							<div :class="{'cur': now === '1'}" @click="now = '1'">
								Buy
								<div v-show="now === '1'" class="choose">
									<img src="../img/choose.png" alt="">
								</div>
								
							</div>
							<div :class="{'cur': now === '2'}" @click="now = '2'">
								Mint
								<div v-show="now === '2'" class="choose">
									<img src="../img/choose.png" alt="">
								</div>
							</div>
							<div :class="{'cur': now === '3'}" @click="now = '3'">
								Swap
								<div v-show="now === '3'" class="choose">
									<img src="../img/choose.png" alt="">
								</div>
							</div>
							<div :class="{'cur': now === '4'}" @click="now = '4'">
								Redeem
								<div v-show="now === '4'" class="choose">
									<img src="../img/choose.png" alt="">
								</div>
							</div>
							<div :class="{'cur': now === '5'}" @click="now = '5'">
								Info
								<div v-show="now === '5'" class="choose">
									<img src="../img/choose.png" alt="">
								</div>
							</div>
						</div>
					      
					 </div>
					 
					<div class="ETFs_tab_subject">
						<div class="bd">
							<div v-show="now === '1'">
								<!-- <div class="col-md-12">
									<div class='shareText'>
										Add liquidity in one of the underlying pool tokens. Tokens will be sent to <br>
										the pool, and you will receive the PIPT as a share.
									</div>
								</div> -->
								
								<div class="col-md-4">
									<div class='amountText'>
									  Enter amount
									</div>
								  
								</div>
								<div class="col-md-5 col-md-offset-3">
									<div class='slippageBox'>
										<span class='slippageText'>Slippage</span>
										<span class='slippageNum'>
											0.05%
										</span>
										<span>
											<img src="../img/edit.png" alt="">
										</span>
										
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" placeholder="Enter amount">
										<span class='downBox'>
											<img src="../img/down.png" alt="">
										</span>
										<span class='currency'>
											ETH
										</span>
										<span class='currencyIco'>
											<img src="../img/eth.png" alt="">
										</span>
										
										<span class='MAXBox'>
											MAX
										</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class='dollarNum'>
										$...
									</div>
								</div>
								
								<div class="col-md-6">
									<div class='resultsText'>
										1 ETH = $
									</div>
								</div>
								<div class="col-md-12">
									<div class='PIPTTextTitle'>TDE amount</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="amountNum">
										<span class='PIPTText'>
											TDE
										</span>
										<span class='piptBox'>
											<img src="../img/pipt.png" alt="">
										</span>
									</div>
								</div>
								
								<div class="col-md-6">
									<div class='dollarNum'>
										$...
									</div>
								</div>
								
								<div class="col-md-6">
									<div class='resultsText'>
										1 TDE = $
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='poolText'>
										0.1% enter fee or 0 TDE will be transfered to community pool
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='WalletBuy'>
										Connect Wallet
									</div>
								</div>
							</div>
							<div v-show="now === '2'">
								<div class="col-md-12">
									<div class='shareText'>
										Add liquidity in one of the underlying pool tokens. Tokens will be sent to <br>
										the pool, and you will receive the TDE as a share.
									</div>
								</div>
								<div class="col-md-12">
									<div class='PIPTTextTitle'>TDE amount</div>
								</div>
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="AAVE">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/AAVE.png" alt="">
											</span>
											AAVE
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="YFI">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/YFI1.png" alt="">
											</span>
											YFI
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="SNX">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/SNX.png" alt="">
											</span>
											SNX
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="CVP">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/CVP.png" alt="">
											</span>
											CVP
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="COMP">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/COMP.png" alt="">
											</span>
											COMP
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="wNXM">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/wNXM.png" alt="">
											</span>
											wNXM
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="MKR">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/MKR.png" alt="">
											</span>
											MKR
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" v-model="UNI">
										
										<span class='currencyName'>
											<span class='currencyList'>
												<img src="../img/UNI.png" alt="">
											</span>
											UNI
										</span>
										
										
										<span class='Infinity'>
											Infinity Approve
										</span>
										
										<span class='Approve'>
											Approve
										</span>
										
										<span class='MAXBox currencyMAX'>
											MAX
										</span>
									</div>
								</div>
								
								<div class="col-md-4 top20">
									<div class='amountText'>
									  Enter amount
									</div>
								  
								</div>
								<div class="col-md-5 col-md-offset-3 top20">
									<div class='slippageBox'>
										<span class='slippageText'>Slippage</span>
										<span class='slippageNum'>
											0.05%
										</span>
										<span>
											<img src="../img/edit.png" alt="">
										</span>
										
									</div>
								</div>
								<div class="col-md-12">
									<div class='inputBox'>
										<input type="text" placeholder="Enter amount">
										<span class='downBox'>
											<img src="../img/down.png" alt="">
										</span>
										<span class='currency'>
											ETH
										</span>
										<span class='currencyIco'>
											<img src="../img/eth.png" alt="">
										</span>
										
										<span class='MAXBox'>
											MAX
										</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class='dollarNum'>
										$...
									</div>
								</div>
								
								<div class="col-md-6">
									<div class='resultsText'>
										1 ETH = $
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='poolText'>
										0.1% enter fee or 0 TDE will be transfered to community pool
									</div>
								</div>
								
								<div class="col-md-12">
									<div class='WalletBuy'>
										Connect Wallet
									</div>
								</div>
							</div>
							<div v-show="now === '3'">
								<div class='row padding30'>
									<div class="col-md-12 ">
										<div class='FromBox'>
											<div class='FromText'>From</div>
											<div class='SwapFromBox'>
												<input type="text" class='SwapFromInput' v-model="SwapFromInputNum">
												<div class='SwapFromrRight'>
													<span class='downBox'>
														<img src="../img/down.png" alt="">
													</span>
													<span class='currency'>
														ETH
													</span>
													<span class='currencyIco'>
														<img src="../img/eth.png" alt="">
													</span>
													
													<span class='MAXBox'>
														MAX
													</span>
												</div>
												
											</div>
										</div>
									</div>
									<div class="col-md-6 ">
										<div class='dollarNum'>
											$...
										</div>
									</div>
									<div class="col-md-12 ">
										<div class='down_greenBox'>
											<img src="../img/down_green.png" alt="">
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='FromBox'>
											<div class='FromText'>TO</div>
											<div class='SwapFromBox'>
												<input type="text" class='SwapFromInput' v-model="SwapToInputNum">
												<div class='SwapSlippageBox'>
													<span class='slippageText'>Slippage</span>
													<span class='slippageNum'>
														0.05%
													</span>
													<span>
														<img src="../img/edit.png" alt="">
													</span>
												</div>
												<div>
													
												</div>
												<div class='SwapFromrRight'>
													<span class='downBox'>
														<img src="../img/down.png" alt="">
													</span>
													<span class='currency'>
														CVP
													</span>
													<span class='currencyIco'>
														<img src="../img/CVP.png" alt="">
													</span>
													
												</div>
												
											</div>
										</div>
									</div>
									<div class="col-md-6 ">
										<div class='dollarNum'>
											$...
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='SwapResult'>
											1ETH=…CVP
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='SwapResultBox padding20'>
											<div class="col-md-6 ">
												<span class='MinimumText'>
													Minimum recceived
												</span>
												<span class='ResultNum'>
													187.9127 CVP
												</span>
											</div>
											<div class="col-md-6 ">
												<span class='MinimumText'>
													Liquidity Provider Fee
												</span>
												<span class='ResultNum'>
													0.00031 ETH
												</span>
											</div>
											
											<div class="col-md-6 top20">
												<span class='MinimumText'>
													View uniswap
												</span>
												<span class='ResultNum'>
													WETH-CVP
												</span>
											</div>
											<div class="col-md-12 top20">
												<div class='WalletBuy'>
													Connect Wallet
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
							<div v-show="now === '4'">
								<div class='row padding30'>
									<div class="col-md-12">
										<div class='shareText'>
											Remove liquidity in one transaction. Your PIPT will be automatically swapped to 8 different pool components.
										</div>
									</div>
									
									<div class="col-md-4">
										<div class='amountText'>
										  TDE amount
										</div>
									  
									</div>
									<div class="col-md-5 col-md-offset-3">
										<div class='slippageBox'>
											<span class='slippageText'>Slippage</span>
											<span class='slippageNum'>
												0.05%
											</span>
											<span>
												<img src="../img/edit.png" alt="">
											</span>
										</div>
									</div>
									<div class="col-md-12">
										<div class='inputBox'>
											<input type="text" placeholder="TDE amount">
											<span class='downBox'>
												<img src="../img/down.png" alt="">
											</span>
											<span class='currency'>
												ETH
											</span>
											<span class='currencyIco'>
												<img src="../img/eth.png" alt="">
											</span>
											
											<span class='MAXBox'>
												MAX
											</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class='dollarNum'>
											$...
										</div>
									</div>
									<div class="col-md-12">
										<div class='poolText'>
											0.1% enter fee or 0 TDE will be transfered to community pool
										</div>
									</div>
									<div class="col-md-12">
										<div class='amountText'>
										  amount
										</div>
									</div>
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="AAVE">
											<span class='currencyName'>
												<span class='currencyList'>
													<img src="../img/AAVE.png" alt="">
												</span>
												AAVE
											</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="YFI">
											<span class='currencyName redeem'>
												<span class='currencyList'>
													<img src="../img/YFI1.png" alt="">
												</span>
												YFI
											</span>
										</div>
									</div>
									
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="SNX">
											<span class='currencyName'>
												<span class='currencyList'>
													<img src="../img/SNX.png" alt="">
												</span>
												SNX
											</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="CVP">
											<span class='currencyName redeem'>
												<span class='currencyList'>
													<img src="../img/CVP.png" alt="">
												</span>
												CVP
											</span>
										</div>
									</div>
									
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="COMP">
											<span class='currencyName'>
												<span class='currencyList'>
													<img src="../img/COMP.png" alt="">
												</span>
													COMP
												</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="wNXM">
											<span class='currencyName redeem'>
											<span class='currencyList'>
												<img src="../img/wNXM.png" alt="">
											</span>
												wNXM
											</span>
										</div>
									</div>
									
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="MKR">
											<span class='currencyName'>
												<span class='currencyList'>
													<img src="../img/MKR.png" alt="">
												</span>
													MKR
												</span>
										</div>
									</div>
									<div class="col-md-6">
										<div class='inputBox'>
											<input type="text" v-model="UNI">
											<span class='currencyName redeem'>
											<span class='currencyList'>
												<img src="../img/UNI.png" alt="">
											</span>
												UNI
											</span>
										</div>
									</div>
									
									<div class="col-md-12">
										<div class='WalletBuy'>
											Connect Wallet
										</div>
									</div>
								
									
								</div>
							</div>
							<div v-show="now === '5'">
								<div class='row padding30'>
									<!-- <div class="col-md-12 ">
										<div class='infoBox'>
											<img src="../img/info.png" alt="">
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='piesText'>
											*This allocation is composed of multiple pies
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='infoListBox infoListBoxEd'>
											<img src="../img/stake.png" alt="">
										</div>
										<div class='infoListBox'>
											<img src="../img/etherscan.png" alt="">
										</div>
										<div class='infoListBox'>
											<img src="../img/quantstamop.png" alt="">
										</div>
										<div class='infoListBox'>
											<img src="../img/metamask.png" alt="">
										</div>
										<div class='infoListBox'>
											<img src="../img/ccoingecko.png" alt="">
										</div>
									</div> -->
									
									<div class="col-md-12 ">
										<div class='ummaryText'>
											Summary:
										</div>
										<div class='needText'>
											The most risk-minimised cryptocurrency portfolio, Balanced Crypto Pie is all you need. BCP gives equal Bitcoin, Ether, and DeFi exposure in one easy to access ERC20 token. The underlying assets in BCP are constantly taking profits and growing your holdings as it automatically rebalances to maintain the set allocation.
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='ummaryText'>
											Objective:
										</div>
										<div class='needText'>
											BCP is the result of months of community effort to provide a complete and risk-reduced cryptocurrency portfolio. We wanted to make a product for anyone who believes in the future of open finance, a diversified index of the most core permissionless digital assets. BCP achieves this as an equal balance between the established market leader (BTC), the backbone asset of smart-contract infrastructure (ETH), and a basket of the most innovative permissionless tools revolutionizing finance (DEFI++). Bitcoin and Ether are the clear market leaders at the top of their respective games, each with their own individual merits and long history of success. DeFi is a relatively new phenomenon, a broad ecosystem of projects transforming finance. With BCP it’s now possible to easily gain balanced, risk-minimised exposure to all three asset groups.
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='ummaryText'>
											Methodology:
										</div>
										<div class='needText'>
											The PieDAO community came to the consensus that BTC, ETH, and DEFI are the most valuable sectors of the cryptocurrency industry.
											
										</div>
										<div class='needText top10'>
											As a community we decided that the true balanced crypto portfolio would evenly spread exposure across these three asset groups. BCP is therefore composed of an even 33.33% distribution between BTC, ETH, and DEFI++.
											
										</div>
										<div class='needText top10'>
											DEFI++ is our most diversified DEFI index, a 70/30 balance of our large market cap (DEFI+L) and small cap market cap (DEFI+S) DEFI products. Both these products follow a weight-based methodology, with higher allocation given to larger market cap assets. This is done in order to maximise the scalability of the pies, without the low liquidity of low cap (but high potential) assets becoming a bottleneck.
																					
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='ummaryText'>
											Operation:
										</div>
										<div class='needText'>
											BCP is constructed using a Balancer smart pool, automatically rebalancing to maintain the set allocation as market prices fluctuate. In this way the system constantly locks in profits and grows the underlying holdings. 
										</div>
										
										<div class='needText top10'>
											A user can easily issue BCP tokens with ETH (sourcing the tokens from Uniswap and other markets) or with the underlying assets in their wallet. In this way BCP tokens are fully backed by the assets they represent, safely stored in our non-custodial treasury and instantly redeemable at any time.
												
										</div>
									</div>
									
									<div class="col-md-12 ">
										<div class='facts'>
											Key Facts
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											Fees to LPs
										</div>
										<div class='dollar_'>
											$99,474.34
										</div>
										<div class='LPsText'>
											fees distributed to liquitity providers
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											Pool Swap Fee
										</div>
										<div class='dollar_'>
											1%
										</div>
										<div class='LPsText'>
											swaps fee capture value during rebalancing
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											Streaming Fee
										</div>
										<div class='dollar_'>
											0.46%
										</div>
										<div class='LPsText Streaming'>
											paid out to the DAO linearly over time based on
											the entire market cap of the index
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											Total Swap Volume
										</div>
										<div class='dollar_'>
											$9,947,433.75
										</div>
										<div class='LPsText'>
											total swap volume generated by the pool
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											All Time Low
										</div>
										<div class='dollar_'>
											$1.63
										</div>
										<div class='LPsText'>
											all time low of the index
										</div>
									</div>
									
									<div class="col-md-6 top20">
										<div class='LPs'>
											Daily Pool Volume
										</div>
										<div class='dollar_'>
											$60,477.37
										</div>
										<div class='LPsText'>
											daily volume generated by the pool
										</div>
									</div>
									
								</div>
								
								
							</div>
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
				now:'5',
				amountNum:'0',
				AAVE:'0.0',
				YFI:'0.0',
				SNX:'0.0',
				CVP:'0.0',
				COMP:'0.0',
				wNXM:'0.0',
				MKR:'0.0',
				UNI:'0.0',
				SwapFromInputNum:'0',
				SwapToInputNum:'0',
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
			
		}
	}
</script>

<style scoped>
	
	.container-fluid{
		width: 100%;
		/* height: 100%; */
		padding-left: 15%;
		padding-right: 15%;
		padding-bottom: 100px;
		background: #F5F5F8!important;
	}
	.padding30{
		padding: 0px 30px;
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
	.top10{
		margin-top: 15px;
	}
	.padding20{
		padding-top: 20px;
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
		/* height: 510px; */
		margin-top: 40px;
		background: #FFFFFF;
		border-radius: 12px;
		float: left;
		padding-bottom: 30px;
	}
	.walletBox{
		width: 243px;
		height:408px;
		margin-top: 40px;
		
	}
	.ETFs_tab_title{
		float: left;
		width: 100%;
		
	}
	.ETFs_tab_title div{
		float: left;
		
		font-size: 20px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #BFBFBF;
		
		width: 15%;
		text-align: center;
		margin-top: 10px;
		cursor: pointer;
	}
	.cur{
		color: #121315!important;
		
	}
	.ETFs_tab_subject{
		width: 100%;
		float: left;
		margin-top: 15px;
	}
	.choose{
		width: 100%!important;
		margin-top: 0px!important;
	}
	.shareText{
		margin-left: 15px;
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.amountText{
		margin-top: 15px;
		margin-left: 15px;
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.slippageBox{
		margin-top: 15px;
		text-align: right;
	}
	.slippageText{
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.slippageNum{
		
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #5249DB;
		width: 56px;
		height: 24px;
		border-radius: 12px;
		background-color: rgba(82, 73, 219, 0.11);
		padding: 5px;
		margin: 0px 20px;
	}
	.inputBox{
		/* width: 100%; */
		margin-left: 15px;
		height: 54px;
		/* border-radius: 4px; */
		border: 1px solid #DCDCDC;
		margin-top: 10px;
		position: relative;
	}
	.inputBox input{
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance:none ;
		outline: 0;
		width: 100%;
		height: 100%;
		border:0px solid #fff;
		box-shadow:0 0 5px 2px rgba(0,0,0,0.1);
		padding-left: 15px;
	}
	.downBox{
		position: absolute;
		width: 24px;
		height: 24px;
		right: 20px;
		top: 15px;
	}
	.downBox img{
		width: 100%;
		height: 100%;
	}
	.currency{
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
		position: absolute;
		right: 55px;
		top: 17px;
	}
	.currencyIco{
		position: absolute;
		width: 24px;
		height: 24px;
		right: 90px;
		top: 15px;
	}
	.MAXBox{
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #74C935;
		border-radius: 12px;
		border: 1px solid #DCDCDC;
		background-color: rgba(116, 201, 53, 0.11);
		padding: 6px;
		position: absolute;
		right: 130px;
		top: 12px;
	}
	.dollarNum{
		margin-top: 10px;
		margin-left: 15px;
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #BFBFBF;
	}
	.resultsText{
		margin-top: 10px;
		text-align: right;
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.PIPTTextTitle{
		margin-left: 15px;
		margin-top: 20px;
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.PIPTText{
		position: absolute;
		right: 20px;
		top: 15px;
		
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.piptBox{
		position: absolute;
		top: 13px;
		width: 24px;
		height: 24px;
		right: 59px;
	}
	.poolText{
		margin-top: 10px;
		margin-left: 15px;
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #BFBFBF;
	}
	.WalletBuy{
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #FFFFFF;
		width: 142px;
		height: 40px;
		background: #74C935;
		border-radius: 4px;
		text-align: center;
		line-height: 42px;
		margin: 30px auto 0px auto;
		cursor: pointer;
	}
	.currencyName{
		position: absolute;
		right: 20px;
		top: 15px;
		font-size: 14px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
		text-align: left;
		width: 83px;
	}
	.currencyList{
		/* position: absolute;
		right: 68px;
		top: 13px; */
		margin-right: 7px;
		width: 24px;
		height: 24px;
	}
	.Infinity{
		position: absolute;
		right: 117px;
		top: 10px;
		padding: 6px;
		color: #BFBFBF;
		background-color: rgba(191, 191, 191, 0.11);
		border-radius: 12px;
	}
	.Approve{
		position: absolute;
		right: 241px;
		top: 10px;
		padding: 6px;
		color: #BFBFBF;
		background-color: rgba(191, 191, 191, 0.11);
		border-radius: 12px;
	}
	.currencyMAX{
		top: 10px;
		right: 321px;
		padding: 6px;
	}
	.FromBox{
		width: 100%;
		height: 114px;
		border-radius: 20px;
		border: 1px solid #DCDCDC;
	}
	.FromBox{
		position: relative;
	}
	.FromText{
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #BFBFBF;
		margin-top: 20px;
		margin-left: 20px;
	}
	.SwapFromBox{
		/* position: relative; */
	}
	.SwapFromInput{
		position: absolute;
		bottom: 15px;
		left: 20px;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance:none ;
		outline: 0;
		height: 30px;
		
		border:0px ;
		font-size: 18px;
	}
	.SwapFromrRight{
		width: 100%;
		/* height: 100%; */
		position: absolute;
		bottom: 60px;
		right: 0px;
	}
	.down_greenBox{
		width: 100%;
		text-align: center;
		margin: 20px 0px;
	}
	.SwapSlippageBox{
		position: absolute;
		right: 20px;
		top: 20px;
	}
	.SwapResult{
		width: 100%;
		text-align: center;
		font-size: 16px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #BFBFBF;
	}
	.SwapResultBox{
		margin-top: 15px;
		height: 102px;
		background: #F5F5F8;
		border-radius: 20px;
	}
	.MinimumText{
		font-size: 13px;
		font-family: Montserrat-Bold, Montserrat;
		font-weight: bold;
		color: #121315;
		margin: 20px;
		margin-right: 10px;
	}
	.ResultNum{
		font-size: 13px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 400;
		color: #121315;
	}
	.redeem{
		/* width: 67px; */
	}
	.infoBox{
		width: 100%;
		height: 151px;
	}
	.infoBox img{
		width: 100%;
		height: 100%;
	}
	.piesText{
		margin-top: 10px;
		font-family: Montserrat-Light, Montserrat;
		font-weight: 300;
		color: #121315;
	}
	.infoListBox{
		margin-top: 20px;
		width: 18%;
		height: 50px;
		margin-left: 2.5%;
		float: left;
	}
	.infoListBoxEd{
		margin-left: 0%;
	}
	.infoListBox img{
		width: 100%;
		height: 100%;
		
	}
	.ummaryText{
		margin-top: 15px;
		font-size: 18px;
		font-family: Montserrat-Regular, Montserrat;
		font-weight: 600;
		color: #121315;
	}
	.needText{
		margin-top: 5px;
		font-size: 14px;
	}
	.facts{
		margin-top: 25px;
		width: 100%;
		font-size: 20px;
		font-family: Montserrat-Medium, Montserrat;
		font-weight: 600;
		color: #121315;
		text-align: center;
	}
	.LPs{
		font-size: 13px;
		font-family: Montserrat-Medium, Montserrat;
		font-weight: 500;
		color: #121315;
		float: left;
	}
	.dollar_{
		font-size: 13px;
		font-family: Montserrat-Medium, Montserrat;
		font-weight: 500;
		color: #121315;
		float: right;
	}
	.LPsText{
		width: 100%;
		float: left;
		font-size: 13px;
		font-family: PingFang-SC-Regular, PingFang-SC;
		font-weight: 400;
		color: #121315;
		/* height: 40px; */
		line-height: 40px;
		border-bottom: 1px solid #121315;
	}
	.Streaming{
		
		line-height:20px;
	}
</style>
