var contract = {
    ownerAddress: "0xDA1f876435f34756ACDA6492B1e061c31D1aE52D",
    address: "0x45e58e973fbd1f6accafe0241cc4745371c3fac4",
    ABI: [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_currentValue",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_spender",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_currentValues",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          }
        ],
        "name": "batchApprove",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          }
        ],
        "name": "batchTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          }
        ],
        "name": "batchTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_quantities",
            "type": "uint256[]"
          }
        ],
        "name": "buyBatchItems",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_quantity",
            "type": "uint256"
          }
        ],
        "name": "buyItem",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_quantities",
            "type": "uint256[]"
          }
        ],
        "name": "giveBatchItems",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_quantity",
            "type": "uint256"
          }
        ],
        "name": "giveItem",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_totalSupply",
            "type": "uint256"
          },
          {
            "name": "_uri",
            "type": "string"
          },
          {
            "name": "_decimals",
            "type": "uint8"
          },
          {
            "name": "_symbol",
            "type": "string"
          },
          {
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address[]"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          }
        ],
        "name": "multicastTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeBatchTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeBatchTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address[]"
          },
          {
            "name": "_ids",
            "type": "uint256[]"
          },
          {
            "name": "_values",
            "type": "uint256[]"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeMulticastTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_uri",
            "type": "string"
          }
        ],
        "name": "setURI",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_from",
            "type": "address"
          },
          {
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "_owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_spender",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_oldValue",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_spender",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_to",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "_id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "_value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_owner",
            "type": "address"
          },
          {
            "name": "_spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          },
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "allowances",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "decimals",
        "outputs": [
          {
            "name": "",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getAppVersion",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getInventoryItem",
        "outputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "itemName",
            "type": "string"
          },
          {
            "name": "itemPrice",
            "type": "uint256"
          },
          {
            "name": "itemQuantity",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getNonce",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getShopItem",
        "outputs": [
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "itemName",
            "type": "string"
          },
          {
            "name": "itemPrice",
            "type": "uint256"
          },
          {
            "name": "currentSupply",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "items",
        "outputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "totalSupply",
            "type": "uint256"
          },
          {
            "name": "price",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "metadataURIs",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "nonce",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "price",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "sample",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "symbols",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "uri",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]
}

export default contract;

