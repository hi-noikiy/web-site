<template>
	<div>
		<div class='policyBox'>
			<span>
				We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
				
			</span>
			<input  :class="colorHover==0?'hover policyBtn':' policyBtn'" type="button" value='Privacy policy'  @click="Privacy()" @mouseenter="spanHover(0)">
			<input  :class="colorHover==1?'hover policyBtnNo':'policyBtnNo'" type="submit" value="NO"  @click="NO() "@mouseenter="spanHover(1)"/>
			<input  :class="colorHover==2?'hover policyBtnYes':'policyBtnNo'" type="submit" value="OK" @click="Setcookie()" @mouseenter="spanHover(2)"/>
		</div>
		
	</div>
</template>

<script>
import Bus from '@/util/bus'
export default {
	
	
	data() {
		return {
			colorHover:2
		};
	},
	methods: {
		Privacy(){
			window.open("https://matrixetf.finance/cookies", "_blank");
			
		},
		NO(){
			Bus.$emit('Policy', true)
		},
		Setcookie (){
			
			var expdate = new Date();   
			var Days = 30;
			expdate.setTime(expdate.getTime() +Days*24*60*60*1000);  
			document.cookie = 'policy' +"="+true+";expires="+expdate.toGMTString()+";path=/";
			
			Bus.$emit('Policy', true)
		},
		spanHover(index){
			this.colorHover = index
		}
	},
	mounted() {
		
	}
}
	
	
</script>

<style scoped="">
	.policyBox{
		width: 100%;
		height: 50px;
		background: #FFFFFF;
		text-align: center;
		font-weight: 500;
		color: #121315;
		line-height: 50px;
	}
	.policyBtn{
		width: 129px;
		height: 30px;
		background: #BFBFBF;
		border-radius: 2px;
		line-height: 30px;
		border: 0px;
		color: #fff;
		margin-right: 10px;
	}
	.policyBtnNo{
		width: 61px;
		height: 30px;
		background: #BFBFBF;
		border-radius: 2px;
		line-height: 30px;
		border: 0px;
		color: #fff;
		margin-right: 10px;
	}
	.policyBtnYes{
		width: 61px;
		height: 30px;
		
		border-radius: 2px;
		line-height: 30px;
		border: 0px;
		color: #fff;
		margin-right: 10px;
	}
	.hover{
		background: #121315;
	}
	
</style>
