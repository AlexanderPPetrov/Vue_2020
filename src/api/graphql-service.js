/**
 * Created by alexanderpetrov on 24.03.19.
 */

import gql from 'graphql-tag';
import graphqlClient from './graphql';

export default {

  //TODO write generic query handler in a separate client file

  async getGamesList(success, failure) {
    try {
      const response = await graphqlClient.query({
        query: gql`
        query {
          games {
            id
            name
            description
            image
          }
        }
      `
      });
      success(response);
    } catch (error) {
      failure(error);
    }

  },

};
