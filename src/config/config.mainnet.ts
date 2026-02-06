import { NetworkType } from 'types/network.types';

import { getStorageCustomNetworks } from './helpers';
import { schema } from './sharedConfig';

export * from './sharedConfig';

export const networks: NetworkType[] = [
  {
    default: true,
    id: 'claws-network',
    name: 'Claws Network',
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
  {
    id: 'website',
    name: 'Website',
    url: 'https://claws.network'
  },
  {
    id: 'docs',
    name: 'Docs',
    url: 'https://docs.claws.network/'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ClawsNetwork'
  },
  {
    id: 'twitter',
    name: '𝕏',
    url: 'https://x.com/ClawsNetwork'
  },
  {
    id: 'substack',
    name: 'Substack',
    url: 'https://substack.com/@clawsnetwork'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/claws_network'
  },
  {
    id: 'farcaster',
    name: 'Farcaster',
    url: 'https://farcaster.xyz/clawsnetwork'
  }
];

networks.forEach((network) => {
  schema.validate(network, { strict: true }).catch(({ errors }) => {
    console.error(`Config invalid format for ${network.id}`, errors);
  });
});

export const urls = {
  buy: 'https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xD88EaCC07C0782B0D2ab9Be3dBa3aaa6D6fe6b07',
  skill: 'https://skill.claws.network'
};
