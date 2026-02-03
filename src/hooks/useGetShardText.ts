export const useGetShardText = () => {
  /*const { name } = useSelector(activeNetworkSelector);
  const isSovereign = useIsSovereign();*/

  return (shard: number | string | undefined) => {
    return shard;

    /*if (shard === undefined) {
      return '';
    }

    if (typeof shard === 'string' && shard.includes('Shard')) {
      shard = shard.replace('Shard', '');
    }

    const isShardMetachain = isMetachain(shard);
    const isAllShards =
      ALL_SHARDS_SHARD_ID.toString() === String(shard).toString();

    const isMainShard = MAIN_SHARD_ID.toString() === String(shard).toString();

    if (isMainShard) {
      return 'MultiversX';
    }
    if (isShardMetachain) {
      if (isSovereign) {
        return '';
      }

      return 'Metachain';
    }
    if (isAllShards) {
      return 'All Shards';
    }
    if (Number(shard) === 0 && isSovereign) {
      return name ?? import.meta.env.VITE_APP_BRAND_NAME ?? 'Sovereign Chain';
    }
    return `Shard ${shard}`;*/
  };
};
