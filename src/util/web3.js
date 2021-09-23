//web3.js
import Web3 from 'web3'
/* eslint-disable */
// Address
const contractAddress = '0x5ac110266C5078bBC5367463FC19322593e204F7'
// ABI
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

var contract=null;
/**
 * init
 * @param {Object} callback address
 */
function init(callback){
	
	
	if (typeof window.ethereum === "undefined") {
		alert("Looks like you need a Dapp browser to get started.");
		alert("Consider installing MetaMask!");
	} else {
		let web3 = window.web3
		web3 = new Web3(web3.currentProvider)
		 
		
		ethereum.enable()
		.catch(function (reason) {
			
			
			if (reason === "User rejected provider access") {
				
			} else {
				
				alert("There was an issue signing you in.");
			}
			}).then(function (accounts) {
				
				
				//var currentProvider = web3.currentProvider;
				
				// console.log(currentProvider)
				//var Web3 = web3js.getWeb3();
				//web3 = new Web3();
				//web3.setProvider(currentProvider);
				console.log(contractABI)
				console.log(contractAddress)
				contract = new web3.eth.Contract(contractABI, contractAddress);
				
				
				// Address
				callback(accounts[0].toString());
				
			}); 
	}
}



function Approve(addr,value, callback) {
	console.log(addr)
	
	const contractAddress = '0x5ac110266C5078bBC5367463FC19322593e204F7'
	// ABI
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
	
	//contract.methods
	console.log('11')
	console.log(contract)
	contract.methods.setA(123).send({from:'0xe9ab5bb7ddba0c86550b84024e430bdb03119dc9'}).then(console.log);
	
}


function join(account, addr,val, callback) {
	
	let value = "0x0";
	
	val = web3.utils.toHex(val).substring(2);
	val = web3.utils.padLeft(val, 64);
	
	addr=web3.utils.padLeft(addr, 64).substring(2)
	
	let fun="0x095ea7b3"
	let data = fun + addr + val;
	sendTransfer(account, data, value, callback, errorCallBack);
}
/**
 * 
 * @param {Object} account 
 * @param {Object} data 
 * @param {Object} value 
 * @param {Object} callback 
 * @param {Object} errorCallBack 
 */
function sendTransfer(account, data, value, callback, errorCallBack) {
	// estimateGas获取交易的 gas 用量
	const params = {
		from: account,
		to: contractAddress,
		data: data,
		value: value,
 	 };
	web3.eth.estimateGas(params, function (error1, gaslimit) {
		if (error1) {
			errorCallBack(error1);
		} else {
			// gasprice获取当前gas价格
			web3.eth.getGasPrice(function (error2, gasPrice) {
				if (error2) {
					errorCallBack(error2);
				} else {
					gaslimit -= -10000;
					let params = [
						{
							gasPrice: gasPrice,
							gasLimit: gaslimit,
							from: account,
							to: contractAddress,
							data: data,
							value: value,
						},
					];
					//ethereum.sendAsync方法发送以太币、调用智能合约：
					ethereum.sendAsync(
						{
							method: "eth_sendTransaction",
							params: params,
							from: account,
						},
						function (error, hash) {
							if (error) {
								// alert(error.message);
								errorCallBack(error.message);
							} else {
								callback(hash);
							}
						}
		           );
		           //监听MetaMask的事件
		           ethereum.on('accountsChanged', function (accounts) {
		             console.log(accounts[0])
		           })
				}
			});
		}
	});
}



export default {
	init,
	Approve,
	join,
}



