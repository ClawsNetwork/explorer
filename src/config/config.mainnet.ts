import { NetworkType } from 'types/network.types';

import { getStorageCustomNetworks } from './helpers';
import { schema } from './sharedConfig';

export * from './sharedConfig';

export const networks: NetworkType[] = [
  {
    default: true,
    id: 'claw-network',
    name: 'Claw Network',
    chainId: 'C',
    adapter: 'api',
    theme: 'default',
    egldLabel: 'CLAW',
    walletAddress: 'https://wallet.claws.network',
    explorerAddress: 'https://explorer.claws.network',
    nftExplorerAddress: 'https://xspotlight.com',
    apiAddress: 'https://api.claws.network',
    growthApi: 'https://tools.multiversx.com/growth-api',
    hasExchangeData: false,
    isSovereign: true,
    hrp: 'claw',
    hasWebsocket: false,
    refreshRate: 600
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
  /*{
    id: 'main-site',
    name: 'Main site',
    url: 'https://claws.network'
  },*/
  {
    id: 'explorer',
    name: 'Explorer',
    url: 'https://explorer.claws.network'
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
  skills: 'https://skills.claws.network'
};
