import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'react-apollo';
import thunk from 'redux-thunk';

import reducers from './reducers';

/*
  const networkInterface = createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  });

  export const client = new ApolloClient({
    networkInterface,
  }); 
*/
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  })
});


const middlewares = [client.middleware(), thunk];

export const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
