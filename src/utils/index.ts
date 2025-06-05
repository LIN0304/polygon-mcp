import type { Chain } from "viem";
import { polygon, polygonMumbai, mainnet } from "viem/chains";
export function constructExplorerUrl(
  chain: Chain,
  transactionHash: `0x${string}`,
) {
  if (chain.id === polygon.id) {
    return `https://polygonscan.com/tx/${transactionHash}`;
  }

  if (chain.id === polygonMumbai.id) {
    return `https://mumbai.polygonscan.com/tx/${transactionHash}`;
  }

  if (chain.id === mainnet.id) {
    return `https://etherscan.io/tx/${transactionHash}`;
  }

  // Default to mainnet
  return `https://polygonscan.com/tx/${transactionHash}`;
}
