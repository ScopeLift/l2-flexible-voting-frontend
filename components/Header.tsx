import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useRouter } from "next/router";
import { classNames } from "@/util";

const tabs = [
  { name: "Bridge", href: "/bridge" },
  { name: "Delegate", href: "/delegate" },
  { name: "Vote", href: "/vote" },
  { name: "Stats", href: "/stats" },
];

export const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div></div>
      <NavButtons />
      <WalletButtons />
    </div>
  );
};

const NavButtons = () => {
  const { pathname } = useRouter();
  const current = tabs.find((tab) => tab.href === pathname);

  return (
    <div>
      <div>
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => {
            const isCurrent = tab.name === current?.name;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  isCurrent
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={isCurrent ? "page" : undefined}
              >
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

const WalletButtons = () => {
  return <ConnectButton />;
};
