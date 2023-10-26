import { ReactNode } from 'react';
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
}: {
  children: ReactNode;
  icon: keyof typeof icons | undefined;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-x-0.5 rounded-md ring-1 ring-inset ring-gray-200 px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-600"
    >
      {children}
      <div className="ml-1">{icon && icons[icon]}</div>
    </button>
  );
}
