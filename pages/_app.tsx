import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import colors from "tailwindcss/colors";
import Layout from "@/components/Layout";
import { chains as chainsConfig } from "@/config";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  chainsConfig,
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "L2 Flexible Voting",
  projectId: String(process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID),
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: colors.indigo[200],
          accentColorForeground: colors.gray[600],
          borderRadius: "medium",
          overlayBlur: "small",
        })}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
