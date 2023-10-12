import { ReactNode } from "react";

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
        "divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow" +
        " " +
        className
      }
    >
      <h2 className="px-4 py-5 sm:px-6 block text-xl">{header}</h2>
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
}
