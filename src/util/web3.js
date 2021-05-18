//web3.js
import Web3 from 'web3'
/* eslint-disable */
// 智能合约地址
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

var contract=null;
/**
 * 初始化
 * @param {Object} callback 返回账户地址
 */
function init(callback){
	
	//判断用户是否安装MetaMask钱包插件
	if (typeof window.ethereum === "undefined") {
		//没安装MetaMask钱包进行弹框提示
		alert("Looks like you need a Dapp browser to get started.");
		alert("Consider installing MetaMask!");
	} else {
		let web3 = window.web3
		web3 = new Web3(web3.currentProvider)
		 
		//如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
		ethereum.enable()
		.catch(function (reason) {
			
			//如果用户拒绝了登录请求
			if (reason === "User rejected provider access") {
				// 用户拒绝登录后执行语句；
			} else {
				// 本不该执行到这里，但是真到这里了，说明发生了意外
				alert("There was an issue signing you in.");
			}
			}).then(function (accounts) {
				
				// //如果用户同意了登录请求，你就可以拿到用户的账号
				//var currentProvider = web3.currentProvider;
				
				// console.log(currentProvider)
				//var Web3 = web3js.getWeb3();
				//web3 = new Web3();
				//web3.setProvider(currentProvider);
				console.log(contractABI)
				console.log(contractAddress)
				contract = new web3.eth.Contract(contractABI, contractAddress);
				
				
				// //这里返回用户钱包地址
				callback(accounts[0].toString());
				
			}); 
	}
}


// 投资授权
function Approve(addr,value, callback) {
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
	
	//contract.methods
	console.log('11')
	console.log(contract)
	contract.methods.setA(123).send({from:'0xe9ab5bb7ddba0c86550b84024e430bdb03119dc9'}).then(console.log);
	// contract.methods
	// 	//智能合约方法(所需的参数)
	// 	.Approve(addr,value)
	// 	.call()
	// 	.then((res) => {
	// 		console.log('投资授权成功', res)
	// 		callback(res);
	// 	})
	// 	.catch((err) => {
	// 		alert('投资授权失败，稍后再试：', err)
	// 	});
}

// 投资
function join(account, addr,val, callback) {
	//要支付的ETH，十六进制
	let value = "0x0";
	//智能合约的参数也需要进行转换
	//web3.utils.padLeft左侧补0补齐到指定长度的字符串
	//参数数字转换
	val = web3.utils.toHex(val).substring(2);
	val = web3.utils.padLeft(val, 64);
	//参数地址转换
	addr=web3.utils.padLeft(addr, 64).substring(2)
	//智能合约方法，获取方式看下面
	let fun="0x095ea7b3"
	let data = fun + addr + val;
	sendTransfer(account, data, value, callback, errorCallBack);
}
/**
 * 发送交易
 * @param {Object} account 用户地址
 * @param {Object} data 数据
 * @param {Object} value 转账金额
 * @param {Object} callback 返回hash
 * @param {Object} errorCallBack 返回的错误
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


//导出相应的方法
export default {
	init,
	Approve,
	join,
}
