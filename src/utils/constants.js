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
