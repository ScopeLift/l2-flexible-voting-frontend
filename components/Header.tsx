import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useRouter } from 'next/router';

import DaoMenu from '@/components/DaoMenu';
import { classNames } from '@/util';
import { config } from '@/config';

const options = Object.values(config).map((configEntry) => {
  return { daoId: configEntry.id, label: configEntry.name, logo: configEntry.daoLogo };
});

export const Header = () => {
  return (
    <header className="flex flex-row w-full items-center justify-between mx-auto">
      <div className="font-bold flex-1 flex">
        <h1>L2 Flex Voting</h1> <DaoMenu className="ml-3 " options={options} />
      </div>
      <NavButtons />
      <WalletButtons />
    </header>
  );
};

const NavButtons = () => {
  const { pathname, query } = useRouter();
  const id = query?.id || options[0].daoId;
  const tabs = [
    { name: 'Bridge', href: `/${id}/bridge` },
    { name: 'Delegate', href: `/${id}/delegate` },
    { name: 'Vote', href: `/${id}/vote` },
  ];

  const current = tabs.find((tab) => pathname.includes(tab.href.split('/').at(-1) as string));

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
                  isCurrent ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-3 py-2 text-sm font-medium'
                )}
                aria-current={isCurrent ? 'page' : undefined}
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
  return (
    <div className="flex flex-1 justify-end">
      <ConnectButton />
    </div>
  );
};
