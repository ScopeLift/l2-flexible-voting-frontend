import { ReactNode } from 'react';

export default function CardWithHeader({
  header,
  children,
  className,
}: {
  header: ReactNode;
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={
        'divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow' + ' ' + className
      }
    >
      <h2 className="p-7 sm:px-6 font-light text-xl bg-gradient-to-br from-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text">
        {header}
      </h2>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
