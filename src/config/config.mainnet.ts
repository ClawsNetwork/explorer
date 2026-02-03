import { NetworkType } from 'types/network.types';

import { getStorageCustomNetworks } from './helpers';
import { schema } from './sharedConfig';

export * from './sharedConfig';

export const networks: NetworkType[] = [
  {
    default: true,
    id: 'mainnet',
    name: 'Mainnet',
    chainId: '1',
    adapter: 'api',
    theme: 'default',
    egldLabel: 'CLAW',
    walletAddress: 'https://wallet.multiversx.com',
    explorerAddress: 'https://explorer.claws.network',
    nftExplorerAddress: 'https://xspotlight.com',
    apiAddress: 'https://api.multiversx.com',
    growthApi: 'https://tools.multiversx.com/growth-api',
    hasExchangeData: true
  },

  // Saved Custom Network Configs
  ...getStorageCustomNetworks()
];

type multiversxAppsType = {
  id: string;
  name: string;
  url: string;
  custom?: string;
};

export const multiversxApps: multiversxAppsType[] = [
  {
    id: 'main-site',
    name: 'Main site',
    url: 'https://claws.network'
  },
  {
    id: 'wallet',
    name: 'Wallet',
    url: 'https://wallet.claws.network'
  },
  {
    id: 'explorer',
    name: 'Explorer',
    url: 'https://explorer.claws.network'
  },
  {
    id: 'bridge',
    name: 'Bridge',
    url: 'https://bridge.multiversx.com'
  },
  {
    id: 'docs',
    name: 'Docs',
    url: 'https://docs.claws.network'
  }
];

networks.forEach((network) => {
  schema.validate(network, { strict: true }).catch(({ errors }) => {
    console.error(`Config invalid format for ${network.id}`, errors);
  });
});

export const urls = {
  skills: 'https://github.com/ClawsNetwork/skills'
};
