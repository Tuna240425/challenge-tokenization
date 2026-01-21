import * as chains from "viem/chains";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
  rpcOverrides?: { [chainId: number]: string };
};

const scaffoldConfig = {
  targetNetworks: [chains.sepolia],
  pollingInterval: 30000,
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "",
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  onlyLocalBurnerWallet: true,
  rpcOverrides: {},
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;

export const DEFAULT_ALCHEMY_API_KEY = scaffoldConfig.alchemyApiKey;
