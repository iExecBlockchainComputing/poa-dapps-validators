const constants = {}
constants.organization = 'iExecBlockchainComputing'
constants.repoName = 'poa-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  ProofOfPhysicalAddress: 'ProofOfPhysicalAddress.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'
constants.rootPath = '/poa-dapps-validators'
constants.branches = {
  CORE: 'core',
  SOKOL: 'sokol',
  KOVAN: 'kovan',
  VIVIANI: 'viviani',
  BELLECOUR: 'bellecour'
}

constants.navigationData = [
  {
    icon: 'all',
    title: 'All',
    url: constants.rootPath
  },
  {
    icon: 'set',
    title: 'Set Metadata',
    url: `${constants.rootPath}/set`
  },
  {
    icon: 'pending',
    title: 'Pending Changes',
    url: `${constants.rootPath}/pending-changes`
  }
]

constants.NETWORKS = {
  '42': {
    NAME: 'Kovan',
    FULLNAME: 'Kovan Testnet',
    RPC: 'https://kovan.infura.io/v3/1125fe73d87c4e5396678f4e3089b3dd',
    BRANCH: constants.branches.KOVAN,
    SORTORDER: 3
  },
  '77': {
    NAME: 'Sokol',
    FULLNAME: 'Sokol Testnet',
    RPC: 'https://sokol.poa.network',
    BRANCH: constants.branches.SOKOL,
    SORTORDER: 4
  },
  '99': {
    NAME: 'Core',
    FULLNAME: 'POA Core',
    RPC: 'https://core.poa.network',
    BRANCH: constants.branches.CORE,
    SORTORDER: 5
  },
  '133': {
    NAME: 'vRLC',
    FULLNAME: 'Viviani Testnet',
    RPC: 'https://viviani.iex.ec',
    BRANCH: constants.branches.VIVIANI,
    SORTORDER: 2
  },
  '134': {
    NAME: 'xRLC',
    FULLNAME: 'Bellecour (iExec Sidechain)',
    RPC: 'https://bellecour.iex.ec',
    BRANCH: constants.branches.BELLECOUR,
    SORTORDER: 1
  }
}

module.exports = {
  constants
}
