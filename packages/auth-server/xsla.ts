import { defineChain } from "viem";
import { chainConfig } from "viem/zksync";

export const xsollaZkSepoliaTestnet = defineChain({
  ...chainConfig,
  id: 555272,
  name: "Xsolla ZK Sepolia Testnet",
  network: "xsolla-zk-sepolia-testnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://zkrpc.xsollazk.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Xsolla ZK Explorer",
      url: "https://x.la/explorer",
      apiUrl: "https://xo-api.hyperscreener.com/api",
    },
  },
  testnet: true,
});
