import { ReactNode, useEffect, useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const icons = {
  'external-link': <ArrowTopRightOnSquareIcon height="15" width="15" />,
  'copy-to-clipboard': <ClipboardDocumentIcon height="15" width="15" />,
  'copy-to-clipboard-succeeded': <ClipboardDocumentCheckIcon height="15" width="15" />,
};

export default function Pill({
  children,
  icon,
  onClick,
  className,
}: {
  children: ReactNode;
  icon?: keyof typeof icons | undefined;
  onClick?: () => void;
  className?: string;
}) {
  const [pillActionIconName, setPillActionIconName] = useState(icon || 'copy-to-clipboard');
  const handleClick = () => {
    if (onClick) onClick();
    if (icon == 'copy-to-clipboard') setPillActionIconName('copy-to-clipboard-succeeded');
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (pillActionIconName === 'copy-to-clipboard-succeeded') {
      timeoutId = setTimeout(() => {
        setPillActionIconName('copy-to-clipboard');
      }, 2000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [pillActionIconName]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        'inline-flex items-center gap-x-0.5 rounded-md ring-1 ring-inset ring-gray-200 px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-600 ' +
        className
      }
    >
      {children}
      {<div className="ml-1">{icons[pillActionIconName]}</div>}
    </button>
  );
}
