/**
 * Created by alexanderpetrov on 24.03.19.
 */
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import constants from '../constants';

export default new ApolloClient({
  link: new HttpLink({ uri: constants.graphql }),
  cache: new InMemoryCache(),

});
