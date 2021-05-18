<template>
  <div class='metamask-info'>
    <p>111222</p>
	<button @click="mask">调用MeatMask</button>
	<button @click="setVal">调用合约</button>
  </div>
 </template>
 <script>
	/* eslint-disable */
	import Web3 from 'web3'
	import NCWeb3 from "@/util/web3";
	
	
	export default {
		
	    data() {
	        return {
				
			}
		},
		methods: {
			mask(){
				console.log(NCWeb3)
				NCWeb3.init(addr=>{
				
					console.log(addr)
					
					const contractAddress = '0x5ac110266C5078bBC5367463FC19322593e204F7'
					// 智能合约ABI
					const contractABI=[
					 {
					  "inputs": [
					   {
					    "internalType": "uint256",
					    "name": "_a",
					    "type": "uint256"
					   }
					  ],
					  "name": "setA",
					  "outputs": [],
					  "stateMutability": "nonpayable",
					  "type": "function"
					 },
					 {
					  "inputs": [],
					  "name": "a",
					  "outputs": [
					   {
					    "internalType": "uint256",
					    "name": "",
					    "type": "uint256"
					   }
					  ],
					  "stateMutability": "view",
					  "type": "function"
					 }
					]
					
				})
			},
			setVal(){
				const contractAddress = '0x5ac110266C5078bBC5367463FC19322593e204F7'
				// 智能合约ABI
				const contractABI=[
				 {
				  "inputs": [
				   {
				    "internalType": "uint256",
				    "name": "_a",
				    "type": "uint256"
				   }
				  ],
				  "name": "setA",
				  "outputs": [],
				  "stateMutability": "nonpayable",
				  "type": "function"
				 },
				 {
				  "inputs": [],
				  "name": "a",
				  "outputs": [
				   {
				    "internalType": "uint256",
				    "name": "",
				    "type": "uint256"
				   }
				  ],
				  "stateMutability": "view",
				  "type": "function"
				 }
				]
				
				NCWeb3.Approve(contractAddress,contractABI, res=>{
						console.log('Approve方法返回的数据',res)
					})
			}
			
		},
		created() {
			
		}
	}
 </script>
 <style scoped></style>