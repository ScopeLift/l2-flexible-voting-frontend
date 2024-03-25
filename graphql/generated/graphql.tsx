import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: bigint; output: string; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type AggregationEntity = {
  __typename?: 'AggregationEntity';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type AggregationEntity_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AggregationEntity_Filter>>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AggregationEntity_Filter>>>;
};

export enum AggregationEntity_OrderBy {
  Count = 'count',
  Id = 'id'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BridgedVote = {
  __typename?: 'BridgedVote';
  aggregatorAddress: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  proposal?: Maybe<Proposal>;
  transactionHash: Scalars['Bytes']['output'];
  voteAbstain: Scalars['BigInt']['output'];
  voteAgainst: Scalars['BigInt']['output'];
  voteFor: Scalars['BigInt']['output'];
};

export type BridgedVote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aggregatorAddress?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  aggregatorAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  aggregatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<BridgedVote_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<BridgedVote_Filter>>>;
  proposal?: InputMaybe<Scalars['String']['input']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_gt?: InputMaybe<Scalars['String']['input']>;
  proposal_gte?: InputMaybe<Scalars['String']['input']>;
  proposal_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_lt?: InputMaybe<Scalars['String']['input']>;
  proposal_lte?: InputMaybe<Scalars['String']['input']>;
  proposal_not?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains?: InputMaybe<Scalars['String']['input']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with?: InputMaybe<Scalars['String']['input']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  voteAbstain?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAbstain_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteAbstain_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAgainst?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteAgainst_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteAgainst_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteFor?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_gt?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_gte?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  voteFor_lt?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_lte?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_not?: InputMaybe<Scalars['BigInt']['input']>;
  voteFor_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum BridgedVote_OrderBy {
  AggregatorAddress = 'aggregatorAddress',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Proposal = 'proposal',
  ProposalBlockNumber = 'proposal__blockNumber',
  ProposalBlockTimestamp = 'proposal__blockTimestamp',
  ProposalDescription = 'proposal__description',
  ProposalEndBlock = 'proposal__endBlock',
  ProposalGovernorAddress = 'proposal__governorAddress',
  ProposalId = 'proposal__id',
  ProposalIsCancelled = 'proposal__isCancelled',
  ProposalProposalId = 'proposal__proposalId',
  ProposalProposer = 'proposal__proposer',
  ProposalStartBlock = 'proposal__startBlock',
  ProposalTransactionHash = 'proposal__transactionHash',
  TransactionHash = 'transactionHash',
  VoteAbstain = 'voteAbstain',
  VoteAgainst = 'voteAgainst',
  VoteFor = 'voteFor'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Proposal = {
  __typename?: 'Proposal';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  bridgedVote?: Maybe<BridgedVote>;
  calldatas: Array<Scalars['Bytes']['output']>;
  description: Scalars['String']['output'];
  endBlock: Scalars['BigInt']['output'];
  governorAddress: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  isCancelled: Scalars['Boolean']['output'];
  proposalId: Scalars['BigInt']['output'];
  proposer: Scalars['Bytes']['output'];
  signatures: Array<Scalars['String']['output']>;
  startBlock: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
  values: Array<Scalars['BigInt']['output']>;
};

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bridgedVote?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_?: InputMaybe<BridgedVote_Filter>;
  bridgedVote_contains?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_ends_with?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_gt?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_gte?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bridgedVote_lt?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_lte?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_contains?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bridgedVote_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_starts_with?: InputMaybe<Scalars['String']['input']>;
  bridgedVote_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  endBlock?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  endBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  governorAddress?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  governorAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  governorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isCancelled?: InputMaybe<Scalars['Boolean']['input']>;
  isCancelled_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isCancelled_not?: InputMaybe<Scalars['Boolean']['input']>;
  isCancelled_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Proposal_Filter>>>;
  proposalId?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposalId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_not?: InputMaybe<Scalars['BigInt']['input']>;
  proposalId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proposer?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  proposer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  proposer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  signatures?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  signatures_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  startBlock?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  startBlock_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not?: InputMaybe<Scalars['BigInt']['input']>;
  startBlock_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  values?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Proposal_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  BridgedVote = 'bridgedVote',
  BridgedVoteAggregatorAddress = 'bridgedVote__aggregatorAddress',
  BridgedVoteBlockNumber = 'bridgedVote__blockNumber',
  BridgedVoteBlockTimestamp = 'bridgedVote__blockTimestamp',
  BridgedVoteId = 'bridgedVote__id',
  BridgedVoteTransactionHash = 'bridgedVote__transactionHash',
  BridgedVoteVoteAbstain = 'bridgedVote__voteAbstain',
  BridgedVoteVoteAgainst = 'bridgedVote__voteAgainst',
  BridgedVoteVoteFor = 'bridgedVote__voteFor',
  Calldatas = 'calldatas',
  Description = 'description',
  EndBlock = 'endBlock',
  GovernorAddress = 'governorAddress',
  Id = 'id',
  IsCancelled = 'isCancelled',
  ProposalId = 'proposalId',
  Proposer = 'proposer',
  Signatures = 'signatures',
  StartBlock = 'startBlock',
  TransactionHash = 'transactionHash',
  Values = 'values'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aggregationEntities: Array<AggregationEntity>;
  aggregationEntity?: Maybe<AggregationEntity>;
  bridgedVote?: Maybe<BridgedVote>;
  bridgedVotes: Array<BridgedVote>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAggregationEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AggregationEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AggregationEntity_Filter>;
};


export type QueryAggregationEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBridgedVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBridgedVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BridgedVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BridgedVote_Filter>;
};


export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  aggregationEntities: Array<AggregationEntity>;
  aggregationEntity?: Maybe<AggregationEntity>;
  bridgedVote?: Maybe<BridgedVote>;
  bridgedVotes: Array<BridgedVote>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAggregationEntitiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AggregationEntity_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AggregationEntity_Filter>;
};


export type SubscriptionAggregationEntityArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBridgedVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBridgedVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BridgedVote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BridgedVote_Filter>;
};


export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type L2ProposalsQueryVariables = Exact<{
  governor: Scalars['Bytes']['input'];
  proposalIds?: InputMaybe<Array<Scalars['BigInt']['input']> | Scalars['BigInt']['input']>;
}>;


export type L2ProposalsQuery = { __typename?: 'Query', proposals: Array<{ __typename?: 'Proposal', id: string | number, proposalId: string, proposer: any, startBlock: string, endBlock: string, description: string, governorAddress: any, isCancelled: boolean, transactionHash: any, blockNumber: string, blockTimestamp: string, bridgedVote?: { __typename?: 'BridgedVote', voteAgainst: string, voteFor: string, voteAbstain: string, blockNumber: string, blockTimestamp: string } | null }> };

export type ProposalsQueryVariables = Exact<{
  governor: Scalars['Bytes']['input'];
}>;


export type ProposalsQuery = { __typename?: 'Query', proposals: Array<{ __typename?: 'Proposal', id: string | number, proposalId: string, proposer: any, startBlock: string, endBlock: string, description: string, governorAddress: any, isCancelled: boolean, transactionHash: any, blockNumber: string, blockTimestamp: string }> };

export type ProposalTotalQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProposalTotalQuery = { __typename?: 'Query', aggregationEntity?: { __typename?: 'AggregationEntity', id: string | number, count: number } | null };



export const L2ProposalsDocument = `
    query L2Proposals($governor: Bytes!, $proposalIds: [BigInt!]) {
  proposals(
    first: 1000
    orderBy: blockNumber
    orderDirection: asc
    where: {governorAddress: $governor, proposalId_in: $proposalIds}
  ) {
    id
    proposalId
    proposer
    startBlock
    endBlock
    description
    governorAddress
    isCancelled
    transactionHash
    blockNumber
    blockTimestamp
    bridgedVote {
      voteAgainst
      voteFor
      voteAbstain
      blockNumber
      blockTimestamp
    }
  }
}
    `;

export const useL2ProposalsQuery = <
      TData = L2ProposalsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: L2ProposalsQueryVariables,
      options?: Omit<UseQueryOptions<L2ProposalsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<L2ProposalsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<L2ProposalsQuery, TError, TData>(
      {
    queryKey: ['L2Proposals', variables],
    queryFn: fetcher<L2ProposalsQuery, L2ProposalsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, L2ProposalsDocument, variables),
    ...options
  }
    )};

export const ProposalsDocument = `
    query Proposals($governor: Bytes!) {
  proposals(
    first: 1000
    orderBy: blockNumber
    orderDirection: asc
    where: {governorAddress: $governor}
  ) {
    id
    proposalId
    proposer
    startBlock
    endBlock
    description
    governorAddress
    isCancelled
    transactionHash
    blockNumber
    blockTimestamp
  }
}
    `;

export const useProposalsQuery = <
      TData = ProposalsQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: ProposalsQueryVariables,
      options?: Omit<UseQueryOptions<ProposalsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ProposalsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ProposalsQuery, TError, TData>(
      {
    queryKey: ['Proposals', variables],
    queryFn: fetcher<ProposalsQuery, ProposalsQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ProposalsDocument, variables),
    ...options
  }
    )};

export const ProposalTotalDocument = `
    query ProposalTotal($id: ID!) {
  aggregationEntity(id: $id) {
    id
    count
  }
}
    `;

export const useProposalTotalQuery = <
      TData = ProposalTotalQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: ProposalTotalQueryVariables,
      options?: Omit<UseQueryOptions<ProposalTotalQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ProposalTotalQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ProposalTotalQuery, TError, TData>(
      {
    queryKey: ['ProposalTotal', variables],
    queryFn: fetcher<ProposalTotalQuery, ProposalTotalQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ProposalTotalDocument, variables),
    ...options
  }
    )};
