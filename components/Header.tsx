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
    <header className="flex flex-col gap-3 flex-wrap w-full items-center justify-between mx-auto sm:flex-row">
      <div className="font-bold flex-1 flex items-center">
        <h1 className="text-xl bg-gradient-to-br from-teal-900 to-indigo-900 inline-block text-transparent bg-clip-text">
          L2 Flexible Voting
        </h1>{' '}
        <DaoMenu className="ml-3 " options={options} />
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
        <nav
          className="flex space-x-4 my-3 bg-white p-4 bg-opacity-60 rounded-xl sm:my-0"
          aria-label="Tabs"
        >
          {tabs.map((tab) => {
            const isCurrent = tab.name === current?.name;
            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  isCurrent
                    ? 'bg-white bg-opacity-80 text-indigo-600 ring-indigo-500 ring-inset'
                    : 'text-indigo-900 bg-opacity-90  hover:text-indigo-600',
                  'rounded-md px-4 py-2 text-md font-medium hover:bg-gray-200'
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
