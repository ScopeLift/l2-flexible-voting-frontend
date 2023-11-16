import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useConfig } from '@/hooks/useConfig';
import { usePathname, useSearchParams } from 'next/navigation'

type Option<T> = {
  value: T;
  label: string;
  logo: string;
};

type Props<T> = {
  options: Option<T>[];
  className?: string;
};

const DaoMenu = <T,>(props: Props<T>) => {
  const config = useConfig();
  const searchParams = useSearchParams()

  return (
    <Menu as="div" className={`relative inline-block text-left ${props.className}`}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <Image
            width={16}
            height={16}
            className="rounded-full self-center"
            src={config.daoLogo}
            alt="Dao logo"
          />
          {config.name}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {props.options.map((option, key) => (
              <Menu.Item key={key}>
                {({ active }) => {
                  return (
                    <Link
                      href={`/${option.value}/sear`}
                      className={clsx(
                        active ? ' flex bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex block px-4 py-2 text-sm'
                      )}
                    >
                      <Image
                        width={16}
                        height={16}
                        className="rounded-full mr-1"
                        src={option.logo}
                        alt="Dao logo"
                      />
                      {option.label}
                    </Link>
                  );
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DaoMenu;
