
import { createClient } from '$lib/data';
 
const URL: 'http://localhost:8088/v1/graphql' = 'http://localhost:8088/v1/graphql';
const client = createClient({
    url: URL,
    headers:{
        'x-hasura-admin-secret': 'adminsecret',
    }
});
 
export default client;