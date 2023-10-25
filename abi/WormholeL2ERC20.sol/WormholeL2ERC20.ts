export default {
  abi: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string',
        },
        {
          internalType: 'address',
          name: '_relayer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_l1Block',
          type: 'address',
        },
        {
          internalType: 'uint16',
          name: '_sourceChain',
          type: 'uint16',
        },
        {
          internalType: 'uint16',
          name: '_targetChain',
          type: 'uint16',
        },
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'AlreadyInitialized',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'deliveryHash',
          type: 'bytes32',
        },
      ],
      name: 'AlreadyProcessed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidShortString',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyRelayerAllowed',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'str',
          type: 'string',
        },
      ],
      name: 'StringTooLong',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'wormholeAddress',
          type: 'bytes32',
        },
      ],
      name: 'UnregisteredSender',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromDelegate',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toDelegate',
          type: 'address',
        },
      ],
      name: 'DelegateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegate',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'DelegateVotesChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [],
      name: 'EIP712DomainChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint16',
          name: 'sourceChain',
          type: 'uint16',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'sourceAddress',
          type: 'bytes32',
        },
      ],
      name: 'RegisteredSenderSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'targetChain',
          type: 'uint16',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetToken',
          type: 'address',
        },
      ],
      name: 'TokenBridged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'CLOCK_MODE',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'INITIALIZED',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'L1_BLOCK',
      outputs: [
        {
          internalType: 'contract IL1Block',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'L1_BRIDGE_ADDRESS',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'REFUND_CHAIN',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TARGET_CHAIN',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'WORMHOLE_RELAYER',
      outputs: [
        {
          internalType: 'contract IWormholeRelayer',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: 'pos',
          type: 'uint32',
        },
      ],
      name: 'checkpoints',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fromBlock',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'votes',
              type: 'uint224',
            },
          ],
          internalType: 'struct ERC20Votes.Checkpoint',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'clock',
      outputs: [
        {
          internalType: 'uint48',
          name: '',
          type: 'uint48',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
      ],
      name: 'delegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'delegateBySig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'delegates',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'eip712Domain',
      outputs: [
        {
          internalType: 'bytes1',
          name: 'fields',
          type: 'bytes1',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'version',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'chainId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'verifyingContract',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
        {
          internalType: 'uint256[]',
          name: 'extensions',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'timepoint',
          type: 'uint256',
        },
      ],
      name: 'getPastTotalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'timepoint',
          type: 'uint256',
        },
      ],
      name: 'getPastVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'l1BridgeAddress',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'l1Unlock',
      outputs: [
        {
          internalType: 'uint256',
          name: 'sequence',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'numCheckpoints',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: 'targetChain',
          type: 'uint16',
        },
      ],
      name: 'quoteDeliveryCost',
      outputs: [
        {
          internalType: 'uint256',
          name: 'cost',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'payload',
          type: 'bytes',
        },
        {
          internalType: 'bytes[]',
          name: '',
          type: 'bytes[]',
        },
        {
          internalType: 'bytes32',
          name: 'sourceAddress',
          type: 'bytes32',
        },
        {
          internalType: 'uint16',
          name: 'sourceChain',
          type: 'uint16',
        },
        {
          internalType: 'bytes32',
          name: 'deliveryHash',
          type: 'bytes32',
        },
      ],
      name: 'receiveWormholeMessages',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'registeredSenders',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'seenDeliveryVaaHashes',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint16',
          name: 'sourceChain',
          type: 'uint16',
        },
        {
          internalType: 'bytes32',
          name: 'sourceAddress',
          type: 'bytes32',
        },
      ],
      name: 'setRegisteredSender',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode: {
    object:
      '0x6101e0604052600f805460ff191690553480156200001c57600080fd5b50604051620043f5380380620043f58339810160408190526200003f9162000435565b828282878a80604051806040016040528060018152602001603160f81b8152508d8d81600390816200007291906200058b565b5060046200008182826200058b565b50620000939150839050600562000189565b61012052620000a481600662000189565b61014052815160208084019190912060e052815190820120610100524660a0526200013260e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506200014733620001c2565b6001600160a01b0316610160526200015f8162000214565b5061ffff9182166101a05216610180525050506001600160a01b03166101c05250620006b1915050565b6000602083511015620001a957620001a18362000297565b9050620001bc565b81620001b684826200058b565b5060ff90505b92915050565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200021e620002da565b6001600160a01b038116620002895760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6200029481620001c2565b50565b600080829050601f81511115620002c5578260405163305a27a960e01b815260040162000280919062000657565b8051620002d2826200068c565b179392505050565b600c546001600160a01b03163314620003365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000280565b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200036b57818101518382015260200162000351565b50506000910152565b600082601f8301126200038657600080fd5b81516001600160401b0380821115620003a357620003a362000338565b604051601f8301601f19908116603f01168101908282118183101715620003ce57620003ce62000338565b81604052838152866020858801011115620003e857600080fd5b620003fb8460208301602089016200034e565b9695505050505050565b80516001600160a01b03811681146200041d57600080fd5b919050565b805161ffff811681146200041d57600080fd5b600080600080600080600060e0888a0312156200045157600080fd5b87516001600160401b03808211156200046957600080fd5b620004778b838c0162000374565b985060208a01519150808211156200048e57600080fd5b506200049d8a828b0162000374565b965050620004ae6040890162000405565b9450620004be6060890162000405565b9350620004ce6080890162000422565b9250620004de60a0890162000422565b9150620004ee60c0890162000405565b905092959891949750929550565b600181811c908216806200051157607f821691505b6020821081036200053257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200058657600081815260208120601f850160051c81016020861015620005615750805b601f850160051c820191505b8181101562000582578281556001016200056d565b5050505b505050565b81516001600160401b03811115620005a757620005a762000338565b620005bf81620005b88454620004fc565b8462000538565b602080601f831160018114620005f75760008415620005de5750858301515b600019600386901b1c1916600185901b17855562000582565b600085815260208120601f198616915b82811015620006285788860151825594840194600190910190840162000607565b5085821015620006475787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6020815260008251806020840152620006788160408501602087016200034e565b601f01601f19169190910160400192915050565b80516020808301519190811015620005325760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c051613c7e62000777600039600081816104a301528181610b5c0152610ff60152600081816107aa015261188f015260008181610956015281816117c30152818161185a015261190801526000818161033801528181610cba0152818161165f015261182a01526000610efe01526000610ed3015260006120dc015260006120b40152600061200f01526000612039015260006120630152613c7e6000f3fe6080604052600436106102c65760003560e01c80637ecebe0011610179578063c3cda520116100d6578063dd12d68b1161008a578063f1127ed811610064578063f1127ed8146108c5578063f2fde38b14610924578063f81d82c61461094457600080fd5b8063dd12d68b1461083f578063dd62ed3e1461085f578063e512e7d6146108b257600080fd5b8063c4d66de8116100bb578063c4d66de8146107df578063d505accf146107ff578063d75a98291461081f57600080fd5b8063c3cda52014610778578063c41704701461079857600080fd5b8063952888831161012d5780639ab24eb0116101125780639ab24eb014610718578063a457c2d714610738578063a9059cbb1461075857600080fd5b806395288883146106e957806395d89b411461070357600080fd5b80638da5cb5b1161015e5780638da5cb5b146106725780638e539e8c1461069d57806391ddadf4146106bd57600080fd5b80637ecebe001461062a57806384b0196e1461064a57600080fd5b80633a46b1a8116102275780635c19a95c116101db5780636fcfff45116101c05780636fcfff451461059d57806370a08231146105d2578063715018a61461061557600080fd5b80635c19a95c146105425780636464e3c91461056257600080fd5b80634bf5d7e91161020c5780634bf5d7e9146104c5578063529dca32146104da578063587cde1e146104fc57600080fd5b80633a46b1a814610471578063477185901461049157600080fd5b806323b872dd1161027e578063313ce56711610263578063313ce567146104205780633644e5151461043c578063395093511461045157600080fd5b806323b872dd146103ce578063248a20f6146103ee57600080fd5b80630f1f9cfc116102af5780630f1f9cfc14610326578063180f6cc21461037f57806318160ddd146103af57600080fd5b806306fdde03146102cb578063095ea7b3146102f6575b600080fd5b3480156102d757600080fd5b506102e0610978565b6040516102ed9190613405565b60405180910390f35b34801561030257600080fd5b50610316610311366004613441565b610a0a565b60405190151581526020016102ed565b34801561033257600080fd5b5061035a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102ed565b34801561038b57600080fd5b5061031661039a36600461346b565b600e6020526000908152604090205460ff1681565b3480156103bb57600080fd5b506002545b6040519081526020016102ed565b3480156103da57600080fd5b506103166103e9366004613484565b610a24565b3480156103fa57600080fd5b50600f5461035a90610100900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561042c57600080fd5b50604051601281526020016102ed565b34801561044857600080fd5b506103c0610a48565b34801561045d57600080fd5b5061031661046c366004613441565b610a57565b34801561047d57600080fd5b506103c061048c366004613441565b610aa3565b34801561049d57600080fd5b5061035a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b506102e0610b58565b3480156104e657600080fd5b506104fa6104f5366004613663565b610ca2565b005b34801561050857600080fd5b5061035a61051736600461371a565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600960205260409020541690565b34801561054e57600080fd5b506104fa61055d36600461371a565b610e4a565b34801561056e57600080fd5b5061031661057d366004613735565b600d60209081526000928352604080842090915290825290205460ff1681565b3480156105a957600080fd5b506105bd6105b836600461371a565b610e57565b60405163ffffffff90911681526020016102ed565b3480156105de57600080fd5b506103c06105ed36600461371a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561062157600080fd5b506104fa610e86565b34801561063657600080fd5b506103c061064536600461371a565b610e9a565b34801561065657600080fd5b5061065f610ec5565b6040516102ed9796959493929190613751565b34801561067e57600080fd5b50600c5473ffffffffffffffffffffffffffffffffffffffff1661035a565b3480156106a957600080fd5b506103c06106b836600461346b565b610f6a565b3480156106c957600080fd5b506106d2610fef565b60405165ffffffffffff90911681526020016102ed565b3480156106f557600080fd5b50600f546103169060ff1681565b34801561070f57600080fd5b506102e0611092565b34801561072457600080fd5b506103c061073336600461371a565b6110a1565b34801561074457600080fd5b50610316610753366004613441565b611185565b34801561076457600080fd5b50610316610773366004613441565b611256565b34801561078457600080fd5b506104fa610793366004613821565b611264565b3480156107a457600080fd5b506107cc7f000000000000000000000000000000000000000000000000000000000000000081565b60405161ffff90911681526020016102ed565b3480156107eb57600080fd5b506104fa6107fa36600461371a565b6113db565b34801561080b57600080fd5b506104fa61081a366004613879565b611467565b34801561082b57600080fd5b506103c061083a3660046138e3565b61161a565b34801561084b57600080fd5b506104fa61085a366004613735565b6116e5565b34801561086b57600080fd5b506103c061087a3660046138fe565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6103c06108c0366004613441565b611763565b3480156108d157600080fd5b506108e56108e0366004613931565b61199c565b60408051825163ffffffff1681526020928301517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1692810192909252016102ed565b34801561093057600080fd5b506104fa61093f36600461371a565b611a42565b34801561095057600080fd5b506107cc7f000000000000000000000000000000000000000000000000000000000000000081565b60606003805461098790613971565b80601f01602080910402602001604051908101604052809291908181526020018280546109b390613971565b8015610a005780601f106109d557610100808354040283529160200191610a00565b820191906000526020600020905b8154815290600101906020018083116109e357829003601f168201915b5050505050905090565b600033610a18818585611af6565b60019150505b92915050565b600033610a32858285611ca9565b610a3d858585611d80565b506001949350505050565b6000610a52611ff5565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610a189082908690610a9e9087906139ed565b611af6565b6000610aad610fef565b65ffffffffffff168210610b22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20667574757265206c6f6f6b75700000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600a60205260409020610b51908361212d565b9392505050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638381f58a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be99190613a00565b67ffffffffffffffff16610bfb610fef565b65ffffffffffff1614610c6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4552433230566f7465733a2062726f6b656e20636c6f636b206d6f64650000006044820152606401610b19565b5060408051808201909152601e81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d6569703135353a310000602082015290565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d11576040517f81316de100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61ffff82166000908152600d602090815260408083208684529091529020548290849060ff16801580610d42575081155b15610d7c576040517f0bcd7ac600000000000000000000000000000000000000000000000000000000815260048101839052602401610b19565b6000848152600e6020526040902054849060ff1615610dca576040517f1a20d3e600000000000000000000000000000000000000000000000000000000815260048101829052602401610b19565b6000818152600e6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610e3e90610e13906014908c8e613a2a565b610e1c91613a54565b60601c610e2d603060148d8f613a2a565b610e3691613a9c565b60201c61225e565b50505050505050505050565b610e543382612324565b50565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a6020526040812054610a1e906123c2565b610e8e61245c565b610e9860006124dd565b565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054610a1e565b600060608082808083610ef97f00000000000000000000000000000000000000000000000000000000000000006005612554565b610f247f00000000000000000000000000000000000000000000000000000000000000006006612554565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b6000610f74610fef565b65ffffffffffff168210610fe4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20667574757265206c6f6f6b7570000000000000006044820152606401610b19565b610a1e600b8361212d565b6000610a527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638381f58a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561105f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110839190613a00565b67ffffffffffffffff166125ff565b60606004805461098790613971565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a6020526040812054801561115d5773ffffffffffffffffffffffffffffffffffffffff83166000908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830190811061112657611126613ae2565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611160565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015611249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610b19565b610a3d8286868403611af6565b600033610a18818585611d80565b834211156112ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610b19565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf602082015273ffffffffffffffffffffffffffffffffffffffff88169181019190915260608101869052608081018590526000906113559061134d9060a00160405160208183030381529060405280519060200120612697565b8585856126df565b905061136081612707565b86146113c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610b19565b6113d28188612324565b50505050505050565b600f5460ff1615611418576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff000000000000000000000000000000000000000000909216919091176001179055565b834211156114d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610b19565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886115008c612707565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061156882612697565b90506000611578828787876126df565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461160f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610b19565b610e3e8a8a8a611af6565b6040517fc23ee3c300000000000000000000000000000000000000000000000000000000815261ffff821660048201526000602482018190526207a1206044830152907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c23ee3c3906064016040805180830381865afa1580156116ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116de9190613b11565b5092915050565b6116ed61245c565b61ffff82166000818152600d6020908152604080832085845290915280822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555183929133917f8794eff94e53ab710ae4d68742de559acf40b4882f232b4f9afa0831574eef4b9190a45050565b600061176f338361273c565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085901b16602082015260348101839052600090605401604051602081830303815290604052905060006117e77f000000000000000000000000000000000000000000000000000000000000000061161a565b600f546040517f4b5ca6f400000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811692634b5ca6f49285926118b9927f00000000000000000000000000000000000000000000000000000000000000009261010090049091169088906000906207a120907f0000000000000000000000000000000000000000000000000000000000000000903390600401613b35565b60206040518083038185885af11580156118d7573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906118fc9190613a00565b600f546040805161ffff7f00000000000000000000000000000000000000000000000000000000000000001681526020810188905261010090920473ffffffffffffffffffffffffffffffffffffffff90811683830152905167ffffffffffffffff93909316955087169133917f7f863bfd0e15eb79a67d8b8dae6046d95ec57572b68d9b117e171399813355e9919081900360600190a3505092915050565b604080518082019091526000808252602082015273ffffffffffffffffffffffffffffffffffffffff83166000908152600a60205260409020805463ffffffff84169081106119ed576119ed613ae2565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16918101919091529392505050565b611a4a61245c565b73ffffffffffffffffffffffffffffffffffffffff8116611aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610b19565b610e54816124dd565b73ffffffffffffffffffffffffffffffffffffffff8316611b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff8216611c3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611d7a5781811015611d6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610b19565b611d7a8484848403611af6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611e23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff8216611ec6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015611f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611d7a848484612759565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561205b57507f000000000000000000000000000000000000000000000000000000000000000046145b1561208557507f000000000000000000000000000000000000000000000000000000000000000090565b610a52604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b81546000908181600581111561218757600061214884612798565b6121529085613b9c565b600088815260209020909150869082015463ffffffff16111561217757809150612185565b6121828160016139ed565b92505b505b808210156121d457600061219b8383612880565b600088815260209020909150869082015463ffffffff1611156121c0578091506121ce565b6121cb8160016139ed565b92505b50612187565b80156122335760008681526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16612236565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169695505050505050565b612268828261289b565b6002547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015612316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f746573000000000000000000000000000000006064820152608401610b19565b611d7a600b61299a836129a6565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152600960208181526040808420805485845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611d7a828483612bab565b600063ffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f32206269747300000000000000000000000000000000000000000000000000006064820152608401610b19565b5090565b600c5473ffffffffffffffffffffffffffffffffffffffff163314610e98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610b19565b600c805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606060ff831461256e5761256783612d50565b9050610a1e565b81805461257a90613971565b80601f01602080910402602001604051908101604052809291908181526020018280546125a690613971565b80156125f35780601f106125c8576101008083540402835291602001916125f3565b820191906000526020600020905b8154815290600101906020018083116125d657829003601f168201915b50505050509050610a1e565b600065ffffffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201527f38206269747300000000000000000000000000000000000000000000000000006064820152608401610b19565b6000610a1e6126a4611ff5565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b60008060006126f087878787612d8f565b915091506126fd81612e7e565b5095945050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604090208054600181018255905b50919050565b6127468282613031565b611d7a600b6131fc836129a6565b505050565b73ffffffffffffffffffffffffffffffffffffffff83811660009081526009602052604080822054858416835291205461275492918216911683612bab565b6000816000036127aa57506000919050565b600060016127b784613208565b901c6001901b905060018184816127d0576127d0613baf565b048201901c905060018184816127e8576127e8613baf565b048201901c9050600181848161280057612800613baf565b048201901c9050600181848161281857612818613baf565b048201901c9050600181848161283057612830613baf565b048201901c9050600181848161284857612848613baf565b048201901c9050600181848161286057612860613baf565b048201901c9050610b518182858161287a5761287a613baf565b0461329c565b600061288f6002848418613bde565b610b51908484166139ed565b73ffffffffffffffffffffffffffffffffffffffff8216612918576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610b19565b806002600082825461292a91906139ed565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361299660008383612759565b5050565b6000610b5182846139ed565b82546000908190818115612a265760008781526020902082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160408051808201909152905463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166020820152612a3b565b60408051808201909152600080825260208201525b905080602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169350612a7084868863ffffffff16565b9250600082118015612a9a5750612a85610fef565b65ffffffffffff16816000015163ffffffff16145b15612b1257612aa8836132b2565b60008881526020902083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092166401000000000263ffffffff909216919091179055612ba1565b866040518060400160405280612b36612b29610fef565b65ffffffffffff166123c2565b63ffffffff168152602001612b4a866132b2565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b5050935093915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612be75750600081115b156127545773ffffffffffffffffffffffffffffffffffffffff831615612c9c5773ffffffffffffffffffffffffffffffffffffffff83166000908152600a602052604081208190612c3c906131fc856129a6565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612c91929190918252602082015260400190565b60405180910390a250505b73ffffffffffffffffffffffffffffffffffffffff8216156127545773ffffffffffffffffffffffffffffffffffffffff82166000908152600a602052604081208190612cec9061299a856129a6565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612d41929190918252602082015260400190565b60405180910390a25050505050565b60606000612d5d83613360565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612dc65750600090506003612e75565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612e1a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612e6e57600060019250925050612e75565b9150600090505b94509492505050565b6000816004811115612e9257612e92613c19565b03612e9a5750565b6001816004811115612eae57612eae613c19565b03612f15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610b19565b6002816004811115612f2957612f29613c19565b03612f90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610b19565b6003816004811115612fa457612fa4613c19565b03610e54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff82166130d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020548181101561318a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361275483600084612759565b6000610b518284613b9c565b600080608083901c1561321d57608092831c92015b604083901c1561322f57604092831c92015b602083901c1561324157602092831c92015b601083901c1561325357601092831c92015b600883901c1561326557600892831c92015b600483901c1561327757600492831c92015b600283901c1561328957600292831c92015b600183901c15610a1e5760010192915050565b60008183106132ab5781610b51565b5090919050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f32342062697473000000000000000000000000000000000000000000000000006064820152608401610b19565b600060ff8216601f811115610a1e576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000815180845260005b818110156133c7576020818501810151868301820152016133ab565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000610b5160208301846133a1565b803573ffffffffffffffffffffffffffffffffffffffff8116811461343c57600080fd5b919050565b6000806040838503121561345457600080fd5b61345d83613418565b946020939093013593505050565b60006020828403121561347d57600080fd5b5035919050565b60008060006060848603121561349957600080fd5b6134a284613418565b92506134b060208501613418565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613536576135366134c0565b604052919050565b6000601f838184011261355057600080fd5b8235602067ffffffffffffffff8083111561356d5761356d6134c0565b8260051b61357c8382016134ef565b938452868101830193838101908986111561359657600080fd5b84890192505b85831015613644578235848111156135b45760008081fd5b8901603f81018b136135c65760008081fd5b858101356040868211156135dc576135dc6134c0565b61360b887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c850116016134ef565b8281528d828486010111156136205760008081fd5b828285018a830137600092810189019290925250835250918401919084019061359c565b9998505050505050505050565b803561ffff8116811461343c57600080fd5b60008060008060008060a0878903121561367c57600080fd5b863567ffffffffffffffff8082111561369457600080fd5b818901915089601f8301126136a857600080fd5b8135818111156136b757600080fd5b8a60208285010111156136c957600080fd5b6020928301985096509088013590808211156136e457600080fd5b506136f189828a0161353e565b9450506040870135925061370760608801613651565b9150608087013590509295509295509295565b60006020828403121561372c57600080fd5b610b5182613418565b6000806040838503121561374857600080fd5b61345d83613651565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e08184015261378d60e084018a6133a1565b838103604085015261379f818a6133a1565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c0860152855180825283870192509083019060005b818110156137fe578351835292840192918401916001016137e2565b50909c9b505050505050505050505050565b803560ff8116811461343c57600080fd5b60008060008060008060c0878903121561383a57600080fd5b61384387613418565b9550602087013594506040870135935061385f60608801613810565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561389457600080fd5b61389d88613418565b96506138ab60208901613418565b955060408801359450606088013593506138c760808901613810565b925060a0880135915060c0880135905092959891949750929550565b6000602082840312156138f557600080fd5b610b5182613651565b6000806040838503121561391157600080fd5b61391a83613418565b915061392860208401613418565b90509250929050565b6000806040838503121561394457600080fd5b61394d83613418565b9150602083013563ffffffff8116811461396657600080fd5b809150509250929050565b600181811c9082168061398557607f821691505b602082108103612736577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610a1e57610a1e6139be565b600060208284031215613a1257600080fd5b815167ffffffffffffffff81168114610b5157600080fd5b60008085851115613a3a57600080fd5b83861115613a4757600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015613a945780818660140360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000813581811691601c851015613a9457601c9490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008060408385031215613b2457600080fd5b505080516020909101519092909150565b600061ffff808a16835273ffffffffffffffffffffffffffffffffffffffff808a16602085015260e06040850152613b7060e085018a6133a1565b925087606085015286608085015281861660a085015280851660c0850152505098975050505050505050565b81810381811115610a1e57610a1e6139be565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082613c14577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220967a37d5772516b27cf468816a74e0d73faee0353e79fa5b02c0bcae57322d1964736f6c63430008140033',
    sourceMap:
      '560:3461:110:-:0;;;849:31;;;-1:-1:-1;;849:31:110;;;1569:376;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1846:12;1860;1895:6;1768:8;1820:5;1856:4:64;3178:431:77;;;;;;;;;;;;;-1:-1:-1;;;3178:431:77;;;1788:5:110;1795:7;2054:5:62;2046;:13;;;;;;:::i;:::-;-1:-1:-1;2069:7:62;:17;2079:7;2069;:17;:::i;:::-;-1:-1:-1;3251:45:77;;-1:-1:-1;3251:4:77;;-1:-1:-1;3282:13:77;3251:30;:45::i;:::-;3243:53;;3317:51;:7;3351:16;3317:33;:51::i;:::-;3306:62;;3392:22;;;;;;;;;;3378:36;;3441:25;;;;;;3424:42;;3494:13;3477:30;;3542:23;4077:11;;4090:14;;4054:81;;;1929:95;4054:81;;;5295:25:137;5336:18;;;5329:34;;;;5379:18;;;5372:34;4106:13:77;5422:18:137;;;5415:34;4129:4:77;5465:19:137;;;5458:61;4018:7:77;;5267:19:137;;4054:81:77;;;;;;;;;;;;4044:92;;;;;;4037:99;;3963:180;;3542:23;3517:48;;-1:-1:-1;;3597:4:77;3575:27;;-1:-1:-1;936:32:48;719:10:71;936:18:48;:32::i;:::-;-1:-1:-1;;;;;397:45:106;;;1039:24:113::1;1057:5:::0;1039:17:::1;:24::i;:::-;-1:-1:-1::0;668:27:114;;;;;;701;;;-1:-1:-1;;;;;;;;1911:29:110::5;;::::0;-1:-1:-1;560:3461:110;;-1:-1:-1;;560:3461:110;2895:341:73;2991:11;3040:2;3024:5;3018:19;:24;3014:216;;;3065:20;3079:5;3065:13;:20::i;:::-;3058:27;;;;3014:216;3142:5;3116:46;3157:5;3142;3116:46;:::i;:::-;-1:-1:-1;1371:66:73;;-1:-1:-1;3014:216:73;2895:341;;;;:::o;2426:187:48:-;2518:6;;;-1:-1:-1;;;;;2534:17:48;;;-1:-1:-1;;;;;;2534:17:48;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;2074:198::-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:48;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:48;;5732:2:137;2154:73:48::1;::::0;::::1;5714:21:137::0;5771:2;5751:18;;;5744:30;5810:34;5790:18;;;5783:62;-1:-1:-1;;;5861:18:137;;;5854:36;5907:19;;2154:73:48::1;;;;;;;;;2237:28;2256:8:::0;2237:18:::1;:28::i;:::-;2074:198:::0;:::o;1689:286:73:-;1754:11;1777:17;1803:3;1777:30;;1835:2;1821:4;:11;:16;1817:72;;;1874:3;1860:18;;-1:-1:-1;;;1860:18:73;;;;;;;;:::i;1817:72::-;1955:11;;1938:13;1955:4;1938:13;:::i;:::-;1930:36;;1689:286;-1:-1:-1;;;1689:286:73:o;1359:130:48:-;1273:6;;-1:-1:-1;;;;;1273:6:48;719:10:71;1422:23:48;1414:68;;;;-1:-1:-1;;;1414:68:48;;6842:2:137;1414:68:48;;;6824:21:137;;;6861:18;;;6854:30;6920:34;6900:18;;;6893:62;6972:18;;1414:68:48;6640:356:137;1414:68:48;1359:130::o;14:127:137:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;231:1;241:113;255:6;252:1;249:13;241:113;;;331:11;;;325:18;312:11;;;305:39;277:2;270:10;241:113;;;-1:-1:-1;;388:1:137;370:16;;363:27;146:250::o;401:699::-;455:5;508:3;501:4;493:6;489:17;485:27;475:55;;526:1;523;516:12;475:55;549:13;;-1:-1:-1;;;;;611:10:137;;;608:36;;;624:18;;:::i;:::-;699:2;693:9;667:2;753:13;;-1:-1:-1;;749:22:137;;;773:2;745:31;741:40;729:53;;;797:18;;;817:22;;;794:46;791:72;;;843:18;;:::i;:::-;883:10;879:2;872:22;918:2;910:6;903:18;964:3;957:4;952:2;944:6;940:15;936:26;933:35;930:55;;;981:1;978;971:12;930:55;994:76;1067:2;1060:4;1052:6;1048:17;1041:4;1033:6;1029:17;994:76;:::i;:::-;1088:6;401:699;-1:-1:-1;;;;;;401:699:137:o;1105:177::-;1184:13;;-1:-1:-1;;;;;1226:31:137;;1216:42;;1206:70;;1272:1;1269;1262:12;1206:70;1105:177;;;:::o;1287:163::-;1365:13;;1418:6;1407:18;;1397:29;;1387:57;;1440:1;1437;1430:12;1455:987;1597:6;1605;1613;1621;1629;1637;1645;1698:3;1686:9;1677:7;1673:23;1669:33;1666:53;;;1715:1;1712;1705:12;1666:53;1742:16;;-1:-1:-1;;;;;1807:14:137;;;1804:34;;;1834:1;1831;1824:12;1804:34;1857:61;1910:7;1901:6;1890:9;1886:22;1857:61;:::i;:::-;1847:71;;1964:2;1953:9;1949:18;1943:25;1927:41;;1993:2;1983:8;1980:16;1977:36;;;2009:1;2006;1999:12;1977:36;;2032:63;2087:7;2076:8;2065:9;2061:24;2032:63;:::i;:::-;2022:73;;;2114:49;2159:2;2148:9;2144:18;2114:49;:::i;:::-;2104:59;;2182:49;2227:2;2216:9;2212:18;2182:49;:::i;:::-;2172:59;;2250:49;2294:3;2283:9;2279:19;2250:49;:::i;:::-;2240:59;;2318:49;2362:3;2351:9;2347:19;2318:49;:::i;:::-;2308:59;;2386:50;2431:3;2420:9;2416:19;2386:50;:::i;:::-;2376:60;;1455:987;;;;;;;;;;:::o;2447:380::-;2526:1;2522:12;;;;2569;;;2590:61;;2644:4;2636:6;2632:17;2622:27;;2590:61;2697:2;2689:6;2686:14;2666:18;2663:38;2660:161;;2743:10;2738:3;2734:20;2731:1;2724:31;2778:4;2775:1;2768:15;2806:4;2803:1;2796:15;2660:161;;2447:380;;;:::o;2958:545::-;3060:2;3055:3;3052:11;3049:448;;;3096:1;3121:5;3117:2;3110:17;3166:4;3162:2;3152:19;3236:2;3224:10;3220:19;3217:1;3213:27;3207:4;3203:38;3272:4;3260:10;3257:20;3254:47;;;-1:-1:-1;3295:4:137;3254:47;3350:2;3345:3;3341:12;3338:1;3334:20;3328:4;3324:31;3314:41;;3405:82;3423:2;3416:5;3413:13;3405:82;;;3468:17;;;3449:1;3438:13;3405:82;;;3409:3;;;3049:448;2958:545;;;:::o;3679:1352::-;3799:10;;-1:-1:-1;;;;;3821:30:137;;3818:56;;;3854:18;;:::i;:::-;3883:97;3973:6;3933:38;3965:4;3959:11;3933:38;:::i;:::-;3927:4;3883:97;:::i;:::-;4035:4;;4099:2;4088:14;;4116:1;4111:663;;;;4818:1;4835:6;4832:89;;;-1:-1:-1;4887:19:137;;;4881:26;4832:89;-1:-1:-1;;3636:1:137;3632:11;;;3628:24;3624:29;3614:40;3660:1;3656:11;;;3611:57;4934:81;;4081:944;;4111:663;2905:1;2898:14;;;2942:4;2929:18;;-1:-1:-1;;4147:20:137;;;4265:236;4279:7;4276:1;4273:14;4265:236;;;4368:19;;;4362:26;4347:42;;4460:27;;;;4428:1;4416:14;;;;4295:19;;4265:236;;;4269:3;4529:6;4520:7;4517:19;4514:201;;;4590:19;;;4584:26;-1:-1:-1;;4673:1:137;4669:14;;;4685:3;4665:24;4661:37;4657:42;4642:58;4627:74;;4514:201;-1:-1:-1;;;;;4761:1:137;4745:14;;;4741:22;4728:36;;-1:-1:-1;3679:1352:137:o;5937:396::-;6086:2;6075:9;6068:21;6049:4;6118:6;6112:13;6161:6;6156:2;6145:9;6141:18;6134:34;6177:79;6249:6;6244:2;6233:9;6229:18;6224:2;6216:6;6212:15;6177:79;:::i;:::-;6317:2;6296:15;-1:-1:-1;;6292:29:137;6277:45;;;;6324:2;6273:54;;5937:396;-1:-1:-1;;5937:396:137:o;6338:297::-;6456:12;;6503:4;6492:16;;;6486:23;;6456:12;6521:16;;6518:111;;;-1:-1:-1;;6595:4:137;6591:17;;;;6588:1;6584:25;6580:38;6569:50;;6338:297;-1:-1:-1;6338:297:137:o;6640:356::-;560:3461:110;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      '0x6080604052600436106102c65760003560e01c80637ecebe0011610179578063c3cda520116100d6578063dd12d68b1161008a578063f1127ed811610064578063f1127ed8146108c5578063f2fde38b14610924578063f81d82c61461094457600080fd5b8063dd12d68b1461083f578063dd62ed3e1461085f578063e512e7d6146108b257600080fd5b8063c4d66de8116100bb578063c4d66de8146107df578063d505accf146107ff578063d75a98291461081f57600080fd5b8063c3cda52014610778578063c41704701461079857600080fd5b8063952888831161012d5780639ab24eb0116101125780639ab24eb014610718578063a457c2d714610738578063a9059cbb1461075857600080fd5b806395288883146106e957806395d89b411461070357600080fd5b80638da5cb5b1161015e5780638da5cb5b146106725780638e539e8c1461069d57806391ddadf4146106bd57600080fd5b80637ecebe001461062a57806384b0196e1461064a57600080fd5b80633a46b1a8116102275780635c19a95c116101db5780636fcfff45116101c05780636fcfff451461059d57806370a08231146105d2578063715018a61461061557600080fd5b80635c19a95c146105425780636464e3c91461056257600080fd5b80634bf5d7e91161020c5780634bf5d7e9146104c5578063529dca32146104da578063587cde1e146104fc57600080fd5b80633a46b1a814610471578063477185901461049157600080fd5b806323b872dd1161027e578063313ce56711610263578063313ce567146104205780633644e5151461043c578063395093511461045157600080fd5b806323b872dd146103ce578063248a20f6146103ee57600080fd5b80630f1f9cfc116102af5780630f1f9cfc14610326578063180f6cc21461037f57806318160ddd146103af57600080fd5b806306fdde03146102cb578063095ea7b3146102f6575b600080fd5b3480156102d757600080fd5b506102e0610978565b6040516102ed9190613405565b60405180910390f35b34801561030257600080fd5b50610316610311366004613441565b610a0a565b60405190151581526020016102ed565b34801561033257600080fd5b5061035a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102ed565b34801561038b57600080fd5b5061031661039a36600461346b565b600e6020526000908152604090205460ff1681565b3480156103bb57600080fd5b506002545b6040519081526020016102ed565b3480156103da57600080fd5b506103166103e9366004613484565b610a24565b3480156103fa57600080fd5b50600f5461035a90610100900473ffffffffffffffffffffffffffffffffffffffff1681565b34801561042c57600080fd5b50604051601281526020016102ed565b34801561044857600080fd5b506103c0610a48565b34801561045d57600080fd5b5061031661046c366004613441565b610a57565b34801561047d57600080fd5b506103c061048c366004613441565b610aa3565b34801561049d57600080fd5b5061035a7f000000000000000000000000000000000000000000000000000000000000000081565b3480156104d157600080fd5b506102e0610b58565b3480156104e657600080fd5b506104fa6104f5366004613663565b610ca2565b005b34801561050857600080fd5b5061035a61051736600461371a565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600960205260409020541690565b34801561054e57600080fd5b506104fa61055d36600461371a565b610e4a565b34801561056e57600080fd5b5061031661057d366004613735565b600d60209081526000928352604080842090915290825290205460ff1681565b3480156105a957600080fd5b506105bd6105b836600461371a565b610e57565b60405163ffffffff90911681526020016102ed565b3480156105de57600080fd5b506103c06105ed36600461371a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561062157600080fd5b506104fa610e86565b34801561063657600080fd5b506103c061064536600461371a565b610e9a565b34801561065657600080fd5b5061065f610ec5565b6040516102ed9796959493929190613751565b34801561067e57600080fd5b50600c5473ffffffffffffffffffffffffffffffffffffffff1661035a565b3480156106a957600080fd5b506103c06106b836600461346b565b610f6a565b3480156106c957600080fd5b506106d2610fef565b60405165ffffffffffff90911681526020016102ed565b3480156106f557600080fd5b50600f546103169060ff1681565b34801561070f57600080fd5b506102e0611092565b34801561072457600080fd5b506103c061073336600461371a565b6110a1565b34801561074457600080fd5b50610316610753366004613441565b611185565b34801561076457600080fd5b50610316610773366004613441565b611256565b34801561078457600080fd5b506104fa610793366004613821565b611264565b3480156107a457600080fd5b506107cc7f000000000000000000000000000000000000000000000000000000000000000081565b60405161ffff90911681526020016102ed565b3480156107eb57600080fd5b506104fa6107fa36600461371a565b6113db565b34801561080b57600080fd5b506104fa61081a366004613879565b611467565b34801561082b57600080fd5b506103c061083a3660046138e3565b61161a565b34801561084b57600080fd5b506104fa61085a366004613735565b6116e5565b34801561086b57600080fd5b506103c061087a3660046138fe565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6103c06108c0366004613441565b611763565b3480156108d157600080fd5b506108e56108e0366004613931565b61199c565b60408051825163ffffffff1681526020928301517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1692810192909252016102ed565b34801561093057600080fd5b506104fa61093f36600461371a565b611a42565b34801561095057600080fd5b506107cc7f000000000000000000000000000000000000000000000000000000000000000081565b60606003805461098790613971565b80601f01602080910402602001604051908101604052809291908181526020018280546109b390613971565b8015610a005780601f106109d557610100808354040283529160200191610a00565b820191906000526020600020905b8154815290600101906020018083116109e357829003601f168201915b5050505050905090565b600033610a18818585611af6565b60019150505b92915050565b600033610a32858285611ca9565b610a3d858585611d80565b506001949350505050565b6000610a52611ff5565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610a189082908690610a9e9087906139ed565b611af6565b6000610aad610fef565b65ffffffffffff168210610b22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20667574757265206c6f6f6b75700000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152600a60205260409020610b51908361212d565b9392505050565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638381f58a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be99190613a00565b67ffffffffffffffff16610bfb610fef565b65ffffffffffff1614610c6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4552433230566f7465733a2062726f6b656e20636c6f636b206d6f64650000006044820152606401610b19565b5060408051808201909152601e81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d6569703135353a310000602082015290565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d11576040517f81316de100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61ffff82166000908152600d602090815260408083208684529091529020548290849060ff16801580610d42575081155b15610d7c576040517f0bcd7ac600000000000000000000000000000000000000000000000000000000815260048101839052602401610b19565b6000848152600e6020526040902054849060ff1615610dca576040517f1a20d3e600000000000000000000000000000000000000000000000000000000815260048101829052602401610b19565b6000818152600e6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055610e3e90610e13906014908c8e613a2a565b610e1c91613a54565b60601c610e2d603060148d8f613a2a565b610e3691613a9c565b60201c61225e565b50505050505050505050565b610e543382612324565b50565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a6020526040812054610a1e906123c2565b610e8e61245c565b610e9860006124dd565b565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260076020526040812054610a1e565b600060608082808083610ef97f00000000000000000000000000000000000000000000000000000000000000006005612554565b610f247f00000000000000000000000000000000000000000000000000000000000000006006612554565b604080516000808252602082019092527f0f000000000000000000000000000000000000000000000000000000000000009b939a50919850469750309650945092509050565b6000610f74610fef565b65ffffffffffff168210610fe4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20667574757265206c6f6f6b7570000000000000006044820152606401610b19565b610a1e600b8361212d565b6000610a527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638381f58a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561105f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110839190613a00565b67ffffffffffffffff166125ff565b60606004805461098790613971565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600a6020526040812054801561115d5773ffffffffffffffffffffffffffffffffffffffff83166000908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff830190811061112657611126613ae2565b60009182526020909120015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611160565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015611249576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610b19565b610a3d8286868403611af6565b600033610a18818585611d80565b834211156112ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610b19565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf602082015273ffffffffffffffffffffffffffffffffffffffff88169181019190915260608101869052608081018590526000906113559061134d9060a00160405160208183030381529060405280519060200120612697565b8585856126df565b905061136081612707565b86146113c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610b19565b6113d28188612324565b50505050505050565b600f5460ff1615611418576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600f805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff000000000000000000000000000000000000000000909216919091176001179055565b834211156114d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610b19565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886115008c612707565b60408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061156882612697565b90506000611578828787876126df565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461160f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610b19565b610e3e8a8a8a611af6565b6040517fc23ee3c300000000000000000000000000000000000000000000000000000000815261ffff821660048201526000602482018190526207a1206044830152907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c23ee3c3906064016040805180830381865afa1580156116ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116de9190613b11565b5092915050565b6116ed61245c565b61ffff82166000818152600d6020908152604080832085845290915280822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555183929133917f8794eff94e53ab710ae4d68742de559acf40b4882f232b4f9afa0831574eef4b9190a45050565b600061176f338361273c565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085901b16602082015260348101839052600090605401604051602081830303815290604052905060006117e77f000000000000000000000000000000000000000000000000000000000000000061161a565b600f546040517f4b5ca6f400000000000000000000000000000000000000000000000000000000815291925073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811692634b5ca6f49285926118b9927f00000000000000000000000000000000000000000000000000000000000000009261010090049091169088906000906207a120907f0000000000000000000000000000000000000000000000000000000000000000903390600401613b35565b60206040518083038185885af11580156118d7573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906118fc9190613a00565b600f546040805161ffff7f00000000000000000000000000000000000000000000000000000000000000001681526020810188905261010090920473ffffffffffffffffffffffffffffffffffffffff90811683830152905167ffffffffffffffff93909316955087169133917f7f863bfd0e15eb79a67d8b8dae6046d95ec57572b68d9b117e171399813355e9919081900360600190a3505092915050565b604080518082019091526000808252602082015273ffffffffffffffffffffffffffffffffffffffff83166000908152600a60205260409020805463ffffffff84169081106119ed576119ed613ae2565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16918101919091529392505050565b611a4a61245c565b73ffffffffffffffffffffffffffffffffffffffff8116611aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610b19565b610e54816124dd565b73ffffffffffffffffffffffffffffffffffffffff8316611b98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff8216611c3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611d7a5781811015611d6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610b19565b611d7a8484848403611af6565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611e23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff8216611ec6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015611f7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611d7a848484612759565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561205b57507f000000000000000000000000000000000000000000000000000000000000000046145b1561208557507f000000000000000000000000000000000000000000000000000000000000000090565b610a52604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b81546000908181600581111561218757600061214884612798565b6121529085613b9c565b600088815260209020909150869082015463ffffffff16111561217757809150612185565b6121828160016139ed565b92505b505b808210156121d457600061219b8383612880565b600088815260209020909150869082015463ffffffff1611156121c0578091506121ce565b6121cb8160016139ed565b92505b50612187565b80156122335760008681526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff015464010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16612236565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169695505050505050565b612268828261289b565b6002547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1015612316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f746573000000000000000000000000000000006064820152608401610b19565b611d7a600b61299a836129a6565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152600960208181526040808420805485845282862054949093528787167fffffffffffffffffffffffff00000000000000000000000000000000000000008416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611d7a828483612bab565b600063ffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201527f32206269747300000000000000000000000000000000000000000000000000006064820152608401610b19565b5090565b600c5473ffffffffffffffffffffffffffffffffffffffff163314610e98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610b19565b600c805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b606060ff831461256e5761256783612d50565b9050610a1e565b81805461257a90613971565b80601f01602080910402602001604051908101604052809291908181526020018280546125a690613971565b80156125f35780601f106125c8576101008083540402835291602001916125f3565b820191906000526020600020905b8154815290600101906020018083116125d657829003601f168201915b50505050509050610a1e565b600065ffffffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203460448201527f38206269747300000000000000000000000000000000000000000000000000006064820152608401610b19565b6000610a1e6126a4611ff5565b836040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b60008060006126f087878787612d8f565b915091506126fd81612e7e565b5095945050505050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604090208054600181018255905b50919050565b6127468282613031565b611d7a600b6131fc836129a6565b505050565b73ffffffffffffffffffffffffffffffffffffffff83811660009081526009602052604080822054858416835291205461275492918216911683612bab565b6000816000036127aa57506000919050565b600060016127b784613208565b901c6001901b905060018184816127d0576127d0613baf565b048201901c905060018184816127e8576127e8613baf565b048201901c9050600181848161280057612800613baf565b048201901c9050600181848161281857612818613baf565b048201901c9050600181848161283057612830613baf565b048201901c9050600181848161284857612848613baf565b048201901c9050600181848161286057612860613baf565b048201901c9050610b518182858161287a5761287a613baf565b0461329c565b600061288f6002848418613bde565b610b51908484166139ed565b73ffffffffffffffffffffffffffffffffffffffff8216612918576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610b19565b806002600082825461292a91906139ed565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361299660008383612759565b5050565b6000610b5182846139ed565b82546000908190818115612a265760008781526020902082017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160408051808201909152905463ffffffff8116825264010000000090047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166020820152612a3b565b60408051808201909152600080825260208201525b905080602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169350612a7084868863ffffffff16565b9250600082118015612a9a5750612a85610fef565b65ffffffffffff16816000015163ffffffff16145b15612b1257612aa8836132b2565b60008881526020902083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092166401000000000263ffffffff909216919091179055612ba1565b866040518060400160405280612b36612b29610fef565b65ffffffffffff166123c2565b63ffffffff168152602001612b4a866132b2565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff90811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b5050935093915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015612be75750600081115b156127545773ffffffffffffffffffffffffffffffffffffffff831615612c9c5773ffffffffffffffffffffffffffffffffffffffff83166000908152600a602052604081208190612c3c906131fc856129a6565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612c91929190918252602082015260400190565b60405180910390a250505b73ffffffffffffffffffffffffffffffffffffffff8216156127545773ffffffffffffffffffffffffffffffffffffffff82166000908152600a602052604081208190612cec9061299a856129a6565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612d41929190918252602082015260400190565b60405180910390a25050505050565b60606000612d5d83613360565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612dc65750600090506003612e75565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612e1a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612e6e57600060019250925050612e75565b9150600090505b94509492505050565b6000816004811115612e9257612e92613c19565b03612e9a5750565b6001816004811115612eae57612eae613c19565b03612f15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610b19565b6002816004811115612f2957612f29613c19565b03612f90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610b19565b6003816004811115612fa457612fa4613c19565b03610e54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff82166130d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020548181101561318a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610b19565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361275483600084612759565b6000610b518284613b9c565b600080608083901c1561321d57608092831c92015b604083901c1561322f57604092831c92015b602083901c1561324157602092831c92015b601083901c1561325357601092831c92015b600883901c1561326557600892831c92015b600483901c1561327757600492831c92015b600283901c1561328957600292831c92015b600183901c15610a1e5760010192915050565b60008183106132ab5781610b51565b5090919050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115612458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203260448201527f32342062697473000000000000000000000000000000000000000000000000006064820152608401610b19565b600060ff8216601f811115610a1e576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000815180845260005b818110156133c7576020818501810151868301820152016133ab565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000610b5160208301846133a1565b803573ffffffffffffffffffffffffffffffffffffffff8116811461343c57600080fd5b919050565b6000806040838503121561345457600080fd5b61345d83613418565b946020939093013593505050565b60006020828403121561347d57600080fd5b5035919050565b60008060006060848603121561349957600080fd5b6134a284613418565b92506134b060208501613418565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715613536576135366134c0565b604052919050565b6000601f838184011261355057600080fd5b8235602067ffffffffffffffff8083111561356d5761356d6134c0565b8260051b61357c8382016134ef565b938452868101830193838101908986111561359657600080fd5b84890192505b85831015613644578235848111156135b45760008081fd5b8901603f81018b136135c65760008081fd5b858101356040868211156135dc576135dc6134c0565b61360b887fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08c850116016134ef565b8281528d828486010111156136205760008081fd5b828285018a830137600092810189019290925250835250918401919084019061359c565b9998505050505050505050565b803561ffff8116811461343c57600080fd5b60008060008060008060a0878903121561367c57600080fd5b863567ffffffffffffffff8082111561369457600080fd5b818901915089601f8301126136a857600080fd5b8135818111156136b757600080fd5b8a60208285010111156136c957600080fd5b6020928301985096509088013590808211156136e457600080fd5b506136f189828a0161353e565b9450506040870135925061370760608801613651565b9150608087013590509295509295509295565b60006020828403121561372c57600080fd5b610b5182613418565b6000806040838503121561374857600080fd5b61345d83613651565b7fff00000000000000000000000000000000000000000000000000000000000000881681526000602060e08184015261378d60e084018a6133a1565b838103604085015261379f818a6133a1565b6060850189905273ffffffffffffffffffffffffffffffffffffffff8816608086015260a0850187905284810360c0860152855180825283870192509083019060005b818110156137fe578351835292840192918401916001016137e2565b50909c9b505050505050505050505050565b803560ff8116811461343c57600080fd5b60008060008060008060c0878903121561383a57600080fd5b61384387613418565b9550602087013594506040870135935061385f60608801613810565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561389457600080fd5b61389d88613418565b96506138ab60208901613418565b955060408801359450606088013593506138c760808901613810565b925060a0880135915060c0880135905092959891949750929550565b6000602082840312156138f557600080fd5b610b5182613651565b6000806040838503121561391157600080fd5b61391a83613418565b915061392860208401613418565b90509250929050565b6000806040838503121561394457600080fd5b61394d83613418565b9150602083013563ffffffff8116811461396657600080fd5b809150509250929050565b600181811c9082168061398557607f821691505b602082108103612736577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b80820180821115610a1e57610a1e6139be565b600060208284031215613a1257600080fd5b815167ffffffffffffffff81168114610b5157600080fd5b60008085851115613a3a57600080fd5b83861115613a4757600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008135818116916014851015613a945780818660140360031b1b83161692505b505092915050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000813581811691601c851015613a9457601c9490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008060408385031215613b2457600080fd5b505080516020909101519092909150565b600061ffff808a16835273ffffffffffffffffffffffffffffffffffffffff808a16602085015260e06040850152613b7060e085018a6133a1565b925087606085015286608085015281861660a085015280851660c0850152505098975050505050505050565b81810381811115610a1e57610a1e6139be565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082613c14577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea2646970667358221220967a37d5772516b27cf468816a74e0d73faee0353e79fa5b02c0bcae57322d1964736f6c63430008140033',
    sourceMap:
      '560:3461:110:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98:62;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4444:197;;;;;;;;;;-1:-1:-1;4444:197:62;;;;;:::i;:::-;;:::i;:::-;;;1351:14:137;;1344:22;1326:41;;1314:2;1299:18;4444:197:62;1186:187:137;238:50:106;;;;;;;;;;;;;;;;;;1580:42:137;1568:55;;;1550:74;;1538:2;1523:18;238:50:106;1378:252:137;818:53:113;;;;;;;;;;-1:-1:-1;818:53:113;;;;;:::i;:::-;;;;;;;;;;;;;;;;3255:106:62;;;;;;;;;;-1:-1:-1;3342:12:62;;3255:106;;;1966:25:137;;;1954:2;1939:18;3255:106:62;1820:177:137;5203:256:62;;;;;;;;;;-1:-1:-1;5203:256:62;;;;;:::i;:::-;;:::i;922:32:110:-;;;;;;;;;;-1:-1:-1;922:32:110;;;;;;;;;;;3104:91:62;;;;;;;;;;-1:-1:-1;3104:91:62;;3186:2;2708:36:137;;2696:2;2681:18;3104:91:62;2566:184:137;2867:113:64;;;;;;;;;;;;;:::i;5854:234:62:-;;;;;;;;;;-1:-1:-1;5854:234:62;;;;;:::i;:::-;;:::i;3466:248:65:-;;;;;;;;;;-1:-1:-1;3466:248:65;;;;;:::i;:::-;;:::i;710:34:110:-;;;;;;;;;;;;;;;2979:246;;;;;;;;;;;;;:::i;2397:381::-;;;;;;;;;;-1:-1:-1;2397:381:110;;;;;:::i;:::-;;:::i;:::-;;2838:126:65;;;;;;;;;;-1:-1:-1;2838:126:65;;;;;:::i;:::-;2938:19;;;;2912:7;2938:19;;;:10;:19;;;;;;;;2838:126;6275:112;;;;;;;;;;-1:-1:-1;6275:112:65;;;;;:::i;:::-;;:::i;674:68:113:-;;;;;;;;;;-1:-1:-1;674:68:113;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;2601:149:65;;;;;;;;;;-1:-1:-1;2601:149:65;;;;;:::i;:::-;;:::i;:::-;;;7181:10:137;7169:23;;;7151:42;;7139:2;7124:18;2601:149:65;7007:192:137;3419:125:62;;;;;;;;;;-1:-1:-1;3419:125:62;;;;;:::i;:::-;3519:18;;3493:7;3519:18;;;;;;;;;;;;3419:125;1824:101:48;;;;;;;;;;;;;:::i;2617:126:64:-;;;;;;;;;;-1:-1:-1;2617:126:64;;;;;:::i;:::-;;:::i;5021:633:77:-;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;:::i;1201:85:48:-;;;;;;;;;;-1:-1:-1;1273:6:48;;;;1201:85;;3976:239:65;;;;;;;;;;-1:-1:-1;3976:239:65;;;;;:::i;:::-;;:::i;2830:109:110:-;;;;;;;;;;;;;:::i;:::-;;;8903:14:137;8891:27;;;8873:46;;8861:2;8846:18;2830:109:110;8729:196:137;849:31:110;;;;;;;;;;-1:-1:-1;849:31:110;;;;;;;;2369:102:62;;;;;;;;;;;;;:::i;3043:243:65:-;;;;;;;;;;-1:-1:-1;3043:243:65;;;;;:::i;:::-;;:::i;6575:427:62:-;;;;;;;;;;-1:-1:-1;6575:427:62;;;;;:::i;:::-;;:::i;3740:189::-;;;;;;;;;;-1:-1:-1;3740:189:62;;;;;:::i;:::-;;:::i;6464:574:65:-;;;;;;;;;;-1:-1:-1;6464:574:65;;;;;:::i;:::-;;:::i;318:36:114:-;;;;;;;;;;;;;;;;;;9801:6:137;9789:19;;;9771:38;;9759:2;9744:18;318:36:114;9627:188:137;2084:172:110;;;;;;;;;;-1:-1:-1;2084:172:110;;;;;:::i;:::-;;:::i;1930:626:64:-;;;;;;;;;;-1:-1:-1;1930:626:64;;;;;:::i;:::-;;:::i;812:171:114:-;;;;;;;;;;-1:-1:-1;812:171:114;;;;;:::i;:::-;;:::i;2016:222:113:-;;;;;;;;;;-1:-1:-1;2016:222:113;;;;;:::i;:::-;;:::i;3987:149:62:-;;;;;;;;;;-1:-1:-1;3987:149:62;;;;;:::i;:::-;4102:18;;;;4076:7;4102:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3987:149;3415:604:110;;;;;;:::i;:::-;;:::i;2378:148:65:-;;;;;;;;;;-1:-1:-1;2378:148:65;;;;;:::i;:::-;;:::i;:::-;;;;11466:13:137;;11481:10;11462:30;11444:49;;11553:4;11541:17;;;11535:24;11561:58;11531:89;11509:20;;;11502:119;;;;11417:18;2378:148:65;11240:387:137;2074:198:48;;;;;;;;;;-1:-1:-1;2074:198:48;;;;;:::i;:::-;;:::i;222:36:114:-;;;;;;;;;;;;;;;2158:98:62;2212:13;2244:5;2237:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98;:::o;4444:197::-;4527:4;719:10:71;4581:32:62;719:10:71;4597:7:62;4606:6;4581:8;:32::i;:::-;4630:4;4623:11;;;4444:197;;;;;:::o;5203:256::-;5300:4;719:10:71;5356:38:62;5372:4;719:10:71;5387:6:62;5356:15;:38::i;:::-;5404:27;5414:4;5420:2;5424:6;5404:9;:27::i;:::-;-1:-1:-1;5448:4:62;;5203:256;-1:-1:-1;;;;5203:256:62:o;2867:113:64:-;2927:7;2953:20;:18;:20::i;:::-;2946:27;;2867:113;:::o;5854:234:62:-;719:10:71;5942:4:62;4102:18;;;:11;:18;;;;;;;;;:27;;;;;;;;;;5942:4;;719:10:71;5996:64:62;;719:10:71;;4102:27:62;;6021:38;;6049:10;;6021:38;:::i;:::-;5996:8;:64::i;3466:248:65:-;3562:7;3601;:5;:7::i;:::-;3589:19;;:9;:19;3581:57;;;;;;;12595:2:137;3581:57:65;;;12577:21:137;12634:2;12614:18;;;12607:30;12673:27;12653:18;;;12646:55;12718:18;;3581:57:65;;;;;;;;;3674:21;;;;;;;:12;:21;;;;;3655:52;;3697:9;3655:18;:52::i;:::-;3648:59;3466:248;-1:-1:-1;;;3466:248:65:o;2979:246:110:-;3039:13;3124:8;:15;;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3113:28;;:7;:5;:7::i;:::-;:28;;;3105:70;;;;;;;13242:2:137;3105:70:110;;;13224:21:137;13281:2;13261:18;;;13254:30;13320:31;13300:18;;;13293:59;13369:18;;3105:70:110;13040:353:137;3105:70:110;-1:-1:-1;3181:39:110;;;;;;;;;;;;;;;;;;2979:246::o;2397:381::-;2342:10:113;:39;2364:16;2342:39;;2338:72;;2390:20;;;;;;;;;;;;;;2338:72;2589:30:::1;::::0;::::1;2569:17;2589:30:::0;;;:17:::1;:30;::::0;;;;;;;:45;;;;;;;;;2634:11:110;;2647:13;;2589:45:113::1;;2644:13:::0;::::1;::::0;:71:::1;;-1:-1:-1::0;2661:54:113;;2644:71:::1;2640:132;;;2732:33;::::0;::::1;::::0;;::::1;::::0;::::1;1966:25:137::0;;;1939:18;;2732:33:113::1;1820:177:137::0;2640:132:113::1;2842:35:::2;::::0;;;:21:::2;:35;::::0;;;;;2680:12:110;;2842:35:113::2;;2838:78;;;2886:30;::::0;::::2;::::0;;::::2;::::0;::::2;1966:25:137::0;;;1939:18;;2886:30:113::2;1820:177:137::0;2838:78:113::2;2922:35;::::0;;;:21:::2;:35;::::0;;;;:42;;;::::2;2960:4;2922:42;::::0;;2702:71:110::3;::::0;2724:12:::3;::::0;2733:2:::3;::::0;2724:7;;:12:::3;:::i;:::-;2716:21;::::0;::::3;:::i;:::-;2708:30;;2756:14;2767:2;2764;2756:7:::0;;:14:::3;:::i;:::-;2748:23;::::0;::::3;:::i;:::-;2740:32;;2702:5;:71::i;:::-;2777:1:113::2;2563:220:::1;2416:1;;2397:381:110::0;;;;;;:::o;6275:112:65:-;6346:34;719:10:71;6370:9:65;6346;:34::i;:::-;6275:112;:::o;2601:149::-;2714:21;;;2671:6;2714:21;;;:12;:21;;;;;:28;2696:47;;:17;:47::i;1824:101:48:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;2617:126:64:-;2712:14;;;2686:7;2712:14;;;:7;:14;;;;;918::72;2712:24:64;827:112:72;5021:633:77;5136:13;5163:18;;5136:13;;;5163:18;5427:41;:5;5454:13;5427:26;:41::i;:::-;5482:47;:8;5512:16;5482:29;:47::i;:::-;5621:16;;;5605:1;5621:16;;;;;;;;;5376:271;;;;-1:-1:-1;5376:271:77;;-1:-1:-1;5543:13:77;;-1:-1:-1;5578:4:77;;-1:-1:-1;5605:1:77;-1:-1:-1;5621:16:77;-1:-1:-1;5376:271:77;-1:-1:-1;5021:633:77:o;3976:239:65:-;4061:7;4100;:5;:7::i;:::-;4088:19;;:9;:19;4080:57;;;;;;;12595:2:137;4080:57:65;;;12577:21:137;12634:2;12614:18;;;12607:30;12673:27;12653:18;;;12646:55;12718:18;;4080:57:65;12393:349:137;4080:57:65;4154:54;4173:23;4198:9;4154:18;:54::i;2830:109:110:-;2877:6;2898:36;2916:8;:15;;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2898:36;;:17;:36::i;2369:102:62:-;2425:13;2457:7;2450:14;;;;;:::i;3043:243:65:-;3149:21;;;3116:7;3149:21;;;:12;:21;;;;;:28;3218:8;;:51;;3233:21;;;;;;;:12;:21;;;;;:30;;3255:7;;;;3233:30;;;;;;:::i;:::-;;;;;;;;;;:36;;;;;;3218:51;;;3229:1;3218:51;3211:58;;;3043:243;-1:-1:-1;;;3043:243:65:o;6575:427:62:-;719:10:71;6668:4:62;4102:18;;;:11;:18;;;;;;;;;:27;;;;;;;;;;6668:4;;719:10:71;6812:15:62;6792:16;:35;;6784:85;;;;;;;14879:2:137;6784:85:62;;;14861:21:137;14918:2;14898:18;;;14891:30;14957:34;14937:18;;;14930:62;15028:7;15008:18;;;15001:35;15053:19;;6784:85:62;14677:401:137;6784:85:62;6903:60;6912:5;6919:7;6947:15;6928:16;:34;6903:8;:60::i;3740:189::-;3819:4;719:10:71;3873:28:62;719:10:71;3890:2:62;3894:6;3873:9;:28::i;6464:574:65:-;6683:6;6664:15;:25;;6656:67;;;;;;;15285:2:137;6656:67:65;;;15267:21:137;15324:2;15304:18;;;15297:30;15363:31;15343:18;;;15336:59;15412:18;;6656:67:65;15083:353:137;6656:67:65;6804:58;;;1439:71;6804:58;;;15672:25:137;15745:42;15733:55;;15713:18;;;15706:83;;;;15805:18;;;15798:34;;;15848:18;;;15841:34;;;6733:14:65;;6750:169;;6777:87;;15644:19:137;;6804:58:65;;;;;;;;;;;;6794:69;;;;;;6777:16;:87::i;:::-;6878:1;6893;6908;6750:13;:169::i;:::-;6733:186;;6946:17;6956:6;6946:9;:17::i;:::-;6937:5;:26;6929:64;;;;;;;16088:2:137;6929:64:65;;;16070:21:137;16127:2;16107:18;;;16100:30;16166:27;16146:18;;;16139:55;16211:18;;6929:64:65;15886:349:137;6929:64:65;7003:28;7013:6;7021:9;7003;:28::i;:::-;6646:392;6464:574;;;;;;:::o;2084:172:110:-;2146:11;;;;2142:44;;;2166:20;;;;;;;;;;;;;;2142:44;2192:11;:18;;2216:35;;;;2192:18;2216:35;;;;;;;;;2206:4;2216:35;;;2084:172::o;1930:626:64:-;2165:8;2146:15;:27;;2138:69;;;;;;;16442:2:137;2138:69:64;;;16424:21:137;16481:2;16461:18;;;16454:30;16520:31;16500:18;;;16493:59;16569:18;;2138:69:64;16240:353:137;2138:69:64;2218:18;1125:95;2278:5;2285:7;2294:5;2301:16;2311:5;2301:9;:16::i;:::-;2249:79;;;;;;16885:25:137;;;;16929:42;17007:15;;;16987:18;;;16980:43;17059:15;;;;17039:18;;;17032:43;17091:18;;;17084:34;17134:19;;;17127:35;17178:19;;;17171:35;;;16857:19;;2249:79:64;;;;;;;;;;;;2239:90;;;;;;2218:111;;2340:12;2355:28;2372:10;2355:16;:28::i;:::-;2340:43;;2394:14;2411:28;2425:4;2431:1;2434;2437;2411:13;:28::i;:::-;2394:45;;2467:5;2457:15;;:6;:15;;;2449:58;;;;;;;17419:2:137;2449:58:64;;;17401:21:137;17458:2;17438:18;;;17431:30;17497:32;17477:18;;;17470:60;17547:18;;2449:58:64;17217:354:137;2449:58:64;2518:31;2527:5;2534:7;2543:5;2518:8;:31::i;812:171:114:-;913:65;;;;;17814:6:137;17802:19;;913:65:114;;;17784:38:137;883:12:114;17838:18:137;;;17831:34;;;446:7:114;17881:18:137;;;17874:34;883:12:114;913:16;:38;;;;;17757:18:137;;913:65:114;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;903:75:114;812:171;-1:-1:-1;;812:171:114:o;2016:222:113:-;1094:13:48;:11;:13::i;:::-;2111:30:113::1;::::0;::::1;;::::0;;;:17:::1;:30;::::0;;;;;;;:45;;;;;;;;;:52;;;::::1;2159:4;2111:52;::::0;;2174:59;2142:13;;2111:30;2194:10:::1;::::0;2174:59:::1;::::0;2111:30;2174:59:::1;2016:222:::0;;:::o;3415:604:110:-;3492:16;3516:25;3522:10;3534:6;3516:5;:25::i;:::-;3579:33;;18359:66:137;18346:2;18342:15;;;18338:88;3579:33:110;;;18326:101:137;18443:12;;;18436:28;;;3547:29:110;;18480:12:137;;3579:33:110;;;;;;;;;;;;3547:65;;3618:12;3633:31;3651:12;3633:17;:31::i;:::-;3755:17;;3681:248;;;;;3618:46;;-1:-1:-1;3681:33:110;:16;:33;;;;;3618:46;;3681:248;;3735:12;;3755:17;;;;;;;3780:16;;3804:1;;446:7:114;;3893:12:110;;3913:10;;3681:248;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3996:17;;3940:74;;;19513:6:137;3974:12:110;19501:19:137;19483:38;;19552:2;19537:18;;19530:34;;;3996:17:110;;;;3940:74;3996:17;;;19580:18:137;;;19573:83;3940:74:110;;3670:259;;;;;;-1:-1:-1;3940:74:110;;;3953:10;;3940:74;;;;;;19471:2:137;3940:74:110;;;3510:509;;3415:604;;;;:::o;2378:148:65:-;-1:-1:-1;;;;;;;;;;;;;;;;;2493:21:65;;;;;;;:12;:21;;;;;:26;;;;;;;;;;;;:::i;:::-;;;;;;;;;;2486:33;;;;;;;;;2493:26;;2486:33;;;;;;;;;;;;;;;;;;;2378:148;-1:-1:-1;;;2378:148:65:o;2074:198:48:-;1094:13;:11;:13::i;:::-;2162:22:::1;::::0;::::1;2154:73;;;::::0;::::1;::::0;;19869:2:137;2154:73:48::1;::::0;::::1;19851:21:137::0;19908:2;19888:18;;;19881:30;19947:34;19927:18;;;19920:62;20018:8;19998:18;;;19991:36;20044:19;;2154:73:48::1;19667:402:137::0;2154:73:48::1;2237:28;2256:8;2237:18;:28::i;10457:340:62:-:0;10558:19;;;10550:68;;;;;;;20276:2:137;10550:68:62;;;20258:21:137;20315:2;20295:18;;;20288:30;20354:34;20334:18;;;20327:62;20425:6;20405:18;;;20398:34;20449:19;;10550:68:62;20074:400:137;10550:68:62;10636:21;;;10628:68;;;;;;;20681:2:137;10628:68:62;;;20663:21:137;20720:2;20700:18;;;20693:30;20759:34;20739:18;;;20732:62;20830:4;20810:18;;;20803:32;20852:19;;10628:68:62;20479:398:137;10628:68:62;10707:18;;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10758:32;;1966:25:137;;;10758:32:62;;1939:18:137;10758:32:62;;;;;;;10457:340;;;:::o;11078:411::-;4102:18;;;;11178:24;4102:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;11264:17;11244:37;;11240:243;;11325:6;11305:16;:26;;11297:68;;;;;;;21084:2:137;11297:68:62;;;21066:21:137;21123:2;21103:18;;;21096:30;21162:31;21142:18;;;21135:59;21211:18;;11297:68:62;20882:353:137;11297:68:62;11407:51;11416:5;11423:7;11451:6;11432:16;:25;11407:8;:51::i;:::-;11168:321;11078:411;;;:::o;7456:788::-;7552:18;;;7544:68;;;;;;;21442:2:137;7544:68:62;;;21424:21:137;21481:2;21461:18;;;21454:30;21520:34;21500:18;;;21493:62;21591:7;21571:18;;;21564:35;21616:19;;7544:68:62;21240:401:137;7544:68:62;7630:16;;;7622:64;;;;;;;21848:2:137;7622:64:62;;;21830:21:137;21887:2;21867:18;;;21860:30;21926:34;21906:18;;;21899:62;21997:5;21977:18;;;21970:33;22020:19;;7622:64:62;21646:399:137;7622:64:62;7768:15;;;7746:19;7768:15;;;;;;;;;;;7801:21;;;;7793:72;;;;;;;22252:2:137;7793:72:62;;;22234:21:137;22291:2;22271:18;;;22264:30;22330:34;22310:18;;;22303:62;22401:8;22381:18;;;22374:36;22427:19;;7793:72:62;22050:402:137;7793:72:62;7899:15;;;;:9;:15;;;;;;;;;;;7917:20;;;7899:38;;8114:13;;;;;;;;;;:23;;;;;;8163:26;;1966:25:137;;;8114:13:62;;8163:26;;1939:18:137;8163:26:62;;;;;;;8200:37;8220:4;8226:2;8230:6;8200:19;:37::i;3695:262:77:-;3748:7;3779:4;3771:28;3788:11;3771:28;;:63;;;;;3820:14;3803:13;:31;3771:63;3767:184;;;-1:-1:-1;3857:22:77;;3695:262::o;3767:184::-;3917:23;4054:81;;;1929:95;4054:81;;;24441:25:137;4077:11:77;24482:18:137;;;24475:34;;;;4090:14:77;24525:18:137;;;24518:34;4106:13:77;24568:18:137;;;24561:34;4129:4:77;24611:19:137;;;24604:84;4018:7:77;;24413:19:137;;4054:81:77;;;;;;;;;;;;4044:92;;;;;;4037:99;;3963:180;;4299:1895:65;5510:12;;4396:7;;;5510:12;5603:1;5594:10;;5590:242;;;5620:11;5643:17;5653:6;5643:9;:17::i;:::-;5634:26;;:6;:26;:::i;:::-;10626:25;10686:21;;;10752:4;10739:18;;5620:40;;-1:-1:-1;5716:9:65;;10735:28;;5678:35;;;:47;5674:148;;;5752:3;5745:10;;5674:148;;;5800:7;:3;5806:1;5800:7;:::i;:::-;5794:13;;5674:148;5606:226;5590:242;5855:4;5849:3;:10;5842:242;;;5875:11;5889:23;5902:3;5907:4;5889:12;:23::i;:::-;10626:25;10686:21;;;10752:4;10739:18;;5875:37;;-1:-1:-1;5968:9:65;;10735:28;;5930:35;;;:47;5926:148;;;6004:3;5997:10;;5926:148;;;6052:7;:3;6058:1;6052:7;:::i;:::-;6046:13;;5926:148;5861:223;5842:242;;;6125:9;;:52;;10626:25;10686:21;;;10752:4;10739:18;;10735:28;;6162:8;10735:28;6141:36;;;;;;6125:52;;;6137:1;6125:52;6118:59;;;4299:1895;-1:-1:-1;;;;;;4299:1895:65:o;7332:285::-;7416:28;7428:7;7437:6;7416:11;:28::i;:::-;3342:12:62;;7219:17:65;-1:-1:-1;7462:29:65;7454:90;;;;;;;22792:2:137;7454:90:65;;;22774:21:137;22831:2;22811:18;;;22804:30;22870:34;22850:18;;;22843:62;22941:18;22921;;;22914:46;22977:19;;7454:90:65;22590:412:137;7454:90:65;7555:55;7572:23;7597:4;7603:6;7555:16;:55::i;8431:380::-;2938:19;;;;8515:23;2938:19;;;:10;:19;;;;;;;;;;3519:18:62;;;;;;;8628:21:65;;;;:33;;;;;;;;;;;8677:54;;2938:19;;;;;3519:18:62;;8628:33:65;;2938:19;;;8677:54;;8515:23;8677:54;8742:62;8759:15;8776:9;8787:16;8742;:62::i;15264:187:81:-;15320:6;15355:16;15346:25;;;15338:76;;;;;;;23209:2:137;15338:76:81;;;23191:21:137;23248:2;23228:18;;;23221:30;23287:34;23267:18;;;23260:62;23358:8;23338:18;;;23331:36;23384:19;;15338:76:81;23007:402:137;15338:76:81;-1:-1:-1;15438:5:81;15264:187::o;1359:130:48:-;1273:6;;1422:23;1273:6;719:10:71;1422:23:48;1414:68;;;;;;;23616:2:137;1414:68:48;;;23598:21:137;;;23635:18;;;23628:30;23694:34;23674:18;;;23667:62;23746:18;;1414:68:48;23414:356:137;2426:187:48;2518:6;;;;2534:17;;;;;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;3367:268:73:-;3461:13;1371:66;3490:47;;3486:143;;3560:15;3569:5;3560:8;:15::i;:::-;3553:22;;;;3486:143;3613:5;3606:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14240:187:81;14296:6;14331:16;14322:25;;;14314:76;;;;;;;23977:2:137;14314:76:81;;;23959:21:137;24016:2;23996:18;;;23989:30;24055:34;24035:18;;;24028:62;24126:8;24106:18;;;24099:36;24152:19;;14314:76:81;23775:402:137;4768:165:77;4845:7;4871:55;4893:20;:18;:20::i;:::-;4915:10;8536:4:76;8530:11;8566:10;8554:23;;8606:4;8597:14;;8590:39;;;;8658:4;8649:14;;8642:34;8712:4;8697:20;;;8336:397;6598:232;6683:7;6703:17;6722:18;6744:25;6755:4;6761:1;6764;6767;6744:10;:25::i;:::-;6702:67;;;;6779:18;6791:5;6779:11;:18::i;:::-;-1:-1:-1;6814:9:76;6598:232;-1:-1:-1;;;;;6598:232:76:o;3111:203:64:-;3231:14;;;3171:15;3231:14;;;:7;:14;;;;;918::72;;1050:1;1032:19;;;;918:14;3290:17:64;3188:126;3111:203;;;:::o;7706:190:65:-;7790:28;7802:7;7811:6;7790:11;:28::i;:::-;7829:60;7846:23;7871:9;7882:6;7829:16;:60::i;12073:91:62:-;;;;:::o;8036:224:65:-;2938:19;;;;2912:7;2938:19;;;:10;:19;;;;;;;;;;;;;;;8197:56;;2938:19;;;;;8246:6;8197:16;:56::i;6530:1642:80:-;6578:7;6601:1;6606;6601:6;6597:45;;-1:-1:-1;6630:1:80;;6530:1642;-1:-1:-1;6530:1642:80:o;6597:45::-;7321:14;7355:1;7344:7;7349:1;7344:4;:7::i;:::-;:12;;7338:1;:19;;7321:36;;7816:1;7805:6;7801:1;:10;;;;;:::i;:::-;;7792:6;:19;7791:26;;7782:35;;7865:1;7854:6;7850:1;:10;;;;;:::i;:::-;;7841:6;:19;7840:26;;7831:35;;7914:1;7903:6;7899:1;:10;;;;;:::i;:::-;;7890:6;:19;7889:26;;7880:35;;7963:1;7952:6;7948:1;:10;;;;;:::i;:::-;;7939:6;:19;7938:26;;7929:35;;8012:1;8001:6;7997:1;:10;;;;;:::i;:::-;;7988:6;:19;7987:26;;7978:35;;8061:1;8050:6;8046:1;:10;;;;;:::i;:::-;;8037:6;:19;8036:26;;8027:35;;8110:1;8099:6;8095:1;:10;;;;;:::i;:::-;;8086:6;:19;8085:26;;8076:35;;8132:23;8136:6;8148;8144:1;:10;;;;;:::i;:::-;;8132:3;:23::i;805:153::-;867:7;940:11;950:1;941:5;;;940:11;:::i;:::-;930:21;;931:5;;;930:21;:::i;8520:535:62:-;8603:21;;;8595:65;;;;;;;25369:2:137;8595:65:62;;;25351:21:137;25408:2;25388:18;;;25381:30;25447:33;25427:18;;;25420:61;25498:18;;8595:65:62;25167:355:137;8595:65:62;8747:6;8731:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;8899:18:62;;;:9;:18;;;;;;;;;;;:28;;;;;;8952:37;1966:25:137;;;8952:37:62;;1939:18:137;8952:37:62;;;;;;;9000:48;9028:1;9032:7;9041:6;9000:19;:48::i;:::-;8520:535;;:::o;10194:96:65:-;10252:7;10278:5;10282:1;10278;:5;:::i;9420:768::-;9652:12;;9590:17;;;;;9727:8;;:59;;10626:25;10686:21;;;10752:4;10739:18;;10735:28;;9778:7;10735:28;9727:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;9738:16;;;;;;;;;-1:-1:-1;9738:16:65;;;;;;;9727:59;9699:87;;9813:7;:13;;;9801:25;;;;9852:20;9855:9;9866:5;9852:2;:20;;:::i;:::-;9840:32;;9897:1;9891:3;:7;:39;;;;;9923:7;:5;:7::i;:::-;9902:28;;:7;:17;;;:28;;;9891:39;9887:285;;;9988:29;10007:9;9988:18;:29::i;:::-;10626:25;10686:21;;;10752:4;10739:18;;10735:28;;9971:7;10735:28;9950:67;;;;;;;;;;;;;;;;;;;9887:285;;;10056:5;10067:89;;;;;;;;10090:26;10108:7;:5;:7::i;:::-;10090:26;;:17;:26::i;:::-;10067:89;;;;;;10125:29;10144:9;10125:18;:29::i;:::-;10067:89;;;;;;;10056:101;;;;;;;-1:-1:-1;10056:101:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9887:285;9675:507;9628:560;9420:768;;;;;;:::o;8817:597::-;8914:3;8907:10;;:3;:10;;;;:24;;;;;8930:1;8921:6;:10;8907:24;8903:505;;;8951:17;;;;8947:221;;9046:17;;;8989;9046;;;:12;:17;;;;;8989;;9029:54;;9065:9;9076:6;9029:16;:54::i;:::-;8988:95;;;;9127:3;9106:47;;;9132:9;9143;9106:47;;;;;;25701:25:137;;;25757:2;25742:18;;25735:34;25689:2;25674:18;;25527:248;9106:47:65;;;;;;;;8970:198;;8947:221;9186:17;;;;9182:216;;9281:17;;;9224;9281;;;:12;:17;;;;;9224;;9264:49;;9300:4;9306:6;9264:16;:49::i;:::-;9223:90;;;;9357:3;9336:47;;;9362:9;9373;9336:47;;;;;;25701:25:137;;;25757:2;25742:18;;25735:34;25689:2;25674:18;;25527:248;9336:47:65;;;;;;;;9205:193;;8817:597;;;:::o;2059:405:73:-;2118:13;2143:11;2157:16;2168:4;2157:10;:16::i;:::-;2281:14;;;2292:2;2281:14;;;;;;;;;2143:30;;-1:-1:-1;2261:17:73;;2281:14;;;;;;;;;-1:-1:-1;;;2371:16:73;;;-1:-1:-1;2416:4:73;2407:14;;2400:28;;;;-1:-1:-1;2371:16:73;2059:405::o;5009:1456:76:-;5097:7;;6021:66;6008:79;;6004:161;;;-1:-1:-1;6119:1:76;;-1:-1:-1;6123:30:76;6103:51;;6004:161;6276:24;;;6259:14;6276:24;;;;;;;;;26007:25:137;;;26080:4;26068:17;;26048:18;;;26041:45;;;;26102:18;;;26095:34;;;26145:18;;;26138:34;;;6276:24:76;;25979:19:137;;6276:24:76;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6276:24:76;;;;;;-1:-1:-1;;6314:20:76;;;6310:101;;6366:1;6370:29;6350:50;;;;;;;6310:101;6429:6;-1:-1:-1;6437:20:76;;-1:-1:-1;5009:1456:76;;;;;;;;:::o;570:511::-;647:20;638:5;:29;;;;;;;;:::i;:::-;;634:441;;570:511;:::o;634:441::-;743:29;734:5;:38;;;;;;;;:::i;:::-;;730:345;;788:34;;;;;26574:2:137;788:34:76;;;26556:21:137;26613:2;26593:18;;;26586:30;26652:26;26632:18;;;26625:54;26696:18;;788:34:76;26372:348:137;730:345:76;852:35;843:5;:44;;;;;;;;:::i;:::-;;839:236;;903:41;;;;;26927:2:137;903:41:76;;;26909:21:137;26966:2;26946:18;;;26939:30;27005:33;26985:18;;;26978:61;27056:18;;903:41:76;26725:355:137;839:236:76;974:30;965:5;:39;;;;;;;;:::i;:::-;;961:114;;1020:44;;;;;27287:2:137;1020:44:76;;;27269:21:137;27326:2;27306:18;;;27299:30;27365:34;27345:18;;;27338:62;27436:4;27416:18;;;27409:32;27458:19;;1020:44:76;27085:398:137;9375:659:62;9458:21;;;9450:67;;;;;;;27690:2:137;9450:67:62;;;27672:21:137;27729:2;27709:18;;;27702:30;27768:34;27748:18;;;27741:62;27839:3;27819:18;;;27812:31;27860:19;;9450:67:62;27488:397:137;9450:67:62;9613:18;;;9588:22;9613:18;;;;;;;;;;;9649:24;;;;9641:71;;;;;;;28092:2:137;9641:71:62;;;28074:21:137;28131:2;28111:18;;;28104:30;28170:34;28150:18;;;28143:62;28241:4;28221:18;;;28214:32;28263:19;;9641:71:62;27890:398:137;9641:71:62;9746:18;;;:9;:18;;;;;;;;;;;9767:23;;;9746:44;;9883:12;:22;;;;;;;9931:37;1966:25:137;;;9746:9:62;;:18;9931:37;;1939:18:137;9931:37:62;;;;;;;9979:48;9999:7;10016:1;10020:6;9979:19;:48::i;10296:101:65:-;10359:7;10385:5;10389:1;10385;:5;:::i;8633:983:80:-;8685:7;;8769:3;8760:12;;;:16;8756:99;;8806:3;8796:13;;;;8827;8756:99;8881:2;8872:11;;;:15;8868:96;;8917:2;8907:12;;;;8937;8868:96;8990:2;8981:11;;;:15;8977:96;;9026:2;9016:12;;;;9046;8977:96;9099:2;9090:11;;;:15;9086:96;;9135:2;9125:12;;;;9155;9086:96;9208:1;9199:10;;;:14;9195:93;;9243:1;9233:11;;;;9262;9195:93;9314:1;9305:10;;;:14;9301:93;;9349:1;9339:11;;;;9368;9301:93;9420:1;9411:10;;;:14;9407:93;;9455:1;9445:11;;;;9474;9407:93;9526:1;9517:10;;;:14;9513:64;;9561:1;9551:11;9603:6;8633:983;-1:-1:-1;;8633:983:80:o;588:104::-;646:7;676:1;672;:5;:13;;684:1;672:13;;;-1:-1:-1;680:1:80;;588:104;-1:-1:-1;588:104:80:o;2836:192:81:-;2893:7;2929:17;2920:26;;;2912:78;;;;;;;28495:2:137;2912:78:81;;;28477:21:137;28534:2;28514:18;;;28507:30;28573:34;28553:18;;;28546:62;28644:9;28624:18;;;28617:37;28671:19;;2912:78:81;28293:403:137;2536:245:73;2597:7;2669:4;2633:40;;2696:2;2687:11;;2683:69;;;2721:20;;;;;;;;;;;;;;14:482:137;56:3;94:5;88:12;121:6;116:3;109:19;146:1;156:162;170:6;167:1;164:13;156:162;;;232:4;288:13;;;284:22;;278:29;260:11;;;256:20;;249:59;185:12;156:162;;;160:3;363:1;356:4;347:6;342:3;338:16;334:27;327:38;485:4;415:66;410:2;402:6;398:15;394:88;389:3;385:98;381:109;374:116;;;14:482;;;;:::o;501:220::-;650:2;639:9;632:21;613:4;670:45;711:2;700:9;696:18;688:6;670:45;:::i;726:196::-;794:20;;854:42;843:54;;833:65;;823:93;;912:1;909;902:12;823:93;726:196;;;:::o;927:254::-;995:6;1003;1056:2;1044:9;1035:7;1031:23;1027:32;1024:52;;;1072:1;1069;1062:12;1024:52;1095:29;1114:9;1095:29;:::i;:::-;1085:39;1171:2;1156:18;;;;1143:32;;-1:-1:-1;;;927:254:137:o;1635:180::-;1694:6;1747:2;1735:9;1726:7;1722:23;1718:32;1715:52;;;1763:1;1760;1753:12;1715:52;-1:-1:-1;1786:23:137;;1635:180;-1:-1:-1;1635:180:137:o;2002:328::-;2079:6;2087;2095;2148:2;2136:9;2127:7;2123:23;2119:32;2116:52;;;2164:1;2161;2154:12;2116:52;2187:29;2206:9;2187:29;:::i;:::-;2177:39;;2235:38;2269:2;2258:9;2254:18;2235:38;:::i;:::-;2225:48;;2320:2;2309:9;2305:18;2292:32;2282:42;;2002:328;;;;;:::o;3186:184::-;3238:77;3235:1;3228:88;3335:4;3332:1;3325:15;3359:4;3356:1;3349:15;3375:334;3446:2;3440:9;3502:2;3492:13;;3507:66;3488:86;3476:99;;3605:18;3590:34;;3626:22;;;3587:62;3584:88;;;3652:18;;:::i;:::-;3688:2;3681:22;3375:334;;-1:-1:-1;3375:334:137:o;3714:1631::-;3766:5;3796:4;3840:3;3835:2;3827:6;3823:15;3819:25;3809:53;;3858:1;3855;3848:12;3809:53;3894:6;3881:20;3920:4;3943:18;3980:2;3976;3973:10;3970:36;;;3986:18;;:::i;:::-;4032:2;4029:1;4025:10;4055:28;4079:2;4075;4071:11;4055:28;:::i;:::-;4117:15;;;4187;;;4183:24;;;4148:12;;;;4219:15;;;4216:35;;;4247:1;4244;4237:12;4216:35;4283:2;4275:6;4271:15;4260:26;;4295:1021;4311:6;4306:3;4303:15;4295:1021;;;4397:3;4384:17;4433:2;4420:11;4417:19;4414:109;;;4477:1;4506:2;4502;4495:14;4414:109;4546:24;;4605:2;4597:11;;4593:21;-1:-1:-1;4583:119:137;;4656:1;4685:2;4681;4674:14;4583:119;4746:2;4742;4738:11;4725:25;4774:2;4799;4795;4792:10;4789:36;;;4805:18;;:::i;:::-;4853:110;4959:2;4890:66;4885:2;4881;4877:11;4873:84;4869:93;4853:110;:::i;:::-;4992:2;4983:7;4976:19;5037:3;5031;5026:2;5022;5018:11;5014:21;5011:30;5008:123;;;5083:1;5113:3;5108;5101:16;5008:123;5189:2;5183:3;5179:2;5175:12;5170:2;5161:7;5157:16;5144:48;5239:1;5216:16;;;5212:25;;5205:36;;;;-1:-1:-1;5254:20:137;;-1:-1:-1;4328:12:137;;;;5294;;;;4295:1021;;;5334:5;3714:1631;-1:-1:-1;;;;;;;;;3714:1631:137:o;5350:159::-;5417:20;;5477:6;5466:18;;5456:29;;5446:57;;5499:1;5496;5489:12;5514:1040;5653:6;5661;5669;5677;5685;5693;5746:3;5734:9;5725:7;5721:23;5717:33;5714:53;;;5763:1;5760;5753:12;5714:53;5803:9;5790:23;5832:18;5873:2;5865:6;5862:14;5859:34;;;5889:1;5886;5879:12;5859:34;5927:6;5916:9;5912:22;5902:32;;5972:7;5965:4;5961:2;5957:13;5953:27;5943:55;;5994:1;5991;5984:12;5943:55;6034:2;6021:16;6060:2;6052:6;6049:14;6046:34;;;6076:1;6073;6066:12;6046:34;6123:7;6116:4;6107:6;6103:2;6099:15;6095:26;6092:39;6089:59;;;6144:1;6141;6134:12;6089:59;6175:4;6167:13;;;;-1:-1:-1;6199:6:137;-1:-1:-1;6243:20:137;;;6230:34;;6276:16;;;6273:36;;;6305:1;6302;6295:12;6273:36;;6328:61;6381:7;6370:8;6359:9;6355:24;6328:61;:::i;:::-;6318:71;;;6436:2;6425:9;6421:18;6408:32;6398:42;;6459:37;6492:2;6481:9;6477:18;6459:37;:::i;:::-;6449:47;;6543:3;6532:9;6528:19;6515:33;6505:43;;5514:1040;;;;;;;;:::o;6559:186::-;6618:6;6671:2;6659:9;6650:7;6646:23;6642:32;6639:52;;;6687:1;6684;6677:12;6639:52;6710:29;6729:9;6710:29;:::i;6750:252::-;6817:6;6825;6878:2;6866:9;6857:7;6853:23;6849:32;6846:52;;;6894:1;6891;6884:12;6846:52;6917:28;6935:9;6917:28;:::i;7204:1335::-;7601:66;7593:6;7589:79;7578:9;7571:98;7552:4;7688:2;7726:3;7721:2;7710:9;7706:18;7699:31;7753:46;7794:3;7783:9;7779:19;7771:6;7753:46;:::i;:::-;7847:9;7839:6;7835:22;7830:2;7819:9;7815:18;7808:50;7881:33;7907:6;7899;7881:33;:::i;:::-;7945:2;7930:18;;7923:34;;;8006:42;7994:55;;7988:3;7973:19;;7966:84;8081:3;8066:19;;8059:35;;;8131:22;;;8125:3;8110:19;;8103:51;8203:13;;8225:22;;;8301:15;;;;-1:-1:-1;8263:15:137;;;;-1:-1:-1;8344:169:137;8358:6;8355:1;8352:13;8344:169;;;8419:13;;8407:26;;8488:15;;;;8453:12;;;;8380:1;8373:9;8344:169;;;-1:-1:-1;8530:3:137;;7204:1335;-1:-1:-1;;;;;;;;;;;;7204:1335:137:o;8930:156::-;8996:20;;9056:4;9045:16;;9035:27;;9025:55;;9076:1;9073;9066:12;9091:531;9193:6;9201;9209;9217;9225;9233;9286:3;9274:9;9265:7;9261:23;9257:33;9254:53;;;9303:1;9300;9293:12;9254:53;9326:29;9345:9;9326:29;:::i;:::-;9316:39;;9402:2;9391:9;9387:18;9374:32;9364:42;;9453:2;9442:9;9438:18;9425:32;9415:42;;9476:36;9508:2;9497:9;9493:18;9476:36;:::i;:::-;9466:46;;9559:3;9548:9;9544:19;9531:33;9521:43;;9611:3;9600:9;9596:19;9583:33;9573:43;;9091:531;;;;;;;;:::o;9820:606::-;9931:6;9939;9947;9955;9963;9971;9979;10032:3;10020:9;10011:7;10007:23;10003:33;10000:53;;;10049:1;10046;10039:12;10000:53;10072:29;10091:9;10072:29;:::i;:::-;10062:39;;10120:38;10154:2;10143:9;10139:18;10120:38;:::i;:::-;10110:48;;10205:2;10194:9;10190:18;10177:32;10167:42;;10256:2;10245:9;10241:18;10228:32;10218:42;;10279:37;10311:3;10300:9;10296:19;10279:37;:::i;:::-;10269:47;;10363:3;10352:9;10348:19;10335:33;10325:43;;10415:3;10404:9;10400:19;10387:33;10377:43;;9820:606;;;;;;;;;;:::o;10431:184::-;10489:6;10542:2;10530:9;10521:7;10517:23;10513:32;10510:52;;;10558:1;10555;10548:12;10510:52;10581:28;10599:9;10581:28;:::i;10620:260::-;10688:6;10696;10749:2;10737:9;10728:7;10724:23;10720:32;10717:52;;;10765:1;10762;10755:12;10717:52;10788:29;10807:9;10788:29;:::i;:::-;10778:39;;10836:38;10870:2;10859:9;10855:18;10836:38;:::i;:::-;10826:48;;10620:260;;;;;:::o;10885:350::-;10952:6;10960;11013:2;11001:9;10992:7;10988:23;10984:32;10981:52;;;11029:1;11026;11019:12;10981:52;11052:29;11071:9;11052:29;:::i;:::-;11042:39;;11131:2;11120:9;11116:18;11103:32;11175:10;11168:5;11164:22;11157:5;11154:33;11144:61;;11201:1;11198;11191:12;11144:61;11224:5;11214:15;;;10885:350;;;;;:::o;11632:437::-;11711:1;11707:12;;;;11754;;;11775:61;;11829:4;11821:6;11817:17;11807:27;;11775:61;11882:2;11874:6;11871:14;11851:18;11848:38;11845:218;;11919:77;11916:1;11909:88;12020:4;12017:1;12010:15;12048:4;12045:1;12038:15;12074:184;12126:77;12123:1;12116:88;12223:4;12220:1;12213:15;12247:4;12244:1;12237:15;12263:125;12328:9;;;12349:10;;;12346:36;;;12362:18;;:::i;12747:288::-;12816:6;12869:2;12857:9;12848:7;12844:23;12840:32;12837:52;;;12885:1;12882;12875:12;12837:52;12917:9;12911:16;12967:18;12960:5;12956:30;12949:5;12946:41;12936:69;;13001:1;12998;12991:12;13398:331;13503:9;13514;13556:8;13544:10;13541:24;13538:44;;;13578:1;13575;13568:12;13538:44;13607:6;13597:8;13594:20;13591:40;;;13627:1;13624;13617:12;13591:40;-1:-1:-1;;13653:23:137;;;13698:25;;;;;-1:-1:-1;13398:331:137:o;13734:372::-;13893:66;13855:19;;13977:11;;;;14008:2;14000:11;;13997:103;;;14087:2;14081;14074:3;14070:2;14066:12;14063:1;14059:20;14055:29;14051:2;14047:38;14043:47;14034:56;;13997:103;;;13734:372;;;;:::o;14111:::-;14270:66;14232:19;;14354:11;;;;14385:2;14377:11;;14374:103;;;14447:2;14443:12;;;;14440:1;14436:20;14432:29;;;14424:38;14420:47;;;;14111:372;-1:-1:-1;;14111:372:137:o;14488:184::-;14540:77;14537:1;14530:88;14637:4;14634:1;14627:15;14661:4;14658:1;14651:15;17919:245;17998:6;18006;18059:2;18047:9;18038:7;18034:23;18030:32;18027:52;;;18075:1;18072;18065:12;18027:52;-1:-1:-1;;18098:16:137;;18154:2;18139:18;;;18133:25;18098:16;;18133:25;;-1:-1:-1;17919:245:137:o;18503:775::-;18785:4;18814:6;18859:2;18851:6;18847:15;18836:9;18829:34;18882:42;18972:2;18964:6;18960:15;18955:2;18944:9;18940:18;18933:43;19012:3;19007:2;18996:9;18992:18;18985:31;19033:46;19074:3;19063:9;19059:19;19051:6;19033:46;:::i;:::-;19025:54;;19115:6;19110:2;19099:9;19095:18;19088:34;19159:6;19153:3;19142:9;19138:19;19131:35;19215:2;19207:6;19203:15;19197:3;19186:9;19182:19;19175:44;19268:2;19260:6;19256:15;19250:3;19239:9;19235:19;19228:44;;;18503:775;;;;;;;;;;:::o;22457:128::-;22524:9;;;22545:11;;;22542:37;;;22559:18;;:::i;24699:184::-;24751:77;24748:1;24741:88;24848:4;24845:1;24838:15;24872:4;24869:1;24862:15;24888:274;24928:1;24954;24944:189;;24989:77;24986:1;24979:88;25090:4;25087:1;25080:15;25118:4;25115:1;25108:15;24944:189;-1:-1:-1;25147:9:137;;24888:274::o;26183:184::-;26235:77;26232:1;26225:88;26332:4;26329:1;26322:15;26356:4;26353:1;26346:15',
    linkReferences: {},
    immutableReferences: {
      '58104': [
        {
          start: 8291,
          length: 32,
        },
      ],
      '58106': [
        {
          start: 8249,
          length: 32,
        },
      ],
      '58108': [
        {
          start: 8207,
          length: 32,
        },
      ],
      '58110': [
        {
          start: 8372,
          length: 32,
        },
      ],
      '58112': [
        {
          start: 8412,
          length: 32,
        },
      ],
      '58115': [
        {
          start: 3795,
          length: 32,
        },
      ],
      '58118': [
        {
          start: 3838,
          length: 32,
        },
      ],
      '73033': [
        {
          start: 824,
          length: 32,
        },
        {
          start: 3258,
          length: 32,
        },
        {
          start: 5727,
          length: 32,
        },
        {
          start: 6186,
          length: 32,
        },
      ],
      '73649': [
        {
          start: 1187,
          length: 32,
        },
        {
          start: 2908,
          length: 32,
        },
        {
          start: 4086,
          length: 32,
        },
      ],
      '74216': [
        {
          start: 2390,
          length: 32,
        },
        {
          start: 6083,
          length: 32,
        },
        {
          start: 6234,
          length: 32,
        },
        {
          start: 6408,
          length: 32,
        },
      ],
      '74219': [
        {
          start: 1962,
          length: 32,
        },
        {
          start: 6287,
          length: 32,
        },
      ],
    },
  },
  methodIdentifiers: {
    'CLOCK_MODE()': '4bf5d7e9',
    'DOMAIN_SEPARATOR()': '3644e515',
    'INITIALIZED()': '95288883',
    'L1_BLOCK()': '47718590',
    'L1_BRIDGE_ADDRESS()': '248a20f6',
    'REFUND_CHAIN()': 'c4170470',
    'TARGET_CHAIN()': 'f81d82c6',
    'WORMHOLE_RELAYER()': '0f1f9cfc',
    'allowance(address,address)': 'dd62ed3e',
    'approve(address,uint256)': '095ea7b3',
    'balanceOf(address)': '70a08231',
    'checkpoints(address,uint32)': 'f1127ed8',
    'clock()': '91ddadf4',
    'decimals()': '313ce567',
    'decreaseAllowance(address,uint256)': 'a457c2d7',
    'delegate(address)': '5c19a95c',
    'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)': 'c3cda520',
    'delegates(address)': '587cde1e',
    'eip712Domain()': '84b0196e',
    'getPastTotalSupply(uint256)': '8e539e8c',
    'getPastVotes(address,uint256)': '3a46b1a8',
    'getVotes(address)': '9ab24eb0',
    'increaseAllowance(address,uint256)': '39509351',
    'initialize(address)': 'c4d66de8',
    'l1Unlock(address,uint256)': 'e512e7d6',
    'name()': '06fdde03',
    'nonces(address)': '7ecebe00',
    'numCheckpoints(address)': '6fcfff45',
    'owner()': '8da5cb5b',
    'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': 'd505accf',
    'quoteDeliveryCost(uint16)': 'd75a9829',
    'receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)': '529dca32',
    'registeredSenders(uint16,bytes32)': '6464e3c9',
    'renounceOwnership()': '715018a6',
    'seenDeliveryVaaHashes(bytes32)': '180f6cc2',
    'setRegisteredSender(uint16,bytes32)': 'dd12d68b',
    'symbol()': '95d89b41',
    'totalSupply()': '18160ddd',
    'transfer(address,uint256)': 'a9059cbb',
    'transferFrom(address,address,uint256)': '23b872dd',
    'transferOwnership(address)': 'f2fde38b',
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.20+commit.a1b79de6"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_relayer","type":"address"},{"internalType":"address","name":"_l1Block","type":"address"},{"internalType":"uint16","name":"_sourceChain","type":"uint16"},{"internalType":"uint16","name":"_targetChain","type":"uint16"},{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadyInitialized","type":"error"},{"inputs":[{"internalType":"bytes32","name":"deliveryHash","type":"bytes32"}],"name":"AlreadyProcessed","type":"error"},{"inputs":[],"name":"InvalidShortString","type":"error"},{"inputs":[],"name":"OnlyRelayerAllowed","type":"error"},{"inputs":[{"internalType":"string","name":"str","type":"string"}],"name":"StringTooLong","type":"error"},{"inputs":[{"internalType":"bytes32","name":"wormholeAddress","type":"bytes32"}],"name":"UnregisteredSender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"EIP712DomainChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"uint16","name":"sourceChain","type":"uint16"},{"indexed":true,"internalType":"bytes32","name":"sourceAddress","type":"bytes32"}],"name":"RegisteredSenderSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"targetAddress","type":"address"},{"indexed":false,"internalType":"uint16","name":"targetChain","type":"uint16"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"targetToken","type":"address"}],"name":"TokenBridged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLOCK_MODE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIALIZED","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"L1_BLOCK","outputs":[{"internalType":"contract IL1Block","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"L1_BRIDGE_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFUND_CHAIN","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TARGET_CHAIN","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WORMHOLE_RELAYER","outputs":[{"internalType":"contract IWormholeRelayer","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20Votes.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clock","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"eip712Domain","outputs":[{"internalType":"bytes1","name":"fields","type":"bytes1"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"verifyingContract","type":"address"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256[]","name":"extensions","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timepoint","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"l1BridgeAddress","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"l1Unlock","outputs":[{"internalType":"uint256","name":"sequence","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"targetChain","type":"uint16"}],"name":"quoteDeliveryCost","outputs":[{"internalType":"uint256","name":"cost","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"payload","type":"bytes"},{"internalType":"bytes[]","name":"","type":"bytes[]"},{"internalType":"bytes32","name":"sourceAddress","type":"bytes32"},{"internalType":"uint16","name":"sourceChain","type":"uint16"},{"internalType":"bytes32","name":"deliveryHash","type":"bytes32"}],"name":"receiveWormholeMessages","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"registeredSenders","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"seenDeliveryVaaHashes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"sourceChain","type":"uint16"},{"internalType":"bytes32","name":"sourceAddress","type":"bytes32"}],"name":"setRegisteredSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"errors":{"AlreadyInitialized()":[{"details":"Contract is already initialized with an L2 token."}],"AlreadyProcessed(bytes32)":[{"details":"Message was already delivered by Wormhole."}],"OnlyRelayerAllowed()":[{"details":"Function called with an address that isn\'t a relayer."}],"UnregisteredSender(bytes32)":[{"details":"Function was called with an unregistered sender address."}]},"events":{"Approval(address,address,uint256)":{"details":"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."},"DelegateChanged(address,address,address)":{"details":"Emitted when an account changes their delegate."},"DelegateVotesChanged(address,uint256,uint256)":{"details":"Emitted when a token transfer or delegate change results in changes to a delegate\'s number of votes."},"EIP712DomainChanged()":{"details":"MAY be emitted to signal that the domain could have changed."},"Transfer(address,address,uint256)":{"details":"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."}},"kind":"dev","methods":{"CLOCK_MODE()":{"details":"Description of the clock"},"DOMAIN_SEPARATOR()":{"details":"See {IERC20Permit-DOMAIN_SEPARATOR}."},"allowance(address,address)":{"details":"See {IERC20-allowance}."},"approve(address,uint256)":{"details":"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."},"balanceOf(address)":{"details":"See {IERC20-balanceOf}."},"checkpoints(address,uint32)":{"details":"Get the `pos`-th checkpoint for `account`."},"clock()":{"details":"Clock used for flagging checkpoints."},"constructor":{"params":{"_l1Block":"The contract that manages the clock for the ERC20.","_name":"The name of the ERC20 token.","_relayer":"The address of the Wormhole relayer.","_sourceChain":"The chain sending wormhole messages.","_symbol":"The symbol of the ERC20 token.","_targetChain":"The chain to send wormhole messages."}},"decimals()":{"details":"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it\'s overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."},"decreaseAllowance(address,uint256)":{"details":"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."},"delegate(address)":{"details":"Delegate votes from the sender to `delegatee`."},"delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)":{"details":"Delegates votes from signer to `delegatee`"},"delegates(address)":{"details":"Get the address `account` is currently delegating to."},"eip712Domain()":{"details":"See {EIP-5267}. _Available since v4.9._"},"getPastTotalSupply(uint256)":{"details":"Retrieve the `totalSupply` at the end of `timepoint`. Note, this value is the sum of all balances. It is NOT the sum of all the delegated votes! Requirements: - `timepoint` must be in the past"},"getPastVotes(address,uint256)":{"details":"Retrieve the number of votes for `account` at the end of `timepoint`. Requirements: - `timepoint` must be in the past"},"getVotes(address)":{"details":"Gets the current votes balance for `account`"},"increaseAllowance(address,uint256)":{"details":"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."},"initialize(address)":{"params":{"l1BridgeAddress":"The address of the L1 token for this L2 token."}},"l1Unlock(address,uint256)":{"params":{"account":"The account where the tokens will be transferred.","amount":"The amount of tokens to be unlocked."}},"name()":{"details":"Returns the name of the token."},"nonces(address)":{"details":"See {IERC20Permit-nonces}."},"numCheckpoints(address)":{"details":"Get number of checkpoints for `account`."},"owner()":{"details":"Returns the address of the current owner."},"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)":{"details":"See {IERC20Permit-permit}."},"quoteDeliveryCost(uint16)":{"params":{"targetChain":"The chain id of the chain receiving the messages."}},"receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)":{"params":{"payload":"The payload that was sent to in the delivery request."}},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"setRegisteredSender(uint16,bytes32)":{"details":"Set a registered sender for a given chain.","params":{"sourceAddress":"The source address for receiving a wormhole message.","sourceChain":"The Wormhole ID of the source chain to set the registered sender."}},"symbol()":{"details":"Returns the symbol of the token, usually a shorter version of the name."},"totalSupply()":{"details":"See {IERC20-totalSupply}."},"transfer(address,uint256)":{"details":"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."},"transferFrom(address,address,uint256)":{"details":"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``\'s tokens of at least `amount`."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{"INITIALIZED()":{"notice":"Used to indicate whether the contract has been initialized with the L2 token address."},"L1_BLOCK()":{"notice":"The contract that handles fetching the L1 block on the L2."},"L1_BRIDGE_ADDRESS()":{"notice":"The L1 bridge address."},"REFUND_CHAIN()":{"notice":"The chain id where refunds will be sent."},"TARGET_CHAIN()":{"notice":"The chain id that is receiving the messages."},"WORMHOLE_RELAYER()":{"notice":"The wormhole relayer used to trustlessly send messages."},"initialize(address)":{"notice":"Must be called before bridging tokens to L2."},"l1Unlock(address,uint256)":{"notice":"Burn L2 tokens and unlock tokens on the L1."},"receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)":{"notice":"Receives a message from L1 and mints L2 tokens."}},"version":1}},"settings":{"compilationTarget":{"src/WormholeL2ERC20.sol":"WormholeL2ERC20"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":10000000},"remappings":[":@openzeppelin/contracts/=lib/flexible-voting/lib/openzeppelin-contracts/contracts/",":aave-v3-core/=lib/flexible-voting/lib/aave-v3-core/",":comet/=lib/flexible-voting/lib/comet/contracts/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":flexible-voting/=lib/flexible-voting/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin-flexible-voting/=lib/flexible-voting/lib/openzeppelin-contracts/contracts/",":openzeppelin/=lib/openzeppelin-contracts/contracts/",":solmate/=lib/flexible-voting/lib/solmate/src/",":wormhole-solidity-sdk/=lib/wormhole-solidity-sdk/src/",":wormhole/=lib/wormhole/ethereum/contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218","license":"MIT","urls":["bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32","dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"]},"lib/openzeppelin-contracts/contracts/governance/utils/IVotes.sol":{"keccak256":"0x1618ddebe73377660f6da71afcba35d5ac4c4600918b3a381d9c6f37eba613eb","license":"MIT","urls":["bzz-raw://666c8d7c62478b55e082f1835275b7acfc1595491998df6d67183ff2c70eab96","dweb:/ipfs/QmVXmnXfxNaLhoX283dqyKJ8DJbF5thUd9sMuRoFpNMwr7"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC5267.sol":{"keccak256":"0xac6c2efc64baccbde4904ae18ed45139c9aa8cff96d6888344d1e4d2eb8b659f","license":"MIT","urls":["bzz-raw://6e416a280c610b6b7a5f158e4a41aacfaec01ef14d5d1de13b46be9e090265fc","dweb:/ipfs/QmYZP2KrdyccBbhLZT42auhvBTMkwiwUS3V6HWb42rbwbG"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC5805.sol":{"keccak256":"0xfc12b717f6a2cd0d67adc8700097d4464d37f18ce933d4fc9c948ab6aec35e80","license":"MIT","urls":["bzz-raw://82386e69ebe902a2edfd4f8a5ecbeaeb2e00f6cc6481a973729e974373fb492e","dweb:/ipfs/QmSXg4wBMBd83mQvkekT1GsiRX2Qyv5gvrqzv5qJx2M7Kc"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC6372.sol":{"keccak256":"0xcaea9aeda3816ba872358c828f4f01455c22ae48ced49c4c7d72bd74176c09b9","license":"MIT","urls":["bzz-raw://16ff22d8df5aee94510ee43d361b6147caef164941a684cedcb75be44f351fe6","dweb:/ipfs/QmaCCwMdHVdPApuEJHLZapSJyA7mp5dAugpma3VUzWGd8E"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c","license":"MIT","urls":["bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15","dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305","license":"MIT","urls":["bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5","dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol":{"keccak256":"0x36c00327e3f9afd929cc2721aaa111ab57eff78a630cc364b279ad576b899295","license":"MIT","urls":["bzz-raw://f5bf927f4c8b71a5809be184c3107b915b0445ab2c4a33208331e5376692eb5a","dweb:/ipfs/QmVXirsCY1sf4kodhbL6w3NWZkeZeaMuQB7M6DBAdZNqFE"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Votes.sol":{"keccak256":"0x4e560f86662b6f72ab76122fff53317677154f14bac4a80dbd46a54172b3abfa","license":"MIT","urls":["bzz-raw://ca5c2518d247417cb01164f04eff57b7e87b5346bc03478ada916f26117aa7fd","dweb:/ipfs/QmVgK66XGZCiH9x4mhqejKUTujtu68DyE6KrYi6MPuaHRJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0xec63854014a5b4f2b3290ab9103a21bdf902a508d0f41a8573fea49e98bf571a","license":"MIT","urls":["bzz-raw://bc5b5dc12fbc4002f282eaa7a5f06d8310ed62c1c77c5770f6283e058454c39a","dweb:/ipfs/Qme9rE2wS3yBuyJq9GgbmzbsBQsW2M2sVFqYYLw7bosGrv"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Counters.sol":{"keccak256":"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1","license":"MIT","urls":["bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee","dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu"]},"lib/openzeppelin-contracts/contracts/utils/ShortStrings.sol":{"keccak256":"0xc0e310c163edf15db45d4ff938113ab357f94fa86e61ea8e790853c4d2e13256","license":"MIT","urls":["bzz-raw://04db5bc05dcb05ba1f6ca2dfbead17adc8a2e2f911aa80b05e7a36d9eaf96516","dweb:/ipfs/QmVkfHZbXVBUPsTopueCn3qGJX8aEjahFF3Fn4NcygLNm5"]},"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol":{"keccak256":"0xf09e68aa0dc6722a25bc46490e8d48ed864466d17313b8a0b254c36b54e49899","license":"MIT","urls":["bzz-raw://e26daf81e2252dc1fe1ce0e4b55c2eb7c6d1ee84ae6558d1a9554432ea1d32da","dweb:/ipfs/Qmb1UANWiWq5pCKbmHSu772hd4nt374dVaghGmwSVNuk8Q"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0","license":"MIT","urls":["bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f","dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n"]},"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol":{"keccak256":"0x809bc3edb4bcbef8263fa616c1b60ee0004b50a8a1bfa164d8f57fd31f520c58","license":"MIT","urls":["bzz-raw://8b93a1e39a4a19eba1600b92c96f435442db88cac91e315c8291547a2a7bcfe2","dweb:/ipfs/QmTm34KVe6uZBZwq8dZDNWwPcm24qBJdxqL3rPxBJ4LrMv"]},"lib/openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol":{"keccak256":"0x8432884527a7ad91e6eed1cfc5a0811ae2073e5bca107bd0ca442e9236b03dbd","license":"MIT","urls":["bzz-raw://e3aa0eadab7aafcf91a95684765f778f64386f0368de88522ce873c21385278a","dweb:/ipfs/QmPfaVAqWgH1QsT3dHVuL6jwMZbVKdoP8w1PvpiPT2FPWd"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3","license":"MIT","urls":["bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c","dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS"]},"lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol":{"keccak256":"0x52a8cfb0f5239d11b457dcdd1b326992ef672714ca8da71a157255bddd13f3ad","license":"MIT","urls":["bzz-raw://495145362c7ff1c9ca88c58bbbbcb412e3c2004406647412394486552ff6c278","dweb:/ipfs/QmNNCeng6d5eRPDn6tkWSQhjE39XWfQEfjA63rRwHmr1iH"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/wormhole/ethereum/contracts/interfaces/relayer/IWormholeRelayer.sol":{"keccak256":"0x286e8c1aee7a4382ca3e981f8a14c77ca6465365d61184d827ae18d5c25326fb","license":"Apache 2","urls":["bzz-raw://54af887098546d4d79d37c9bd9d0f79f634d261f8cd8b9d66c560d21a14cda13","dweb:/ipfs/QmZG7jP14F7KXJtTuRW7jBQsAEMNcxx4bhme5w22YNmZyU"]},"src/WormholeBase.sol":{"keccak256":"0xf304fe24bae540de2c2046b2c93021e9d8aceb5d352928f5eaa8f3af686ba15f","license":"MIT","urls":["bzz-raw://2d230289472871e5b8a4fdc772fee65f2ae28ebb033964e6340d761e16aeaa73","dweb:/ipfs/QmYB4nPuEr1Ufit5Lr3VW7pJoU5geCVPkG8hQ9LGHc3PeM"]},"src/WormholeL2ERC20.sol":{"keccak256":"0x67cbf26a3fc16445291570cea22169fd3b065ada2fb6d0ba41fcf2eac40933a6","license":"MIT","urls":["bzz-raw://9e7b5f6d703876aa23651cc72116162e2e4feb783cce8c806eaa679f6a0cde97","dweb:/ipfs/QmdUdqH2cUJw8umTkQ5X8bMftj5Vm3JFcxHwdb3R2vcs9a"]},"src/WormholeReceiver.sol":{"keccak256":"0x1d0777c6dd3baf1615b8caa3d20bf9a400c57ecf71b24b7fb53cb6dd5ca33fff","license":"MIT","urls":["bzz-raw://546c3f8fa457ade39ac986c5aefb0705858dac71377e245cd9a7cf967d56db53","dweb:/ipfs/QmVUEiwvs7qmBdT8h3aWUGHXGt4z7LLSQiTKhogKkRscYz"]},"src/WormholeSender.sol":{"keccak256":"0xfbd4a43b98eb9dbe5088d9c76ddbfd52c4eda9ee1b1812f2c362fb4a7d787d5e","license":"MIT","urls":["bzz-raw://b0ccd99cde3d2a3b6bb7c51fe1ec65abbe89f1acb84aa481230efbe7ea089398","dweb:/ipfs/QmQDvk2trQG2bFe8jqhxvLGGT73EoY8QdSSsZU61LvRxMQ"]},"src/interfaces/IL1Block.sol":{"keccak256":"0xc94e1ac033c36f10062f7844a4a00b555f28420ef6b64e02e0d196be33610e1f","license":"MIT","urls":["bzz-raw://a66e047a337a6b08addc7695e66b21d2a7cbac5b6245f717815255ed2f26283e","dweb:/ipfs/Qma1ohMf7JE1iZSDpqB44we7uLGdvL8CycpD3Ub3bpjK23"]}},"version":1}',
  metadata: {
    compiler: {
      version: '0.8.20+commit.a1b79de6',
    },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: 'string',
              name: '_name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: '_symbol',
              type: 'string',
            },
            {
              internalType: 'address',
              name: '_relayer',
              type: 'address',
            },
            {
              internalType: 'address',
              name: '_l1Block',
              type: 'address',
            },
            {
              internalType: 'uint16',
              name: '_sourceChain',
              type: 'uint16',
            },
            {
              internalType: 'uint16',
              name: '_targetChain',
              type: 'uint16',
            },
            {
              internalType: 'address',
              name: '_owner',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'constructor',
        },
        {
          inputs: [],
          type: 'error',
          name: 'AlreadyInitialized',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'deliveryHash',
              type: 'bytes32',
            },
          ],
          type: 'error',
          name: 'AlreadyProcessed',
        },
        {
          inputs: [],
          type: 'error',
          name: 'InvalidShortString',
        },
        {
          inputs: [],
          type: 'error',
          name: 'OnlyRelayerAllowed',
        },
        {
          inputs: [
            {
              internalType: 'string',
              name: 'str',
              type: 'string',
            },
          ],
          type: 'error',
          name: 'StringTooLong',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: 'wormholeAddress',
              type: 'bytes32',
            },
          ],
          type: 'error',
          name: 'UnregisteredSender',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'Approval',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegator',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'fromDelegate',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'toDelegate',
              type: 'address',
              indexed: true,
            },
          ],
          type: 'event',
          name: 'DelegateChanged',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegate',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint256',
              name: 'previousBalance',
              type: 'uint256',
              indexed: false,
            },
            {
              internalType: 'uint256',
              name: 'newBalance',
              type: 'uint256',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'DelegateVotesChanged',
          anonymous: false,
        },
        {
          inputs: [],
          type: 'event',
          name: 'EIP712DomainChanged',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'previousOwner',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address',
              indexed: true,
            },
          ],
          type: 'event',
          name: 'OwnershipTransferred',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint16',
              name: 'sourceChain',
              type: 'uint16',
              indexed: true,
            },
            {
              internalType: 'bytes32',
              name: 'sourceAddress',
              type: 'bytes32',
              indexed: true,
            },
          ],
          type: 'event',
          name: 'RegisteredSenderSet',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'targetAddress',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint16',
              name: 'targetChain',
              type: 'uint16',
              indexed: false,
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
              indexed: false,
            },
            {
              internalType: 'address',
              name: 'targetToken',
              type: 'address',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'TokenBridged',
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
              indexed: true,
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
              indexed: false,
            },
          ],
          type: 'event',
          name: 'Transfer',
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'CLOCK_MODE',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'DOMAIN_SEPARATOR',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'INITIALIZED',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'L1_BLOCK',
          outputs: [
            {
              internalType: 'contract IL1Block',
              name: '',
              type: 'address',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'L1_BRIDGE_ADDRESS',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'REFUND_CHAIN',
          outputs: [
            {
              internalType: 'uint16',
              name: '',
              type: 'uint16',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'TARGET_CHAIN',
          outputs: [
            {
              internalType: 'uint16',
              name: '',
              type: 'uint16',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'WORMHOLE_RELAYER',
          outputs: [
            {
              internalType: 'contract IWormholeRelayer',
              name: '',
              type: 'address',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'allowance',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'approve',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'balanceOf',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              internalType: 'uint32',
              name: 'pos',
              type: 'uint32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'checkpoints',
          outputs: [
            {
              internalType: 'struct ERC20Votes.Checkpoint',
              name: '',
              type: 'tuple',
              components: [
                {
                  internalType: 'uint32',
                  name: 'fromBlock',
                  type: 'uint32',
                },
                {
                  internalType: 'uint224',
                  name: 'votes',
                  type: 'uint224',
                },
              ],
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'clock',
          outputs: [
            {
              internalType: 'uint48',
              name: '',
              type: 'uint48',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'decimals',
          outputs: [
            {
              internalType: 'uint8',
              name: '',
              type: 'uint8',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'subtractedValue',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'decreaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegatee',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'delegate',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'delegatee',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'nonce',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'expiry',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8',
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'delegateBySig',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'delegates',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'eip712Domain',
          outputs: [
            {
              internalType: 'bytes1',
              name: 'fields',
              type: 'bytes1',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
            {
              internalType: 'string',
              name: 'version',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'chainId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'verifyingContract',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'salt',
              type: 'bytes32',
            },
            {
              internalType: 'uint256[]',
              name: 'extensions',
              type: 'uint256[]',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'timepoint',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'getPastTotalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'timepoint',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'getPastVotes',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'getVotes',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'addedValue',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'increaseAllowance',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'l1BridgeAddress',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'initialize',
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          stateMutability: 'payable',
          type: 'function',
          name: 'l1Unlock',
          outputs: [
            {
              internalType: 'uint256',
              name: 'sequence',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'nonces',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'account',
              type: 'address',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'numCheckpoints',
          outputs: [
            {
              internalType: 'uint32',
              name: '',
              type: 'uint32',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'owner',
          outputs: [
            {
              internalType: 'address',
              name: '',
              type: 'address',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'owner',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'spender',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'deadline',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'v',
              type: 'uint8',
            },
            {
              internalType: 'bytes32',
              name: 'r',
              type: 'bytes32',
            },
            {
              internalType: 'bytes32',
              name: 's',
              type: 'bytes32',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'permit',
        },
        {
          inputs: [
            {
              internalType: 'uint16',
              name: 'targetChain',
              type: 'uint16',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'quoteDeliveryCost',
          outputs: [
            {
              internalType: 'uint256',
              name: 'cost',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'bytes',
              name: 'payload',
              type: 'bytes',
            },
            {
              internalType: 'bytes[]',
              name: '',
              type: 'bytes[]',
            },
            {
              internalType: 'bytes32',
              name: 'sourceAddress',
              type: 'bytes32',
            },
            {
              internalType: 'uint16',
              name: 'sourceChain',
              type: 'uint16',
            },
            {
              internalType: 'bytes32',
              name: 'deliveryHash',
              type: 'bytes32',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'receiveWormholeMessages',
        },
        {
          inputs: [
            {
              internalType: 'uint16',
              name: '',
              type: 'uint16',
            },
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'registeredSenders',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'renounceOwnership',
        },
        {
          inputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
          name: 'seenDeliveryVaaHashes',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'uint16',
              name: 'sourceChain',
              type: 'uint16',
            },
            {
              internalType: 'bytes32',
              name: 'sourceAddress',
              type: 'bytes32',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'setRegisteredSender',
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'symbol',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string',
            },
          ],
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'totalSupply',
          outputs: [
            {
              internalType: 'uint256',
              name: '',
              type: 'uint256',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'transfer',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'from',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'to',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'transferFrom',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool',
            },
          ],
        },
        {
          inputs: [
            {
              internalType: 'address',
              name: 'newOwner',
              type: 'address',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'transferOwnership',
        },
      ],
      devdoc: {
        kind: 'dev',
        methods: {
          'CLOCK_MODE()': {
            details: 'Description of the clock',
          },
          'DOMAIN_SEPARATOR()': {
            details: 'See {IERC20Permit-DOMAIN_SEPARATOR}.',
          },
          'allowance(address,address)': {
            details: 'See {IERC20-allowance}.',
          },
          'approve(address,uint256)': {
            details:
              'See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.',
          },
          'balanceOf(address)': {
            details: 'See {IERC20-balanceOf}.',
          },
          'checkpoints(address,uint32)': {
            details: 'Get the `pos`-th checkpoint for `account`.',
          },
          'clock()': {
            details: 'Clock used for flagging checkpoints.',
          },
          constructor: {
            params: {
              _l1Block: 'The contract that manages the clock for the ERC20.',
              _name: 'The name of the ERC20 token.',
              _relayer: 'The address of the Wormhole relayer.',
              _sourceChain: 'The chain sending wormhole messages.',
              _symbol: 'The symbol of the ERC20 token.',
              _targetChain: 'The chain to send wormhole messages.',
            },
          },
          'decimals()': {
            details:
              "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.",
          },
          'decreaseAllowance(address,uint256)': {
            details:
              'Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.',
          },
          'delegate(address)': {
            details: 'Delegate votes from the sender to `delegatee`.',
          },
          'delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)': {
            details: 'Delegates votes from signer to `delegatee`',
          },
          'delegates(address)': {
            details: 'Get the address `account` is currently delegating to.',
          },
          'eip712Domain()': {
            details: 'See {EIP-5267}. _Available since v4.9._',
          },
          'getPastTotalSupply(uint256)': {
            details:
              'Retrieve the `totalSupply` at the end of `timepoint`. Note, this value is the sum of all balances. It is NOT the sum of all the delegated votes! Requirements: - `timepoint` must be in the past',
          },
          'getPastVotes(address,uint256)': {
            details:
              'Retrieve the number of votes for `account` at the end of `timepoint`. Requirements: - `timepoint` must be in the past',
          },
          'getVotes(address)': {
            details: 'Gets the current votes balance for `account`',
          },
          'increaseAllowance(address,uint256)': {
            details:
              'Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.',
          },
          'initialize(address)': {
            params: {
              l1BridgeAddress: 'The address of the L1 token for this L2 token.',
            },
          },
          'l1Unlock(address,uint256)': {
            params: {
              account: 'The account where the tokens will be transferred.',
              amount: 'The amount of tokens to be unlocked.',
            },
          },
          'name()': {
            details: 'Returns the name of the token.',
          },
          'nonces(address)': {
            details: 'See {IERC20Permit-nonces}.',
          },
          'numCheckpoints(address)': {
            details: 'Get number of checkpoints for `account`.',
          },
          'owner()': {
            details: 'Returns the address of the current owner.',
          },
          'permit(address,address,uint256,uint256,uint8,bytes32,bytes32)': {
            details: 'See {IERC20Permit-permit}.',
          },
          'quoteDeliveryCost(uint16)': {
            params: {
              targetChain: 'The chain id of the chain receiving the messages.',
            },
          },
          'receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)': {
            params: {
              payload: 'The payload that was sent to in the delivery request.',
            },
          },
          'renounceOwnership()': {
            details:
              'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.',
          },
          'setRegisteredSender(uint16,bytes32)': {
            details: 'Set a registered sender for a given chain.',
            params: {
              sourceAddress: 'The source address for receiving a wormhole message.',
              sourceChain: 'The Wormhole ID of the source chain to set the registered sender.',
            },
          },
          'symbol()': {
            details: 'Returns the symbol of the token, usually a shorter version of the name.',
          },
          'totalSupply()': {
            details: 'See {IERC20-totalSupply}.',
          },
          'transfer(address,uint256)': {
            details:
              'See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.',
          },
          'transferFrom(address,address,uint256)': {
            details:
              "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.",
          },
          'transferOwnership(address)': {
            details:
              'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.',
          },
        },
        version: 1,
      },
      userdoc: {
        kind: 'user',
        methods: {
          'INITIALIZED()': {
            notice:
              'Used to indicate whether the contract has been initialized with the L2 token address.',
          },
          'L1_BLOCK()': {
            notice: 'The contract that handles fetching the L1 block on the L2.',
          },
          'L1_BRIDGE_ADDRESS()': {
            notice: 'The L1 bridge address.',
          },
          'REFUND_CHAIN()': {
            notice: 'The chain id where refunds will be sent.',
          },
          'TARGET_CHAIN()': {
            notice: 'The chain id that is receiving the messages.',
          },
          'WORMHOLE_RELAYER()': {
            notice: 'The wormhole relayer used to trustlessly send messages.',
          },
          'initialize(address)': {
            notice: 'Must be called before bridging tokens to L2.',
          },
          'l1Unlock(address,uint256)': {
            notice: 'Burn L2 tokens and unlock tokens on the L1.',
          },
          'receiveWormholeMessages(bytes,bytes[],bytes32,uint16,bytes32)': {
            notice: 'Receives a message from L1 and mints L2 tokens.',
          },
        },
        version: 1,
      },
    },
    settings: {
      remappings: [
        '@openzeppelin/contracts/=lib/flexible-voting/lib/openzeppelin-contracts/contracts/',
        'aave-v3-core/=lib/flexible-voting/lib/aave-v3-core/',
        'comet/=lib/flexible-voting/lib/comet/contracts/',
        'ds-test/=lib/forge-std/lib/ds-test/src/',
        'erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/',
        'flexible-voting/=lib/flexible-voting/',
        'forge-std/=lib/forge-std/src/',
        'openzeppelin-contracts/=lib/openzeppelin-contracts/',
        'openzeppelin-flexible-voting/=lib/flexible-voting/lib/openzeppelin-contracts/contracts/',
        'openzeppelin/=lib/openzeppelin-contracts/contracts/',
        'solmate/=lib/flexible-voting/lib/solmate/src/',
        'wormhole-solidity-sdk/=lib/wormhole-solidity-sdk/src/',
        'wormhole/=lib/wormhole/ethereum/contracts/',
      ],
      optimizer: {
        enabled: true,
        runs: 10000000,
      },
      metadata: {
        bytecodeHash: 'ipfs',
      },
      compilationTarget: {
        'src/WormholeL2ERC20.sol': 'WormholeL2ERC20',
      },
      libraries: {},
    },
    sources: {
      'lib/openzeppelin-contracts/contracts/access/Ownable.sol': {
        keccak256: '0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218',
        urls: [
          'bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32',
          'dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/governance/utils/IVotes.sol': {
        keccak256: '0x1618ddebe73377660f6da71afcba35d5ac4c4600918b3a381d9c6f37eba613eb',
        urls: [
          'bzz-raw://666c8d7c62478b55e082f1835275b7acfc1595491998df6d67183ff2c70eab96',
          'dweb:/ipfs/QmVXmnXfxNaLhoX283dqyKJ8DJbF5thUd9sMuRoFpNMwr7',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/interfaces/IERC5267.sol': {
        keccak256: '0xac6c2efc64baccbde4904ae18ed45139c9aa8cff96d6888344d1e4d2eb8b659f',
        urls: [
          'bzz-raw://6e416a280c610b6b7a5f158e4a41aacfaec01ef14d5d1de13b46be9e090265fc',
          'dweb:/ipfs/QmYZP2KrdyccBbhLZT42auhvBTMkwiwUS3V6HWb42rbwbG',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/interfaces/IERC5805.sol': {
        keccak256: '0xfc12b717f6a2cd0d67adc8700097d4464d37f18ce933d4fc9c948ab6aec35e80',
        urls: [
          'bzz-raw://82386e69ebe902a2edfd4f8a5ecbeaeb2e00f6cc6481a973729e974373fb492e',
          'dweb:/ipfs/QmSXg4wBMBd83mQvkekT1GsiRX2Qyv5gvrqzv5qJx2M7Kc',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/interfaces/IERC6372.sol': {
        keccak256: '0xcaea9aeda3816ba872358c828f4f01455c22ae48ced49c4c7d72bd74176c09b9',
        urls: [
          'bzz-raw://16ff22d8df5aee94510ee43d361b6147caef164941a684cedcb75be44f351fe6',
          'dweb:/ipfs/QmaCCwMdHVdPApuEJHLZapSJyA7mp5dAugpma3VUzWGd8E',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol': {
        keccak256: '0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c',
        urls: [
          'bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15',
          'dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol': {
        keccak256: '0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305',
        urls: [
          'bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5',
          'dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol': {
        keccak256: '0x36c00327e3f9afd929cc2721aaa111ab57eff78a630cc364b279ad576b899295',
        urls: [
          'bzz-raw://f5bf927f4c8b71a5809be184c3107b915b0445ab2c4a33208331e5376692eb5a',
          'dweb:/ipfs/QmVXirsCY1sf4kodhbL6w3NWZkeZeaMuQB7M6DBAdZNqFE',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Votes.sol': {
        keccak256: '0x4e560f86662b6f72ab76122fff53317677154f14bac4a80dbd46a54172b3abfa',
        urls: [
          'bzz-raw://ca5c2518d247417cb01164f04eff57b7e87b5346bc03478ada916f26117aa7fd',
          'dweb:/ipfs/QmVgK66XGZCiH9x4mhqejKUTujtu68DyE6KrYi6MPuaHRJ',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol': {
        keccak256: '0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca',
        urls: [
          'bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd',
          'dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol': {
        keccak256: '0xec63854014a5b4f2b3290ab9103a21bdf902a508d0f41a8573fea49e98bf571a',
        urls: [
          'bzz-raw://bc5b5dc12fbc4002f282eaa7a5f06d8310ed62c1c77c5770f6283e058454c39a',
          'dweb:/ipfs/Qme9rE2wS3yBuyJq9GgbmzbsBQsW2M2sVFqYYLw7bosGrv',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/Context.sol': {
        keccak256: '0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7',
        urls: [
          'bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92',
          'dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/Counters.sol': {
        keccak256: '0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1',
        urls: [
          'bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee',
          'dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/ShortStrings.sol': {
        keccak256: '0xc0e310c163edf15db45d4ff938113ab357f94fa86e61ea8e790853c4d2e13256',
        urls: [
          'bzz-raw://04db5bc05dcb05ba1f6ca2dfbead17adc8a2e2f911aa80b05e7a36d9eaf96516',
          'dweb:/ipfs/QmVkfHZbXVBUPsTopueCn3qGJX8aEjahFF3Fn4NcygLNm5',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol': {
        keccak256: '0xf09e68aa0dc6722a25bc46490e8d48ed864466d17313b8a0b254c36b54e49899',
        urls: [
          'bzz-raw://e26daf81e2252dc1fe1ce0e4b55c2eb7c6d1ee84ae6558d1a9554432ea1d32da',
          'dweb:/ipfs/Qmb1UANWiWq5pCKbmHSu772hd4nt374dVaghGmwSVNuk8Q',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/Strings.sol': {
        keccak256: '0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0',
        urls: [
          'bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f',
          'dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol': {
        keccak256: '0x809bc3edb4bcbef8263fa616c1b60ee0004b50a8a1bfa164d8f57fd31f520c58',
        urls: [
          'bzz-raw://8b93a1e39a4a19eba1600b92c96f435442db88cac91e315c8291547a2a7bcfe2',
          'dweb:/ipfs/QmTm34KVe6uZBZwq8dZDNWwPcm24qBJdxqL3rPxBJ4LrMv',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol': {
        keccak256: '0x8432884527a7ad91e6eed1cfc5a0811ae2073e5bca107bd0ca442e9236b03dbd',
        urls: [
          'bzz-raw://e3aa0eadab7aafcf91a95684765f778f64386f0368de88522ce873c21385278a',
          'dweb:/ipfs/QmPfaVAqWgH1QsT3dHVuL6jwMZbVKdoP8w1PvpiPT2FPWd',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/math/Math.sol': {
        keccak256: '0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3',
        urls: [
          'bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c',
          'dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol': {
        keccak256: '0x52a8cfb0f5239d11b457dcdd1b326992ef672714ca8da71a157255bddd13f3ad',
        urls: [
          'bzz-raw://495145362c7ff1c9ca88c58bbbbcb412e3c2004406647412394486552ff6c278',
          'dweb:/ipfs/QmNNCeng6d5eRPDn6tkWSQhjE39XWfQEfjA63rRwHmr1iH',
        ],
        license: 'MIT',
      },
      'lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol': {
        keccak256: '0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc',
        urls: [
          'bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7',
          'dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6',
        ],
        license: 'MIT',
      },
      'lib/wormhole/ethereum/contracts/interfaces/relayer/IWormholeRelayer.sol': {
        keccak256: '0x286e8c1aee7a4382ca3e981f8a14c77ca6465365d61184d827ae18d5c25326fb',
        urls: [
          'bzz-raw://54af887098546d4d79d37c9bd9d0f79f634d261f8cd8b9d66c560d21a14cda13',
          'dweb:/ipfs/QmZG7jP14F7KXJtTuRW7jBQsAEMNcxx4bhme5w22YNmZyU',
        ],
        license: 'Apache 2',
      },
      'src/WormholeBase.sol': {
        keccak256: '0xf304fe24bae540de2c2046b2c93021e9d8aceb5d352928f5eaa8f3af686ba15f',
        urls: [
          'bzz-raw://2d230289472871e5b8a4fdc772fee65f2ae28ebb033964e6340d761e16aeaa73',
          'dweb:/ipfs/QmYB4nPuEr1Ufit5Lr3VW7pJoU5geCVPkG8hQ9LGHc3PeM',
        ],
        license: 'MIT',
      },
      'src/WormholeL2ERC20.sol': {
        keccak256: '0x67cbf26a3fc16445291570cea22169fd3b065ada2fb6d0ba41fcf2eac40933a6',
        urls: [
          'bzz-raw://9e7b5f6d703876aa23651cc72116162e2e4feb783cce8c806eaa679f6a0cde97',
          'dweb:/ipfs/QmdUdqH2cUJw8umTkQ5X8bMftj5Vm3JFcxHwdb3R2vcs9a',
        ],
        license: 'MIT',
      },
      'src/WormholeReceiver.sol': {
        keccak256: '0x1d0777c6dd3baf1615b8caa3d20bf9a400c57ecf71b24b7fb53cb6dd5ca33fff',
        urls: [
          'bzz-raw://546c3f8fa457ade39ac986c5aefb0705858dac71377e245cd9a7cf967d56db53',
          'dweb:/ipfs/QmVUEiwvs7qmBdT8h3aWUGHXGt4z7LLSQiTKhogKkRscYz',
        ],
        license: 'MIT',
      },
      'src/WormholeSender.sol': {
        keccak256: '0xfbd4a43b98eb9dbe5088d9c76ddbfd52c4eda9ee1b1812f2c362fb4a7d787d5e',
        urls: [
          'bzz-raw://b0ccd99cde3d2a3b6bb7c51fe1ec65abbe89f1acb84aa481230efbe7ea089398',
          'dweb:/ipfs/QmQDvk2trQG2bFe8jqhxvLGGT73EoY8QdSSsZU61LvRxMQ',
        ],
        license: 'MIT',
      },
      'src/interfaces/IL1Block.sol': {
        keccak256: '0xc94e1ac033c36f10062f7844a4a00b555f28420ef6b64e02e0d196be33610e1f',
        urls: [
          'bzz-raw://a66e047a337a6b08addc7695e66b21d2a7cbac5b6245f717815255ed2f26283e',
          'dweb:/ipfs/Qma1ohMf7JE1iZSDpqB44we7uLGdvL8CycpD3Ub3bpjK23',
        ],
        license: 'MIT',
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: 'src/WormholeL2ERC20.sol',
    id: 73874,
    exportedSymbols: {
      ERC20: [55301],
      ERC20Permit: [55551],
      ERC20Votes: [56285],
      IL1Block: [74311],
      SafeCast: [60734],
      WormholeBase: [73047],
      WormholeL2ERC20: [73873],
      WormholeReceiver: [74207],
      WormholeSender: [74260],
    },
    nodeType: 'SourceUnit',
    src: '32:3990:110',
    nodes: [
      {
        id: 73623,
        nodeType: 'PragmaDirective',
        src: '32:24:110',
        nodes: [],
        literals: ['solidity', '^', '0.8', '.20'],
      },
      {
        id: 73625,
        nodeType: 'ImportDirective',
        src: '58:57:110',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol',
        file: 'openzeppelin/token/ERC20/ERC20.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 55302,
        symbolAliases: [
          {
            foreign: {
              id: 73624,
              name: 'ERC20',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 55301,
              src: '66:5:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73627,
        nodeType: 'ImportDirective',
        src: '116:78:110',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Votes.sol',
        file: 'openzeppelin/token/ERC20/extensions/ERC20Votes.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 56286,
        symbolAliases: [
          {
            foreign: {
              id: 73626,
              name: 'ERC20Votes',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 56285,
              src: '124:10:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73629,
        nodeType: 'ImportDirective',
        src: '195:80:110',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Permit.sol',
        file: 'openzeppelin/token/ERC20/extensions/ERC20Permit.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 55552,
        symbolAliases: [
          {
            foreign: {
              id: 73628,
              name: 'ERC20Permit',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 55551,
              src: '203:11:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73631,
        nodeType: 'ImportDirective',
        src: '276:62:110',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/utils/math/SafeCast.sol',
        file: 'openzeppelin/utils/math/SafeCast.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 60735,
        symbolAliases: [
          {
            foreign: {
              id: 73630,
              name: 'SafeCast',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 60734,
              src: '284:8:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73633,
        nodeType: 'ImportDirective',
        src: '339:54:110',
        nodes: [],
        absolutePath: 'src/WormholeSender.sol',
        file: 'src/WormholeSender.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 74261,
        symbolAliases: [
          {
            foreign: {
              id: 73632,
              name: 'WormholeSender',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 74260,
              src: '347:14:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73635,
        nodeType: 'ImportDirective',
        src: '394:58:110',
        nodes: [],
        absolutePath: 'src/WormholeReceiver.sol',
        file: 'src/WormholeReceiver.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 74208,
        symbolAliases: [
          {
            foreign: {
              id: 73634,
              name: 'WormholeReceiver',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 74207,
              src: '402:16:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73637,
        nodeType: 'ImportDirective',
        src: '453:50:110',
        nodes: [],
        absolutePath: 'src/WormholeBase.sol',
        file: 'src/WormholeBase.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 73048,
        symbolAliases: [
          {
            foreign: {
              id: 73636,
              name: 'WormholeBase',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 73047,
              src: '461:12:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73639,
        nodeType: 'ImportDirective',
        src: '505:53:110',
        nodes: [],
        absolutePath: 'src/interfaces/IL1Block.sol',
        file: 'src/interfaces/IL1Block.sol',
        nameLocation: '-1:-1:-1',
        scope: 73874,
        sourceUnit: 74312,
        symbolAliases: [
          {
            foreign: {
              id: 73638,
              name: 'IL1Block',
              nodeType: 'Identifier',
              overloadedDeclarations: [],
              referencedDeclaration: 74311,
              src: '513:8:110',
              typeDescriptions: {},
            },
            nameLocation: '-1:-1:-1',
          },
        ],
        unitAlias: '',
      },
      {
        id: 73873,
        nodeType: 'ContractDefinition',
        src: '560:3461:110',
        nodes: [
          {
            id: 73649,
            nodeType: 'VariableDeclaration',
            src: '710:34:110',
            nodes: [],
            constant: false,
            documentation: {
              id: 73646,
              nodeType: 'StructuredDocumentation',
              src: '637:70:110',
              text: '@notice The contract that handles fetching the L1 block on the L2.',
            },
            functionSelector: '47718590',
            mutability: 'immutable',
            name: 'L1_BLOCK',
            nameLocation: '736:8:110',
            scope: 73873,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_contract$_IL1Block_$74311',
              typeString: 'contract IL1Block',
            },
            typeName: {
              id: 73648,
              nodeType: 'UserDefinedTypeName',
              pathNode: {
                id: 73647,
                name: 'IL1Block',
                nameLocations: ['710:8:110'],
                nodeType: 'IdentifierPath',
                referencedDeclaration: 74311,
                src: '710:8:110',
              },
              referencedDeclaration: 74311,
              src: '710:8:110',
              typeDescriptions: {
                typeIdentifier: 't_contract$_IL1Block_$74311',
                typeString: 'contract IL1Block',
              },
            },
            visibility: 'public',
          },
          {
            id: 73653,
            nodeType: 'VariableDeclaration',
            src: '849:31:110',
            nodes: [],
            constant: false,
            documentation: {
              id: 73650,
              nodeType: 'StructuredDocumentation',
              src: '749:97:110',
              text: '@notice Used to indicate whether the contract has been initialized with the L2 token address.',
            },
            functionSelector: '95288883',
            mutability: 'mutable',
            name: 'INITIALIZED',
            nameLocation: '861:11:110',
            scope: 73873,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_bool',
              typeString: 'bool',
            },
            typeName: {
              id: 73651,
              name: 'bool',
              nodeType: 'ElementaryTypeName',
              src: '849:4:110',
              typeDescriptions: {
                typeIdentifier: 't_bool',
                typeString: 'bool',
              },
            },
            value: {
              hexValue: '66616c7365',
              id: 73652,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: 'bool',
              lValueRequested: false,
              nodeType: 'Literal',
              src: '875:5:110',
              typeDescriptions: {
                typeIdentifier: 't_bool',
                typeString: 'bool',
              },
              value: 'false',
            },
            visibility: 'public',
          },
          {
            id: 73656,
            nodeType: 'VariableDeclaration',
            src: '922:32:110',
            nodes: [],
            constant: false,
            documentation: {
              id: 73654,
              nodeType: 'StructuredDocumentation',
              src: '885:34:110',
              text: '@notice The L1 bridge address.',
            },
            functionSelector: '248a20f6',
            mutability: 'mutable',
            name: 'L1_BRIDGE_ADDRESS',
            nameLocation: '937:17:110',
            scope: 73873,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address',
              typeString: 'address',
            },
            typeName: {
              id: 73655,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '922:7:110',
              stateMutability: 'nonpayable',
              typeDescriptions: {
                typeIdentifier: 't_address',
                typeString: 'address',
              },
            },
            visibility: 'public',
          },
          {
            id: 73659,
            nodeType: 'ErrorDefinition',
            src: '1020:27:110',
            nodes: [],
            documentation: {
              id: 73657,
              nodeType: 'StructuredDocumentation',
              src: '959:58:110',
              text: '@dev Contract is already initialized with an L2 token.',
            },
            errorSelector: '0dc149f0',
            name: 'AlreadyInitialized',
            nameLocation: '1026:18:110',
            parameters: {
              id: 73658,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1044:2:110',
            },
          },
          {
            id: 73671,
            nodeType: 'EventDefinition',
            src: '1051:156:110',
            nodes: [],
            anonymous: false,
            eventSelector: '7f863bfd0e15eb79a67d8b8dae6046d95ec57572b68d9b117e171399813355e9',
            name: 'TokenBridged',
            nameLocation: '1057:12:110',
            parameters: {
              id: 73670,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73661,
                  indexed: true,
                  mutability: 'mutable',
                  name: 'account',
                  nameLocation: '1091:7:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73671,
                  src: '1075:23:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73660,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1075:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73663,
                  indexed: true,
                  mutability: 'mutable',
                  name: 'targetAddress',
                  nameLocation: '1120:13:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73671,
                  src: '1104:29:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73662,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1104:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73665,
                  indexed: false,
                  mutability: 'mutable',
                  name: 'targetChain',
                  nameLocation: '1146:11:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73671,
                  src: '1139:18:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint16',
                    typeString: 'uint16',
                  },
                  typeName: {
                    id: 73664,
                    name: 'uint16',
                    nodeType: 'ElementaryTypeName',
                    src: '1139:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73667,
                  indexed: false,
                  mutability: 'mutable',
                  name: 'amount',
                  nameLocation: '1171:6:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73671,
                  src: '1163:14:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                  typeName: {
                    id: 73666,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1163:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73669,
                  indexed: false,
                  mutability: 'mutable',
                  name: 'targetToken',
                  nameLocation: '1191:11:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73671,
                  src: '1183:19:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73668,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1183:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '1069:137:110',
            },
          },
          {
            id: 73713,
            nodeType: 'FunctionDefinition',
            src: '1569:376:110',
            nodes: [],
            body: {
              id: 73712,
              nodeType: 'Block',
              src: '1905:40:110',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 73710,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 73706,
                      name: 'L1_BLOCK',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73649,
                      src: '1911:8:110',
                      typeDescriptions: {
                        typeIdentifier: 't_contract$_IL1Block_$74311',
                        typeString: 'contract IL1Block',
                      },
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      arguments: [
                        {
                          id: 73708,
                          name: '_l1Block',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 73680,
                          src: '1931:8:110',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        ],
                        id: 73707,
                        name: 'IL1Block',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 74311,
                        src: '1922:8:110',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_contract$_IL1Block_$74311_$',
                          typeString: 'type(contract IL1Block)',
                        },
                      },
                      id: 73709,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'typeConversion',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1922:18:110',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_contract$_IL1Block_$74311',
                        typeString: 'contract IL1Block',
                      },
                    },
                    src: '1911:29:110',
                    typeDescriptions: {
                      typeIdentifier: 't_contract$_IL1Block_$74311',
                      typeString: 'contract IL1Block',
                    },
                  },
                  id: 73711,
                  nodeType: 'ExpressionStatement',
                  src: '1911:29:110',
                },
              ],
            },
            documentation: {
              id: 73672,
              nodeType: 'StructuredDocumentation',
              src: '1211:355:110',
              text: '@param _name The name of the ERC20 token.\n @param _symbol The symbol of the ERC20 token.\n @param _relayer The address of the Wormhole relayer.\n @param _l1Block The contract that manages the clock for the ERC20.\n @param _sourceChain The chain sending wormhole messages.\n @param _targetChain The chain to send wormhole messages.',
            },
            implemented: true,
            kind: 'constructor',
            modifiers: [
              {
                arguments: [
                  {
                    id: 73689,
                    name: '_relayer',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73678,
                    src: '1768:8:110',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                ],
                id: 73690,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 73688,
                  name: 'WormholeBase',
                  nameLocations: ['1755:12:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 73047,
                  src: '1755:12:110',
                },
                nodeType: 'ModifierInvocation',
                src: '1755:22:110',
              },
              {
                arguments: [
                  {
                    id: 73692,
                    name: '_name',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73674,
                    src: '1788:5:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory',
                    },
                  },
                  {
                    id: 73693,
                    name: '_symbol',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73676,
                    src: '1795:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory',
                    },
                  },
                ],
                id: 73694,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 73691,
                  name: 'ERC20',
                  nameLocations: ['1782:5:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 55301,
                  src: '1782:5:110',
                },
                nodeType: 'ModifierInvocation',
                src: '1782:21:110',
              },
              {
                arguments: [
                  {
                    id: 73696,
                    name: '_name',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73674,
                    src: '1820:5:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory',
                    },
                  },
                ],
                id: 73697,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 73695,
                  name: 'ERC20Permit',
                  nameLocations: ['1808:11:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 55551,
                  src: '1808:11:110',
                },
                nodeType: 'ModifierInvocation',
                src: '1808:18:110',
              },
              {
                arguments: [
                  {
                    id: 73699,
                    name: '_sourceChain',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73682,
                    src: '1846:12:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  {
                    id: 73700,
                    name: '_targetChain',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73684,
                    src: '1860:12:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                ],
                id: 73701,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 73698,
                  name: 'WormholeSender',
                  nameLocations: ['1831:14:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 74260,
                  src: '1831:14:110',
                },
                nodeType: 'ModifierInvocation',
                src: '1831:42:110',
              },
              {
                arguments: [
                  {
                    id: 73703,
                    name: '_owner',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73686,
                    src: '1895:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                ],
                id: 73704,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 73702,
                  name: 'WormholeReceiver',
                  nameLocations: ['1878:16:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 74207,
                  src: '1878:16:110',
                },
                nodeType: 'ModifierInvocation',
                src: '1878:24:110',
              },
            ],
            name: '',
            nameLocation: '-1:-1:-1',
            parameters: {
              id: 73687,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73674,
                  mutability: 'mutable',
                  name: '_name',
                  nameLocation: '1600:5:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1586:19:110',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string',
                  },
                  typeName: {
                    id: 73673,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1586:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73676,
                  mutability: 'mutable',
                  name: '_symbol',
                  nameLocation: '1625:7:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1611:21:110',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string',
                  },
                  typeName: {
                    id: 73675,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1611:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73678,
                  mutability: 'mutable',
                  name: '_relayer',
                  nameLocation: '1646:8:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1638:16:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73677,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1638:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73680,
                  mutability: 'mutable',
                  name: '_l1Block',
                  nameLocation: '1668:8:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1660:16:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73679,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1660:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73682,
                  mutability: 'mutable',
                  name: '_sourceChain',
                  nameLocation: '1689:12:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1682:19:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint16',
                    typeString: 'uint16',
                  },
                  typeName: {
                    id: 73681,
                    name: 'uint16',
                    nodeType: 'ElementaryTypeName',
                    src: '1682:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73684,
                  mutability: 'mutable',
                  name: '_targetChain',
                  nameLocation: '1714:12:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1707:19:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint16',
                    typeString: 'uint16',
                  },
                  typeName: {
                    id: 73683,
                    name: 'uint16',
                    nodeType: 'ElementaryTypeName',
                    src: '1707:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73686,
                  mutability: 'mutable',
                  name: '_owner',
                  nameLocation: '1740:6:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73713,
                  src: '1732:14:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73685,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '1732:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '1580:170:110',
            },
            returnParameters: {
              id: 73705,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1905:0:110',
            },
            scope: 73873,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public',
          },
          {
            id: 73733,
            nodeType: 'FunctionDefinition',
            src: '2084:172:110',
            nodes: [],
            body: {
              id: 73732,
              nodeType: 'Block',
              src: '2136:120:110',
              nodes: [],
              statements: [
                {
                  condition: {
                    id: 73719,
                    name: 'INITIALIZED',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73653,
                    src: '2146:11:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                  },
                  id: 73723,
                  nodeType: 'IfStatement',
                  src: '2142:44:110',
                  trueBody: {
                    errorCall: {
                      arguments: [],
                      expression: {
                        argumentTypes: [],
                        id: 73720,
                        name: 'AlreadyInitialized',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73659,
                        src: '2166:18:110',
                        typeDescriptions: {
                          typeIdentifier: 't_function_error_pure$__$returns$__$',
                          typeString: 'function () pure',
                        },
                      },
                      id: 73721,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '2166:20:110',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 73722,
                    nodeType: 'RevertStatement',
                    src: '2159:27:110',
                  },
                },
                {
                  expression: {
                    id: 73726,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 73724,
                      name: 'INITIALIZED',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73653,
                      src: '2192:11:110',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '74727565',
                      id: 73725,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'bool',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '2206:4:110',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                      value: 'true',
                    },
                    src: '2192:18:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                  },
                  id: 73727,
                  nodeType: 'ExpressionStatement',
                  src: '2192:18:110',
                },
                {
                  expression: {
                    id: 73730,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 73728,
                      name: 'L1_BRIDGE_ADDRESS',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73656,
                      src: '2216:17:110',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 73729,
                      name: 'l1BridgeAddress',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73716,
                      src: '2236:15:110',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    src: '2216:35:110',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  id: 73731,
                  nodeType: 'ExpressionStatement',
                  src: '2216:35:110',
                },
              ],
            },
            documentation: {
              id: 73714,
              nodeType: 'StructuredDocumentation',
              src: '1949:132:110',
              text: '@notice Must be called before bridging tokens to L2.\n @param l1BridgeAddress The address of the L1 token for this L2 token.',
            },
            functionSelector: 'c4d66de8',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'initialize',
            nameLocation: '2093:10:110',
            parameters: {
              id: 73717,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73716,
                  mutability: 'mutable',
                  name: 'l1BridgeAddress',
                  nameLocation: '2112:15:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73733,
                  src: '2104:23:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73715,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '2104:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '2103:25:110',
            },
            returnParameters: {
              id: 73718,
              nodeType: 'ParameterList',
              parameters: [],
              src: '2136:0:110',
            },
            scope: 73873,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public',
          },
          {
            id: 73781,
            nodeType: 'FunctionDefinition',
            src: '2397:381:110',
            nodes: [],
            body: {
              id: 73780,
              nodeType: 'Block',
              src: '2696:82:110',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                baseExpression: {
                                  id: 73763,
                                  name: 'payload',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 73736,
                                  src: '2724:7:110',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes_calldata_ptr',
                                    typeString: 'bytes calldata',
                                  },
                                },
                                endExpression: {
                                  hexValue: '3230',
                                  id: 73764,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2733:2:110',
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_20_by_1',
                                    typeString: 'int_const 20',
                                  },
                                  value: '20',
                                },
                                id: 73765,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexRangeAccess',
                                src: '2724:12:110',
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes_calldata_ptr_slice',
                                  typeString: 'bytes calldata slice',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes_calldata_ptr_slice',
                                  typeString: 'bytes calldata slice',
                                },
                              ],
                              id: 73762,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: 'ElementaryTypeNameExpression',
                              src: '2716:7:110',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_bytes20_$',
                                typeString: 'type(bytes20)',
                              },
                              typeName: {
                                id: 73761,
                                name: 'bytes20',
                                nodeType: 'ElementaryTypeName',
                                src: '2716:7:110',
                                typeDescriptions: {},
                              },
                            },
                            id: 73766,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'typeConversion',
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2716:21:110',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_bytes20',
                              typeString: 'bytes20',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_bytes20',
                              typeString: 'bytes20',
                            },
                          ],
                          id: 73760,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '2708:7:110',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_$',
                            typeString: 'type(address)',
                          },
                          typeName: {
                            id: 73759,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '2708:7:110',
                            typeDescriptions: {},
                          },
                        },
                        id: 73767,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2708:30:110',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                baseExpression: {
                                  id: 73772,
                                  name: 'payload',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 73736,
                                  src: '2756:7:110',
                                  typeDescriptions: {
                                    typeIdentifier: 't_bytes_calldata_ptr',
                                    typeString: 'bytes calldata',
                                  },
                                },
                                endExpression: {
                                  hexValue: '3438',
                                  id: 73774,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2767:2:110',
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_48_by_1',
                                    typeString: 'int_const 48',
                                  },
                                  value: '48',
                                },
                                id: 73775,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: 'IndexRangeAccess',
                                src: '2756:14:110',
                                startExpression: {
                                  hexValue: '3230',
                                  id: 73773,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '2764:2:110',
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_20_by_1',
                                    typeString: 'int_const 20',
                                  },
                                  value: '20',
                                },
                                typeDescriptions: {
                                  typeIdentifier: 't_bytes_calldata_ptr_slice',
                                  typeString: 'bytes calldata slice',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_bytes_calldata_ptr_slice',
                                  typeString: 'bytes calldata slice',
                                },
                              ],
                              id: 73771,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: 'ElementaryTypeNameExpression',
                              src: '2748:7:110',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_bytes28_$',
                                typeString: 'type(bytes28)',
                              },
                              typeName: {
                                id: 73770,
                                name: 'bytes28',
                                nodeType: 'ElementaryTypeName',
                                src: '2748:7:110',
                                typeDescriptions: {},
                              },
                            },
                            id: 73776,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'typeConversion',
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2748:23:110',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_bytes28',
                              typeString: 'bytes28',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_bytes28',
                              typeString: 'bytes28',
                            },
                          ],
                          id: 73769,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '2740:7:110',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_uint224_$',
                            typeString: 'type(uint224)',
                          },
                          typeName: {
                            id: 73768,
                            name: 'uint224',
                            nodeType: 'ElementaryTypeName',
                            src: '2740:7:110',
                            typeDescriptions: {},
                          },
                        },
                        id: 73777,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2740:32:110',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_uint224',
                          typeString: 'uint224',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                        {
                          typeIdentifier: 't_uint224',
                          typeString: 'uint224',
                        },
                      ],
                      id: 73758,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [55977],
                      referencedDeclaration: 55977,
                      src: '2702:5:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)',
                      },
                    },
                    id: 73778,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2702:71:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()',
                    },
                  },
                  id: 73779,
                  nodeType: 'ExpressionStatement',
                  src: '2702:71:110',
                },
              ],
            },
            baseFunctions: [74103],
            documentation: {
              id: 73734,
              nodeType: 'StructuredDocumentation',
              src: '2260:134:110',
              text: '@notice Receives a message from L1 and mints L2 tokens.\n @param payload The payload that was sent to in the delivery request.',
            },
            functionSelector: '529dca32',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 73749,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 73748,
                  name: 'onlyRelayer',
                  nameLocations: ['2599:11:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 74145,
                  src: '2599:11:110',
                },
                nodeType: 'ModifierInvocation',
                src: '2599:11:110',
              },
              {
                arguments: [
                  {
                    id: 73751,
                    name: 'sourceChain',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73743,
                    src: '2634:11:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  {
                    id: 73752,
                    name: 'sourceAddress',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73741,
                    src: '2647:13:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes32',
                      typeString: 'bytes32',
                    },
                  },
                ],
                id: 73753,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 73750,
                  name: 'isRegisteredSender',
                  nameLocations: ['2615:18:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 74186,
                  src: '2615:18:110',
                },
                nodeType: 'ModifierInvocation',
                src: '2615:46:110',
              },
              {
                arguments: [
                  {
                    id: 73755,
                    name: 'deliveryHash',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 73745,
                    src: '2680:12:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes32',
                      typeString: 'bytes32',
                    },
                  },
                ],
                id: 73756,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 73754,
                  name: 'replayProtect',
                  nameLocations: ['2666:13:110'],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 74206,
                  src: '2666:13:110',
                },
                nodeType: 'ModifierInvocation',
                src: '2666:27:110',
              },
            ],
            name: 'receiveWormholeMessages',
            nameLocation: '2406:23:110',
            overrides: {
              id: 73747,
              nodeType: 'OverrideSpecifier',
              overrides: [],
              src: '2586:8:110',
            },
            parameters: {
              id: 73746,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73736,
                  mutability: 'mutable',
                  name: 'payload',
                  nameLocation: '2450:7:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73781,
                  src: '2435:22:110',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_bytes_calldata_ptr',
                    typeString: 'bytes',
                  },
                  typeName: {
                    id: 73735,
                    name: 'bytes',
                    nodeType: 'ElementaryTypeName',
                    src: '2435:5:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes_storage_ptr',
                      typeString: 'bytes',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73739,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 73781,
                  src: '2463:14:110',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_array$_t_bytes_memory_ptr_$dyn_memory_ptr',
                    typeString: 'bytes[]',
                  },
                  typeName: {
                    baseType: {
                      id: 73737,
                      name: 'bytes',
                      nodeType: 'ElementaryTypeName',
                      src: '2463:5:110',
                      typeDescriptions: {
                        typeIdentifier: 't_bytes_storage_ptr',
                        typeString: 'bytes',
                      },
                    },
                    id: 73738,
                    nodeType: 'ArrayTypeName',
                    src: '2463:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_array$_t_bytes_storage_$dyn_storage_ptr',
                      typeString: 'bytes[]',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73741,
                  mutability: 'mutable',
                  name: 'sourceAddress',
                  nameLocation: '2491:13:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73781,
                  src: '2483:21:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_bytes32',
                    typeString: 'bytes32',
                  },
                  typeName: {
                    id: 73740,
                    name: 'bytes32',
                    nodeType: 'ElementaryTypeName',
                    src: '2483:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes32',
                      typeString: 'bytes32',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73743,
                  mutability: 'mutable',
                  name: 'sourceChain',
                  nameLocation: '2517:11:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73781,
                  src: '2510:18:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint16',
                    typeString: 'uint16',
                  },
                  typeName: {
                    id: 73742,
                    name: 'uint16',
                    nodeType: 'ElementaryTypeName',
                    src: '2510:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint16',
                      typeString: 'uint16',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73745,
                  mutability: 'mutable',
                  name: 'deliveryHash',
                  nameLocation: '2542:12:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73781,
                  src: '2534:20:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_bytes32',
                    typeString: 'bytes32',
                  },
                  typeName: {
                    id: 73744,
                    name: 'bytes32',
                    nodeType: 'ElementaryTypeName',
                    src: '2534:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes32',
                      typeString: 'bytes32',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '2429:129:110',
            },
            returnParameters: {
              id: 73757,
              nodeType: 'ParameterList',
              parameters: [],
              src: '2696:0:110',
            },
            scope: 73873,
            stateMutability: 'nonpayable',
            virtual: true,
            visibility: 'public',
          },
          {
            id: 73796,
            nodeType: 'FunctionDefinition',
            src: '2830:109:110',
            nodes: [],
            body: {
              id: 73795,
              nodeType: 'Block',
              src: '2885:54:110',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          expression: {
                            id: 73790,
                            name: 'L1_BLOCK',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 73649,
                            src: '2916:8:110',
                            typeDescriptions: {
                              typeIdentifier: 't_contract$_IL1Block_$74311',
                              typeString: 'contract IL1Block',
                            },
                          },
                          id: 73791,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: '2925:6:110',
                          memberName: 'number',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 74292,
                          src: '2916:15:110',
                          typeDescriptions: {
                            typeIdentifier: 't_function_external_view$__$returns$_t_uint64_$',
                            typeString: 'function () view external returns (uint64)',
                          },
                        },
                        id: 73792,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'functionCall',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2916:17:110',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_uint64',
                          typeString: 'uint64',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint64',
                          typeString: 'uint64',
                        },
                      ],
                      expression: {
                        id: 73788,
                        name: 'SafeCast',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 60734,
                        src: '2898:8:110',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_contract$_SafeCast_$60734_$',
                          typeString: 'type(library SafeCast)',
                        },
                      },
                      id: 73789,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2907:8:110',
                      memberName: 'toUint48',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 59846,
                      src: '2898:17:110',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_pure$_t_uint256_$returns$_t_uint48_$',
                        typeString: 'function (uint256) pure returns (uint48)',
                      },
                    },
                    id: 73793,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2898:36:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_uint48',
                      typeString: 'uint48',
                    },
                  },
                  functionReturnParameters: 73787,
                  id: 73794,
                  nodeType: 'Return',
                  src: '2891:43:110',
                },
              ],
            },
            baseFunctions: [55601],
            documentation: {
              id: 73782,
              nodeType: 'StructuredDocumentation',
              src: '2782:45:110',
              text: '@dev Clock used for flagging checkpoints.',
            },
            functionSelector: '91ddadf4',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'clock',
            nameLocation: '2839:5:110',
            overrides: {
              id: 73784,
              nodeType: 'OverrideSpecifier',
              overrides: [],
              src: '2859:8:110',
            },
            parameters: {
              id: 73783,
              nodeType: 'ParameterList',
              parameters: [],
              src: '2844:2:110',
            },
            returnParameters: {
              id: 73787,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73786,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 73796,
                  src: '2877:6:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint48',
                    typeString: 'uint48',
                  },
                  typeName: {
                    id: 73785,
                    name: 'uint48',
                    nodeType: 'ElementaryTypeName',
                    src: '2877:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint48',
                      typeString: 'uint48',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '2876:8:110',
            },
            scope: 73873,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public',
          },
          {
            id: 73816,
            nodeType: 'FunctionDefinition',
            src: '2979:246:110',
            nodes: [],
            body: {
              id: 73815,
              nodeType: 'Block',
              src: '3054:171:110',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_uint64',
                          typeString: 'uint64',
                        },
                        id: 73809,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            id: 73804,
                            name: 'clock',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [73796],
                            referencedDeclaration: 73796,
                            src: '3113:5:110',
                            typeDescriptions: {
                              typeIdentifier: 't_function_internal_view$__$returns$_t_uint48_$',
                              typeString: 'function () view returns (uint48)',
                            },
                          },
                          id: 73805,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'functionCall',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '3113:7:110',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_uint48',
                            typeString: 'uint48',
                          },
                        },
                        nodeType: 'BinaryOperation',
                        operator: '==',
                        rightExpression: {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            expression: {
                              id: 73806,
                              name: 'L1_BLOCK',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 73649,
                              src: '3124:8:110',
                              typeDescriptions: {
                                typeIdentifier: 't_contract$_IL1Block_$74311',
                                typeString: 'contract IL1Block',
                              },
                            },
                            id: 73807,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: '3133:6:110',
                            memberName: 'number',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: 74292,
                            src: '3124:15:110',
                            typeDescriptions: {
                              typeIdentifier: 't_function_external_view$__$returns$_t_uint64_$',
                              typeString: 'function () view external returns (uint64)',
                            },
                          },
                          id: 73808,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'functionCall',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '3124:17:110',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_uint64',
                            typeString: 'uint64',
                          },
                        },
                        src: '3113:28:110',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool',
                        },
                      },
                      {
                        hexValue: '4552433230566f7465733a2062726f6b656e20636c6f636b206d6f6465',
                        id: 73810,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '3143:31:110',
                        typeDescriptions: {
                          typeIdentifier:
                            't_stringliteral_d8b645ec611d4ec3e2023618b4603d577ce189d5bc833b5325ebd41cfe74f8df',
                          typeString: 'literal_string "ERC20Votes: broken clock mode"',
                        },
                        value: 'ERC20Votes: broken clock mode',
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool',
                        },
                        {
                          typeIdentifier:
                            't_stringliteral_d8b645ec611d4ec3e2023618b4603d577ce189d5bc833b5325ebd41cfe74f8df',
                          typeString: 'literal_string "ERC20Votes: broken clock mode"',
                        },
                      ],
                      id: 73803,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: '3105:7:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (bool,string memory) pure',
                      },
                    },
                    id: 73811,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3105:70:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()',
                    },
                  },
                  id: 73812,
                  nodeType: 'ExpressionStatement',
                  src: '3105:70:110',
                },
                {
                  expression: {
                    hexValue: '6d6f64653d626c6f636b6e756d6265722666726f6d3d6569703135353a31',
                    id: 73813,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '3188:32:110',
                    typeDescriptions: {
                      typeIdentifier:
                        't_stringliteral_a453e52536664fbe16a8b4b3de3b276945572ee714936cee15a4b46372dc1713',
                      typeString: 'literal_string "mode=blocknumber&from=eip155:1"',
                    },
                    value: 'mode=blocknumber&from=eip155:1',
                  },
                  functionReturnParameters: 73802,
                  id: 73814,
                  nodeType: 'Return',
                  src: '3181:39:110',
                },
              ],
            },
            baseFunctions: [55620],
            documentation: {
              id: 73797,
              nodeType: 'StructuredDocumentation',
              src: '2943:33:110',
              text: '@dev Description of the clock',
            },
            functionSelector: '4bf5d7e9',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'CLOCK_MODE',
            nameLocation: '2988:10:110',
            overrides: {
              id: 73799,
              nodeType: 'OverrideSpecifier',
              overrides: [],
              src: '3021:8:110',
            },
            parameters: {
              id: 73798,
              nodeType: 'ParameterList',
              parameters: [],
              src: '2998:2:110',
            },
            returnParameters: {
              id: 73802,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73801,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 73816,
                  src: '3039:13:110',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string',
                  },
                  typeName: {
                    id: 73800,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '3039:6:110',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '3038:15:110',
            },
            scope: 73873,
            stateMutability: 'view',
            virtual: true,
            visibility: 'public',
          },
          {
            id: 73872,
            nodeType: 'FunctionDefinition',
            src: '3415:604:110',
            nodes: [],
            body: {
              id: 73871,
              nodeType: 'Block',
              src: '3510:509:110',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 73827,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '3522:3:110',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg',
                          },
                        },
                        id: 73828,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '3526:6:110',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '3522:10:110',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      {
                        id: 73829,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73821,
                        src: '3534:6:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      ],
                      id: 73826,
                      name: '_burn',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [56000],
                      referencedDeclaration: 56000,
                      src: '3516:5:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)',
                      },
                    },
                    id: 73830,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3516:25:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()',
                    },
                  },
                  id: 73831,
                  nodeType: 'ExpressionStatement',
                  src: '3516:25:110',
                },
                {
                  assignments: [73833],
                  declarations: [
                    {
                      constant: false,
                      id: 73833,
                      mutability: 'mutable',
                      name: 'withdrawCalldata',
                      nameLocation: '3560:16:110',
                      nodeType: 'VariableDeclaration',
                      scope: 73871,
                      src: '3547:29:110',
                      stateVariable: false,
                      storageLocation: 'memory',
                      typeDescriptions: {
                        typeIdentifier: 't_bytes_memory_ptr',
                        typeString: 'bytes',
                      },
                      typeName: {
                        id: 73832,
                        name: 'bytes',
                        nodeType: 'ElementaryTypeName',
                        src: '3547:5:110',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_storage_ptr',
                          typeString: 'bytes',
                        },
                      },
                      visibility: 'internal',
                    },
                  ],
                  id: 73839,
                  initialValue: {
                    arguments: [
                      {
                        id: 73836,
                        name: 'account',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73819,
                        src: '3596:7:110',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      {
                        id: 73837,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73821,
                        src: '3605:6:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      ],
                      expression: {
                        id: 73834,
                        name: 'abi',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -1,
                        src: '3579:3:110',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_abi',
                          typeString: 'abi',
                        },
                      },
                      id: 73835,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '3583:12:110',
                      memberName: 'encodePacked',
                      nodeType: 'MemberAccess',
                      src: '3579:16:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$',
                        typeString: 'function () pure returns (bytes memory)',
                      },
                    },
                    id: 73838,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3579:33:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_bytes_memory_ptr',
                      typeString: 'bytes memory',
                    },
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '3547:65:110',
                },
                {
                  assignments: [73841],
                  declarations: [
                    {
                      constant: false,
                      id: 73841,
                      mutability: 'mutable',
                      name: 'cost',
                      nameLocation: '3626:4:110',
                      nodeType: 'VariableDeclaration',
                      scope: 73871,
                      src: '3618:12:110',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                      typeName: {
                        id: 73840,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '3618:7:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      visibility: 'internal',
                    },
                  ],
                  id: 73845,
                  initialValue: {
                    arguments: [
                      {
                        id: 73843,
                        name: 'TARGET_CHAIN',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 74216,
                        src: '3651:12:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint16',
                          typeString: 'uint16',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint16',
                          typeString: 'uint16',
                        },
                      ],
                      id: 73842,
                      name: 'quoteDeliveryCost',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 74259,
                      src: '3633:17:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_internal_nonpayable$_t_uint16_$returns$_t_uint256_$',
                        typeString: 'function (uint16) returns (uint256)',
                      },
                    },
                    id: 73844,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3633:31:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '3618:46:110',
                },
                {
                  expression: {
                    id: 73860,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 73846,
                      name: 'sequence',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73824,
                      src: '3670:8:110',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      arguments: [
                        {
                          id: 73851,
                          name: 'TARGET_CHAIN',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 74216,
                          src: '3735:12:110',
                          typeDescriptions: {
                            typeIdentifier: 't_uint16',
                            typeString: 'uint16',
                          },
                        },
                        {
                          id: 73852,
                          name: 'L1_BRIDGE_ADDRESS',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 73656,
                          src: '3755:17:110',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                        {
                          id: 73853,
                          name: 'withdrawCalldata',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 73833,
                          src: '3780:16:110',
                          typeDescriptions: {
                            typeIdentifier: 't_bytes_memory_ptr',
                            typeString: 'bytes memory',
                          },
                        },
                        {
                          hexValue: '30',
                          id: 73854,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'number',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '3804:1:110',
                          typeDescriptions: {
                            typeIdentifier: 't_rational_0_by_1',
                            typeString: 'int_const 0',
                          },
                          value: '0',
                        },
                        {
                          id: 73855,
                          name: 'GAS_LIMIT',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 74223,
                          src: '3876:9:110',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                        {
                          id: 73856,
                          name: 'REFUND_CHAIN',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 74219,
                          src: '3893:12:110',
                          typeDescriptions: {
                            typeIdentifier: 't_uint16',
                            typeString: 'uint16',
                          },
                        },
                        {
                          expression: {
                            id: 73857,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: -15,
                            src: '3913:3:110',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 73858,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: '3917:6:110',
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '3913:10:110',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint16',
                            typeString: 'uint16',
                          },
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                          {
                            typeIdentifier: 't_bytes_memory_ptr',
                            typeString: 'bytes memory',
                          },
                          {
                            typeIdentifier: 't_rational_0_by_1',
                            typeString: 'int_const 0',
                          },
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          {
                            typeIdentifier: 't_uint16',
                            typeString: 'uint16',
                          },
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_uint16',
                              typeString: 'uint16',
                            },
                            {
                              typeIdentifier: 't_address',
                              typeString: 'address',
                            },
                            {
                              typeIdentifier: 't_bytes_memory_ptr',
                              typeString: 'bytes memory',
                            },
                            {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0',
                            },
                            {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                            {
                              typeIdentifier: 't_uint16',
                              typeString: 'uint16',
                            },
                            {
                              typeIdentifier: 't_address',
                              typeString: 'address',
                            },
                          ],
                          expression: {
                            id: 73847,
                            name: 'WORMHOLE_RELAYER',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 73033,
                            src: '3681:16:110',
                            typeDescriptions: {
                              typeIdentifier: 't_contract$_IWormholeRelayer_$71284',
                              typeString: 'contract IWormholeRelayer',
                            },
                          },
                          id: 73848,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: '3698:16:110',
                          memberName: 'sendPayloadToEvm',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 70937,
                          src: '3681:33:110',
                          typeDescriptions: {
                            typeIdentifier:
                              't_function_external_payable$_t_uint16_$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint16_$_t_address_$returns$_t_uint64_$',
                            typeString:
                              'function (uint16,address,bytes memory,uint256,uint256,uint16,address) payable external returns (uint64)',
                          },
                        },
                        id: 73850,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        names: ['value'],
                        nodeType: 'FunctionCallOptions',
                        options: [
                          {
                            id: 73849,
                            name: 'cost',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 73841,
                            src: '3722:4:110',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                        ],
                        src: '3681:46:110',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_external_payable$_t_uint16_$_t_address_$_t_bytes_memory_ptr_$_t_uint256_$_t_uint256_$_t_uint16_$_t_address_$returns$_t_uint64_$value',
                          typeString:
                            'function (uint16,address,bytes memory,uint256,uint256,uint16,address) payable external returns (uint64)',
                        },
                      },
                      id: 73859,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '3681:248:110',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_uint64',
                        typeString: 'uint64',
                      },
                    },
                    src: '3670:259:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  id: 73861,
                  nodeType: 'ExpressionStatement',
                  src: '3670:259:110',
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        expression: {
                          id: 73863,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '3953:3:110',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg',
                          },
                        },
                        id: 73864,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '3957:6:110',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '3953:10:110',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      {
                        id: 73865,
                        name: 'account',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73819,
                        src: '3965:7:110',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      {
                        id: 73866,
                        name: 'TARGET_CHAIN',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 74216,
                        src: '3974:12:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint16',
                          typeString: 'uint16',
                        },
                      },
                      {
                        id: 73867,
                        name: 'amount',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73821,
                        src: '3988:6:110',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      {
                        id: 73868,
                        name: 'L1_BRIDGE_ADDRESS',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 73656,
                        src: '3996:17:110',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                        {
                          typeIdentifier: 't_uint16',
                          typeString: 'uint16',
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      ],
                      id: 73862,
                      name: 'TokenBridged',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 73671,
                      src: '3940:12:110',
                      typeDescriptions: {
                        typeIdentifier:
                          't_function_event_nonpayable$_t_address_$_t_address_$_t_uint16_$_t_uint256_$_t_address_$returns$__$',
                        typeString: 'function (address,address,uint16,uint256,address)',
                      },
                    },
                    id: 73869,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3940:74:110',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()',
                    },
                  },
                  id: 73870,
                  nodeType: 'EmitStatement',
                  src: '3935:79:110',
                },
              ],
            },
            documentation: {
              id: 73817,
              nodeType: 'StructuredDocumentation',
              src: '3229:183:110',
              text: '@notice Burn L2 tokens and unlock tokens on the L1.\n @param account The account where the tokens will be transferred.\n @param amount The amount of tokens to be unlocked.',
            },
            functionSelector: 'e512e7d6',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'l1Unlock',
            nameLocation: '3424:8:110',
            parameters: {
              id: 73822,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73819,
                  mutability: 'mutable',
                  name: 'account',
                  nameLocation: '3441:7:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73872,
                  src: '3433:15:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address',
                  },
                  typeName: {
                    id: 73818,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '3433:7:110',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                  },
                  visibility: 'internal',
                },
                {
                  constant: false,
                  id: 73821,
                  mutability: 'mutable',
                  name: 'amount',
                  nameLocation: '3458:6:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73872,
                  src: '3450:14:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                  typeName: {
                    id: 73820,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3450:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '3432:33:110',
            },
            returnParameters: {
              id: 73825,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 73824,
                  mutability: 'mutable',
                  name: 'sequence',
                  nameLocation: '3500:8:110',
                  nodeType: 'VariableDeclaration',
                  scope: 73872,
                  src: '3492:16:110',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256',
                  },
                  typeName: {
                    id: 73823,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3492:7:110',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                  },
                  visibility: 'internal',
                },
              ],
              src: '3491:18:110',
            },
            scope: 73873,
            stateMutability: 'payable',
            virtual: false,
            visibility: 'external',
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 73640,
              name: 'ERC20Votes',
              nameLocations: ['588:10:110'],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 56285,
              src: '588:10:110',
            },
            id: 73641,
            nodeType: 'InheritanceSpecifier',
            src: '588:10:110',
          },
          {
            baseName: {
              id: 73642,
              name: 'WormholeReceiver',
              nameLocations: ['600:16:110'],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 74207,
              src: '600:16:110',
            },
            id: 73643,
            nodeType: 'InheritanceSpecifier',
            src: '600:16:110',
          },
          {
            baseName: {
              id: 73644,
              name: 'WormholeSender',
              nameLocations: ['618:14:110'],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 74260,
              src: '618:14:110',
            },
            id: 73645,
            nodeType: 'InheritanceSpecifier',
            src: '618:14:110',
          },
        ],
        canonicalName: 'WormholeL2ERC20',
        contractDependencies: [],
        contractKind: 'contract',
        fullyImplemented: true,
        internalFunctionIDs: {
          '56255': 1,
          '56269': 2,
        },
        linearizedBaseContracts: [
          73873, 74260, 74207, 73047, 52079, 56285, 54620, 54580, 54635, 55551, 58291, 54611, 56346,
          55301, 56310, 55379, 57092,
        ],
        name: 'WormholeL2ERC20',
        nameLocation: '569:15:110',
        scope: 73874,
        usedErrors: [57179, 57181, 73659, 74046, 74051, 74056],
        usedEvents: [51980, 54514, 54523, 54591, 55313, 55322, 73671, 74076],
      },
    ],
    license: 'MIT',
  },
  id: 110,
} as const;
