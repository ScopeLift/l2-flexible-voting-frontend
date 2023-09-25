import Head from "next/head";
import CardWithHeader from "@/components/CardWithHeader";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useConfig } from "@/hooks/useConfig";
import { useState } from "react";
import { formatUnits } from "viem";
import { classNames } from "@/util";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { useBalances } from "@/hooks/useBalances";
import { useFees } from "@/hooks/useFees";

type BridgeDirection = "l1l2" | "l2l1";

const Bridge = () => {
  const mounted = useHasMounted();
  const { fees, error: feeError } = useFees();
  const { l1, l2, isLoading, error } = useBalances();
  const { l1: l1Config, l2: l2Config, err } = useConfig();
  const [bridgeDirection, setBridgeDirection] =
    useState<BridgeDirection>("l1l2");

  const handleSwitchDirection = () => {
    setBridgeDirection(bridgeDirection === "l1l2" ? "l2l1" : "l1l2");
  };

  const source =
    bridgeDirection === "l1l2"
      ? { ...l1Config, ...l1, fee: fees?.l1 || BigInt(0) }
      : { ...l2Config, ...l2, fee: fees?.l2 || BigInt(0) };
  const target =
    bridgeDirection === "l1l2"
      ? { ...l2Config, ...l2, fee: fees?.l2 || BigInt(0) }
      : { ...l1Config, ...l1, fee: fees?.l1 || BigInt(0) };

  const isAmountError = false;

  return (
    <>
      <Head>
        <title>Cross Chain Voting: Bridge</title>
      </Head>
      <div className="flex flex-row justify-center align-center items-top content-center">
        <CardWithHeader
          header={"Bridge tokens"}
          className="w-full lg:max-w-2xl m-5"
        >
          <div className="flex flex-col">
            {/* Top row */}
            <div className="flex flex-row justify-between items-center">
              {/* Source data */}
              <div className="relative flex flex-grow w-32 flex-col rounded-lg bg-gray-100 px-6 py-5 shadow-sm">
                <h3 className="gray-600 font-bold">From</h3>
                <div>{source.chain.name}</div>
                <div className="mt-3">
                  <span className="gray-600 font-bold">
                    {mounted ? source.token?.symbol : ""} balance
                  </span>
                  <br />
                  {mounted ? source.token?.formatted : 0}{" "}
                </div>
              </div>

              {/* Switch direction button */}
              <div className="grow-0 mx-5 flex flex-col items-center">
                <ArrowLongRightIcon className="h-10 w-10 text-gray-400" />
                <button
                  type="button"
                  className="mt-2 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={handleSwitchDirection}
                >
                  Switch Direction
                </button>
              </div>
              {/* Target data */}
              <div className="mt-3 relative flex flex-grow w-32 flex-col rounded-lg borde bg-gray-100 px-6 py-5 shadow-sm">
                <h3 className="gray-600 font-bold">To</h3>
                <div>{target.chain.name}</div>
                <div className="mt-3">
                  <span className="gray-600 font-bold">
                    {mounted ? target.token?.symbol : ""} balance
                  </span>
                  <br />
                  {mounted ? target.token?.formatted : 0}{" "}
                </div>
              </div>
            </div>
            {/* Bottom row: Input form */}
            <div className="m-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Amount
              </label>

              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className={classNames(
                    isAmountError
                      ? "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500"
                      : "text-gray-900",
                    "block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  )}
                  placeholder="0.00"
                  defaultValue=""
                  aria-invalid={isAmountError}
                  aria-describedby="amount"
                />
              </div>
              <div className={classNames(isAmountError ? "" : "invisible")}>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="amount-error">
                  Not a valid amount.
                </p>
              </div>

              <div>
                Wormhole relayer fee:{" "}
                {mounted ? formatUnits(source.fee, 18) : 0} ETH
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="mt-5 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Bridge to {target.chain.name}
                </button>
              </div>
            </div>
          </div>
        </CardWithHeader>
      </div>
    </>
  );
};

export default Bridge;
