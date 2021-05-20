// This address points to a dummy ERC20 contract deployed on Ethereum Mainnet,
// Goerli, Kovan, Rinkeby and Ropsten. Replace it with your smart contracts.
const bytecodes = {
  fundsDistributor: "0x6101006040523480156200001257600080fd5b5060405162001b6238038062001b62833981810160405260c08110156200003857600080fd5b815160208301516040808501516060860151608087015160a0880180519451969895979396929591949293820192846401000000008211156200007a57600080fd5b9083019060208201858111156200009057600080fd5b8251640100000000811182820188101715620000ab57600080fd5b82525081516020918201929091019080838360005b83811015620000da578181015183820152602001620000c0565b50505050905090810190601f168015620001085780820380516001836020036101000a031916815260200191505b506040525050508585858585600062000126620002ff60201b60201c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b038516620001b75760405162461bcd60e51b815260040180806020018281038252603a81526020018062001a8c603a913960400191505060405180910390fd5b81831115620001f85760405162461bcd60e51b815260040180806020018281038252603881526020018062001ac66038913960400191505060405180910390fd5b60008211620002395760405162461bcd60e51b815260040180806020018281038252602881526020018062001b3a6028913960400191505060405180910390fd5b426200025483866200030460201b62000cd71790919060201c565b11620002925760405162461bcd60e51b815260040180806020018281038252603c81526020018062001afe603c913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b03871617905580151560f81b60e05260c0829052620002d3848462000304602090811b62000cd717901c565b60805250505060a052508051620002f290600490602084019062000366565b5050505050505062000408565b335b90565b6000828201838110156200035f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003a957805160ff1916838001178555620003d9565b82800160010185558215620003d9579182015b82811115620003d9578251825591602001919060010190620003bc565b50620003e7929150620003eb565b5090565b6200030191905b80821115620003e75760008155600101620003f2565b60805160a05160c05160e05160f81c61162d6200045f600039806108d35280610b355250806103405280610ec75280610f2a525080610b835280610ea65280610f525250806103645280610e70525061162d6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806374a8f103116100975780639852595c116100665780639852595c146102c4578063be9a6555146102ea578063f2fde38b146102f2578063fa01dc061461031857610100565b806374a8f103146101fd5780637998a1c414610223578063872a7810146102a05780638da5cb5b146102bc57610100565b8063384711cc116100d3578063384711cc1461017557806338af3eed1461019b5780634cb6464d146101bf578063715018a6146101f557610100565b80630fb5a6b41461010557806313d033c01461011f57806319165587146101275780631c31f7101461014f575b600080fd5b61010d61033e565b60408051918252519081900360200190f35b61010d610362565b61014d6004803603602081101561013d57600080fd5b50356001600160a01b0316610386565b005b61014d6004803603602081101561016557600080fd5b50356001600160a01b0316610475565b61010d6004803603602081101561018b57600080fd5b50356001600160a01b031661056f565b6101a3610582565b604080516001600160a01b039092168252519081900360200190f35b61014d600480360360608110156101d557600080fd5b506001600160a01b03813581169160208101359091169060400135610591565b61014d61079f565b61014d6004803603602081101561021357600080fd5b50356001600160a01b031661085d565b61022b610aa5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026557818101518382015260200161024d565b50505050905090810190601f1680156102925780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a8610b33565b604080519115158252519081900360200190f35b6101a3610b57565b61010d600480360360208110156102da57600080fd5b50356001600160a01b0316610b66565b61010d610b81565b61014d6004803603602081101561030857600080fd5b50356001600160a01b0316610ba5565b6102a86004803603602081101561032e57600080fd5b50356001600160a01b0316610cb9565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b600061039182610d3a565b9050600081116103d25760405162461bcd60e51b81526004018080602001828103825260288152602001806113e86028913960400191505060405180910390fd5b6001600160a01b0382166000908152600260205260409020546103fb908263ffffffff610cd716565b6001600160a01b0380841660008181526002602052604090209290925560015461042d9291168363ffffffff610d6c16565b604080516001600160a01b03841681526020810183905281517fc7798891864187665ac6dd119286e44ec13f014527aeeb2b8eb3fd413df93179929181900390910190a15050565b6001546001600160a01b0316610489610dc3565b6001600160a01b0316146104ce5760405162461bcd60e51b815260040180806020018281038252603681526020018061138c6036913960400191505060405180910390fd5b6001546001600160a01b038281169116141561051b5760405162461bcd60e51b815260040180806020018281038252603d815260200180611522603d913960400191505060405180910390fd5b600180546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f373c72efabe4ef3e552ff77838be729f3bc3d8c586df0012902d1baa2377fa1d9181900360200190a150565b600061057a82610dc7565b90505b919050565b6001546001600160a01b031690565b6001546001600160a01b03166105a5610dc3565b6001600160a01b0316146105ea5760405162461bcd60e51b815260040180806020018281038252603681526020018061138c6036913960400191505060405180910390fd5b600081116106295760405162461bcd60e51b81526004018080602001828103825260408152602001806114e26040913960400191505060405180910390fd5b6001600160a01b03821661066e5760405162461bcd60e51b815260040180806020018281038252603d815260200180611410603d913960400191505060405180910390fd5b600061067984610d3a565b9050600081116106ba5760405162461bcd60e51b81526004018080602001828103825260328152602001806115c66032913960400191505060405180910390fd5b818110156106f95760405162461bcd60e51b815260040180806020018281038252603d81526020018061155f603d913960400191505060405180910390fd5b6001600160a01b038416600090815260026020526040902054610722908363ffffffff610cd716565b6001600160a01b03851660008181526002602052604090209190915561074f90848463ffffffff610d6c16565b604080516001600160a01b0380871682528516602082015280820184905290517f5771d27c3bda2d39985b929f5e739573a21a8ec4c3bd42fa8653dea8b5a4fa419181900360600190a150505050565b6107a7610dc3565b6001600160a01b03166107b8610b57565b6001600160a01b031614610813576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b610865610dc3565b6001600160a01b0316610876610b57565b6001600160a01b0316146108d1576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000061092d5760405162461bcd60e51b81526004018080602001828103825260238152602001806114736023913960400191505060405180910390fd5b6001600160a01b03811660009081526003602052604090205460ff16156109855760405162461bcd60e51b815260040180806020018281038252602b8152602001806114b7602b913960400191505060405180910390fd5b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b1580156109cf57600080fd5b505afa1580156109e3573d6000803e3d6000fd5b505050506040513d60208110156109f957600080fd5b505190506000610a0883610d3a565b90506000610a1c838363ffffffff610f9e16565b6001600160a01b0385166000908152600360205260409020805460ff191660011790559050610a63610a4c610b57565b6001600160a01b038616908363ffffffff610d6c16565b604080516001600160a01b038616815290517f68d870ac0aff3819234e8a1fc8f357b40d75212f2dc8594b97690fa205b3bab29181900360200190a150505050565b6004805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610b2b5780601f10610b0057610100808354040283529160200191610b2b565b820191906000526020600020905b815481529060010190602001808311610b0e57829003601f168201915b505050505081565b7f000000000000000000000000000000000000000000000000000000000000000090565b6000546001600160a01b031690565b6001600160a01b031660009081526002602052604090205490565b7f000000000000000000000000000000000000000000000000000000000000000090565b610bad610dc3565b6001600160a01b0316610bbe610b57565b6001600160a01b031614610c19576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610c5e5760405162461bcd60e51b81526004018080602001828103825260268152602001806113c26026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b031660009081526003602052604090205460ff1690565b600082820183811015610d31576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b6001600160a01b03811660009081526002602052604081205461057a90610d6084610dc7565b9063ffffffff610f9e16565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610dbe908490610ffb565b505050565b3390565b604080516370a0823160e01b8152306004820152905160009182916001600160a01b038516916370a08231916024808301926020929190829003018186803b158015610e1257600080fd5b505afa158015610e26573d6000803e3d6000fd5b505050506040513d6020811015610e3c57600080fd5b50516001600160a01b03841660009081526002602052604081205491925090610e6c90839063ffffffff610cd716565b90507f0000000000000000000000000000000000000000000000000000000000000000421015610ea15760009250505061057d565b610ef17f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000063ffffffff610cd716565b42101580610f1757506001600160a01b03841660009081526003602052604090205460ff165b15610f2557915061057d9050565b610f957f0000000000000000000000000000000000000000000000000000000000000000610f89610f7c427f000000000000000000000000000000000000000000000000000000000000000063ffffffff610f9e16565b849063ffffffff6110ac16565b9063ffffffff61110516565b9250505061057d565b600082821115610ff5576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6060611050826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661116c9092919063ffffffff16565b805190915015610dbe5780806020019051602081101561106f57600080fd5b5051610dbe5760405162461bcd60e51b815260040180806020018281038252602a81526020018061159c602a913960400191505060405180910390fd5b6000826110bb57506000610d34565b828202828482816110c857fe5b0414610d315760405162461bcd60e51b81526004018080602001828103825260218152602001806114966021913960400191505060405180910390fd5b600080821161115b576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161116457fe5b049392505050565b606061117b8484600085611185565b90505b9392505050565b6060824710156111c65760405162461bcd60e51b815260040180806020018281038252602681526020018061144d6026913960400191505060405180910390fd5b6111cf856112e1565b611220576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061125f5780518252601f199092019160209182019101611240565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146112c1576040519150601f19603f3d011682016040523d82523d6000602084013e6112c6565b606091505b50915091506112d68282866112e7565b979650505050505050565b3b151590565b606083156112f657508161117e565b8251156113065782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611350578181015183820152602001611338565b50505050905090810190601f16801561137d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe546f6b656e56657374696e673a3a73657442656e65666963696172793a204e6f7420636f6e74726163742062656e65666963696172794f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373546f6b656e56657374696e673a3a72656c656173653a206e6f20746f6b656e732061726520647565546f6b656e56657374696e673a3a5f72656c65617365546f416464726573733a20726563656976657220697320746865207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c546f6b656e56657374696e673a3a7265766f6b653a2063616e6e6f74207265766f6b65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77546f6b656e56657374696e673a3a7265766f6b653a20746f6b656e20616c7265616479207265766f6b6564546f6b656e56657374696e673a3a5f72656c65617365546f416464726573733a20616d6f756e742073686f756c642062652067726561746572207468616e2030546f6b656e56657374696e673a3a73657442656e65666963696172793a2053616d652062656e65666963696172792061646472657373206173206f6c64546f6b656e56657374696e673a3a5f72656c65617365546f416464726573733a20656e6f75676820746f6b656e73206e6f7420766573746564207965745361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564546f6b656e56657374696e673a3a5f72656c65617365546f416464726573733a206e6f20746f6b656e732061726520647565a2646970667358221220724f14d974e1ba9a7533b2df460593a30fd0b1eff0babb517a4292a8e6cd71ca64736f6c634300060b0033546f6b656e56657374696e673a3a636f6e7374727563746f723a2062656e656669636961727920697320746865207a65726f2061646472657373546f6b656e56657374696e673a3a636f6e7374727563746f723a20636c696666206973206c6f6e676572207468616e206475726174696f6e546f6b656e56657374696e673a3a636f6e7374727563746f723a2066696e616c2074696d65206973206265666f72652063757272656e742074696d65546f6b656e56657374696e673a3a636f6e7374727563746f723a206475726174696f6e2069732030",
};

export default bytecodes;
