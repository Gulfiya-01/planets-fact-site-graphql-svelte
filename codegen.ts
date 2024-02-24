import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema:[
    {
        'http://127.0.0.1:8088/v1/graphql': {
            headers: {
              'x-hasura-admin-secret': 'adminsecret',
            },
        },
    },
],
  generates: {
   './src/lib/data/generated.ts':  {   
      plugins: ['typescript', 'typescript-operations', 'typed-document-node', '@kitql/graphql-codegen']
    }
  }
}
export default config

 
