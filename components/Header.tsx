import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '@/util';
import { useConfig } from '@/hooks/useConfig';
import { useDebugPanel } from '@/contexts/DebugPanel';

const tabs = [
  { name: 'Bridge', href: '/bridge' },
  { name: 'Delegate', href: '/delegate' },
  { name: 'Vote', href: '/vote' },
  { name: 'Stats', href: '/stats' },
];

export const Header = () => {
  const { showDebug } = useConfig();
  const { setIsOpen } = useDebugPanel();
  return (
    <header className="flex flex-row w-full items-center justify-between mx-auto">
      <div className="font-bold flex-1 flex">
        <h1>L2 Flex Voting</h1>{' '}
        <div className={classNames('ml-3', showDebug ? 'visible' : 'hidden')}>
          <button
            type="button"
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
