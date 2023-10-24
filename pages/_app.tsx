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
import { alchemyProvider } from "wagmi/providers/alchemy";
import colors from "tailwindcss/colors";
import Layout from "@/components/Layout";
import { chains as chainsConfig } from "@/config";
import { DebugPanelProvider } from "@/contexts/DebugPanel";
import { NotificationsProvider } from "@/contexts/NotificationsContext";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  chainsConfig,
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! }),
    publicProvider(),
  ]
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
        <NotificationsProvider>
          <DebugPanelProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DebugPanelProvider>
        </NotificationsProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
