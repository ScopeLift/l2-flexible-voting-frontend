import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    'https://subgraph.satsuma-prod.com/7ae15f9faae2/scopelift/l2-flexible-voting-governor-goerli/api',
    'https://subgraph.satsuma-prod.com/7ae15f9faae2/scopelift/l2-flexible-voting-vote-aggregator/api',
  ],
  documents: './graphql/**/(!(*.d)).graphql',
  generates: {
    './graphql/generated/graphql.tsx': {
      config: {
        reactQueryVersion: 5,
        scalars: {
          ID: {
            input: 'string',
            output: 'string | number',
          },
          addrress: {
            input: 'string',
            output: 'string',
          },
          BigInt: {
            input: 'string',
            output: 'string',
          },
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
    },
  },
};

export default config;
