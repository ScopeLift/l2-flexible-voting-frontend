import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '@/util';
import { useConfig } from '@/hooks/useConfig';
import { useDebugPanel } from '@/contexts/DebugPanel';
import DaoMenu from '@/components/DaoMenu';
import { DEFAULT_DAO_ID } from '@/util/constants';

const options = [
  { label: 'Example', value: 1, logo: '/pooltogetherLogo.svg' },
  { label: 'ExampleComp', value: 2, logo: '/gitcoinLogo.svg' },
];

export const Header = () => {
  const { showDebug } = useConfig();
  const { setIsOpen } = useDebugPanel();

  return (
    <header className="flex flex-row w-full items-center justify-between mx-auto">
      <div className="font-bold flex-1 flex">
        <h1>L2 Flex Voting</h1>{' '}
        <div className={classNames('flex ml-3', showDebug ? 'visible' : 'hidden')}>
          <DaoMenu options={options} />
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ml-2 self-center"
            onClick={() => setIsOpen(true)}
          >
            Debug
          </button>
        </div>
      </div>
      <NavButtons />
      <WalletButtons />
    </header>
  );
};

const NavButtons = () => {
  const { pathname, query } = useRouter();
  const id = query?.id || DEFAULT_DAO_ID;
  const tabs = [
    { name: 'Bridge', href: `/${id}/bridge` },
    { name: 'Delegate', href: `/${id}/delegate` },
    { name: 'Vote', href: `/${id}/vote` },
    { name: 'Stats', href: `/${id}/stats` },
  ];

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
