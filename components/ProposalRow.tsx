import { InformationCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import { formatUnits } from 'viem';

import PillAction from '@/components/PillAction';
import { Proposal } from '@/hooks/useProposals';
import { useConfig } from '@/hooks/useConfig';
import { useTokenInfo } from '@/hooks/useTokenInfo';
import { nFormatter } from '@/util';

export default function ProposalRow({
  id,
  isBridged,
  description,
  createdBlock,
  createdTimestamp,
  status,
  votes,
  tallyLink,
  votingPower,
}: Proposal) {
  const { l2, daoLogo } = useConfig();
  const { data: tokenInfo } = useTokenInfo();

  const totalVotesL1 = votes.l1.forVotes + votes.l1.againstVotes + votes.l1.abstainVotes;
  const totalVotesNotBridged = votes.l2NotBridged
    ? votes.l2NotBridged.forVotes +
      votes.l2NotBridged.againstVotes +
      votes.l2NotBridged.abstainVotes
    : BigInt(0);
  const totalVotes = votes.l2NotBridged ? totalVotesL1 + totalVotesNotBridged : totalVotesL1;

  const makeL1VoteBar = ({
    totalVotes,
    votes,
    bridged,
    color,
  }: {
    totalVotes: bigint;
    votes: bigint;
    bridged: bigint;
    color: string;
  }) => {
    // for tailwind tree-shaking...
    const colors =
      'text-green-500 text-green-300 text-red-500 text-red-300 text-gray-500 text-gray-300 bg-green-500 bg-green-300 bg-red-500 bg-red-300 bg-gray-500 bg-gray-300';
    return (
      <>
        <div className={'flex w-full items-center text-' + color + '-500'}>
          <span className="font-bold text-xs">
            {nFormatter(+formatUnits(votes, tokenInfo.l1.decimals))}
          </span>
          {bridged > BigInt(0) ? (
            <div className="flex gap-1 justify-center items-center">
              <span className={'ml-1 text-xs text-gray-800'}>{`(${nFormatter(
                +formatUnits(bridged, tokenInfo.l2.decimals)
              )} bridged from L2)`}</span>{' '}
              <InformationCircleIcon className="h-4 text-black" id="bridged-vote-explanation" />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="mt-1 h-1 w-full bg-gray-100 relative rounded-md">
          <div
            style={{
              width: `${Math.floor((100 * Number(votes - bridged)) / Number(totalVotes))}%`,
            }}
            className={clsx(`rounded-l-md float-left h-full w-0`, `bg-${color}-500`)}
          ></div>
          <div
            style={{ width: `${Math.floor((100 * Number(bridged)) / Number(totalVotes))}%` }}
            className={clsx(`rounded-r-md float-left h-full w-0`, `bg-${color}-500`)}
          ></div>
        </div>
        <Tooltip anchorSelect="#bridged-vote-explanation">
          <div className="w-60">
            Bridged votes will not be reflected until <span className="font-mono">bridgeVote</span>{' '}
            is called on {l2.chain.name}. Once triggered it will be relayed from the L1 chain which
            may take up to 25 minutes.
          </div>
        </Tooltip>
      </>
    );
  };

  const l1ForVoteBar = makeL1VoteBar({
    totalVotes,
    votes: votes.l1?.forVotes || BigInt(0),
    bridged: votes.l2Bridged?.forVotes || BigInt(0),
    color: 'green',
  });

  const l1AgainstVoteBar = makeL1VoteBar({
    totalVotes,
    votes: votes.l1?.againstVotes || BigInt(0),
    bridged: votes.l2Bridged?.againstVotes || BigInt(0),
    color: 'red',
  });

  const l1AbstainVoteBar = makeL1VoteBar({
    totalVotes,
    votes: votes.l1?.abstainVotes || BigInt(0),
    bridged: votes.l2Bridged?.abstainVotes || BigInt(0),
    color: 'gray',
  });

  const makeL2VoteBar = ({
    totalVotes,
    bridged,
    notBridged,
    color,
  }: {
    totalVotes: bigint;
    bridged: bigint;
    notBridged: bigint;
    color: string;
  }) => {
    // for tailwind tree-shaking...
    const colors =
      'text-green-500 text-green-300 text-red-500 text-red-300 text-gray-500 text-gray-300 bg-green-500 bg-green-300 bg-red-500 bg-red-300 bg-gray-500 bg-gray-300';
    return (
      <>
        <div className={'flex items-center text-' + color + '-500'}>
          <span className="font-bold text-xs">
            {nFormatter(+formatUnits(bridged + notBridged, tokenInfo.l2.decimals))}
          </span>
          <span className={'ml-1 text-xs ' + 'text-' + color + '-300'}>
            {notBridged > BigInt(0)
              ? `(${nFormatter(+formatUnits(notBridged, tokenInfo.l2.decimals))} not bridged)`
              : ''}
          </span>
        </div>
        <div className="mt-1 h-1 bg-gray-100 relative rounded-md">
          <div
            style={{ width: `${Math.floor((100 * Number(bridged)) / Number(totalVotes))}%` }}
            className={clsx(`rounded-l-md float-left h-full w-0`, `bg-${color}-500`)}
          ></div>
          <div
            style={{ width: `${Math.floor((100 * Number(notBridged)) / Number(totalVotes))}%` }}
            className={clsx(`rounded-r-md float-left h-full w-0`, `bg-${color}-300`)}
          ></div>
        </div>
      </>
    );
  };
  const l2ForVoteBar = makeL2VoteBar({
    totalVotes,
    bridged: votes.l2Bridged?.forVotes || BigInt(0),
    notBridged: votes.l2NotBridged?.forVotes || BigInt(0),
    color: 'green',
  });

  const l2AgainstVoteBar = makeL2VoteBar({
    totalVotes,
    bridged: votes.l2Bridged?.againstVotes || BigInt(0),
    notBridged: votes.l2NotBridged?.againstVotes || BigInt(0),
    color: 'red',
  });

  const l2AbstainVoteBar = makeL2VoteBar({
    totalVotes,
    bridged: votes.l2Bridged?.abstainVotes || BigInt(0),
    notBridged: votes.l2NotBridged?.abstainVotes || BigInt(0),
    color: 'gray',
  });

  return (
    <li
      key={id}
      className="flex justify-start p-5 ring-1 ring-gray-200 bg-gray-50 bg-opacity-90 mb-3 rounded-md flex-col md:flex-row"
    >
      {/* Proposal info / description */}
      <div className="w-full md:w-1/3 flex flex-col">
        <div className="flex flex-row mb-2">
          <Image
            width={24}
            height={24}
            className="rounded-full self-center mr-2"
            src={daoLogo}
            alt="Dao logo"
          />
          <span>{description}</span>
        </div>
        <div>
          <ProposalState status={status.l1} />
        </div>
        <div className="grow flex flex-col justify-end">
          <p className="ml-1 flex text-xs leading-5 text-gray-500">Created at:</p>
          <p className="ml-1 flex text-xs leading-5 text-gray-500">
            L1 Block {createdBlock.toString()}
          </p>
          <p className="ml-1 flex text-xs leading-5 text-gray-500">
            {new Date(Number(createdTimestamp) * 1000).toLocaleString()}
          </p>
          <div className="mt-1 mb-3 md:mb-0">
            <PillAction
              icon="copy-to-clipboard"
              onClick={() => {
                navigator.clipboard.writeText(id);
              }}
              className="bg-white"
            >
              Copy Proposal ID
            </PillAction>
          </div>
        </div>
      </div>

      {/* Proposal votes */}
      <div className="flex flex-col w-full">
        {/* L2 Box */}
        <div className="ring-1 ring-inset ring-gray-200 rounded-lg inline-block bg-white">
          {isBridged ? (
            <div className="p-10">
              <div className="flex gap-1 justify-start items-center mb-5 flex-col md:flex-row">
                <h2 className="text-xl">L2</h2>
                <div className="ml-2">
                  <ProposalState status={status.l2 || ''} />
                </div>
                <div className="grow"></div>
                <div className="flex items-center flex-col md:flex-row">
                  {votingPower.l2 !== undefined && (
                    <div className="text-xs">
                      <div className="inline-block text-gray-800">
                        Your L2 voting power
                        {status.l2 !== 'pending' && status.l2 !== 'active' && ' was'}:
                      </div>
                      <span
                        className={clsx(
                          votingPower.l2 > BigInt(0) && status.l2 === 'active'
                            ? 'ring-indigo-700 text-black'
                            : 'ring-gray-100',
                          'bg-gray-50 text-gray-700 ml-2 ring-1 rounded-lg inline-block py-1 px-2 md:mr-5'
                        )}
                      >
                        {nFormatter(+formatUnits(votingPower.l2, tokenInfo.l2.decimals))}
                      </span>
                    </div>
                  )}
                  <a href={tallyLink.l2} target="_blank">
                    {status.l2 === 'open' && votingPower.l2 && votingPower.l2 > BigInt(0) ? (
                      <PillAction
                        icon="external-link"
                        className="ring-indigo-500 ring-1 text-indigo-500"
                      >
                        Vote on Tally
                      </PillAction>
                    ) : (
                      <PillAction icon="external-link">View on Tally</PillAction>
                    )}
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="m-2 w-full">
                  <p className="text-xs text-gray-700 mb-2">Votes for</p>
                  <div>{l2ForVoteBar}</div>
                </div>
                <div className="m-2 w-full">
                  <p className="text-xs text-gray-700 mb-2">Votes against</p>
                  <div>{l2AgainstVoteBar}</div>
                </div>
                <div className="m-2 w-full">
                  <p className="text-xs text-gray-700 mb-2">Votes abstain</p>
                  <div>{l2AbstainVoteBar}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center p-5 ring-gray-200 rounded-lg h-32">
              Proposal is not yet bridged to L2
            </div>
          )}
        </div>
        {/* L1 Box */}
        <div className="p-10 mt-2 ring-1 ring-inset ring-gray-200 bg-white rounded-lg flex flex-col">
          <div className="flex justify-start items-center mb-5 flex-col md:flex-row">
            <h2 className="text-xl">L1</h2>
            <div className="ml-2">
              <ProposalState status={status.l1 || ''} />
            </div>
            <div className="grow"></div>
            <div className="flex items-center flex-col md:flex-row">
              {votingPower.l1 !== undefined && (
                <div className="text-xs mr-5 text-gray-800">
                  Your L1 voting power{status.l1 !== 'pending' && status.l1 !== 'active' && ' was'}:
                  <span
                    className={clsx(
                      votingPower.l1 > BigInt(0) && status.l1 === 'open'
                        ? 'ring-indigo-700 text-black'
                        : 'ring-gray-100',
                      'bg-gray-50 text-gray-700 ml-2 ring-1 rounded-lg inline-block py-1 px-2 '
                    )}
                  >
                    {nFormatter(+formatUnits(votingPower.l1, tokenInfo.l1.decimals))}
                  </span>
                </div>
              )}
              <a href={tallyLink.l1} target="_blank">
                {status.l1 === 'open' && votingPower.l1 && votingPower.l1 > BigInt(0) ? (
                  <PillAction
                    icon="external-link"
                    className="ring-indigo-500 ring-1 text-indigo-500"
                  >
                    Vote on Tally
                  </PillAction>
                ) : (
                  <PillAction icon="external-link">View on Tally</PillAction>
                )}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="m-2 w-full">
              <p className="text-xs text-gray-700 mb-2">Votes for</p>
              <div>{l1ForVoteBar}</div>
            </div>
            <div className="m-2 w-full">
              <p className="text-xs text-gray-700 mb-2">Votes against</p>
              <div>{l1AgainstVoteBar}</div>
            </div>
            <div className="m-2 w-full">
              <p className="text-xs text-gray-700 mb-2">Votes abstain</p>
              <div>{l1AbstainVoteBar}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

const ProposalState = ({ status }: { status: string }) => {
  const green = ['bg-green-50', 'text-green-700', 'ring-green-600/20'];
  const red = ['bg-red-50', 'text-red-700', 'ring-red-600/20'];
  const gray = ['bg-gray-50', 'text-gray-700', 'ring-gray-600/20'];
  const colors: Record<string, string[]> = {
    succeeded: green,
    executed: green,
    active: green,
    closed: gray,
    defeated: red,
    expired: red,
    cancelled: gray,
    pending: gray,
    queued: gray,
  };
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium ring-1 ring-inset',
        colors[status]?.join(' ')
      )}
    >
      {status}
    </span>
  );
};
