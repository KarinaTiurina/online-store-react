/* globals __CLIENT__, __SERVER__ */
import { matchPath } from 'react-router';
import { parse } from 'qs';
import prepareData from 'helpers/prepareData';
import routes from 'routes';

export default function (store, location, action = 'PUSH') {
  const state = { params: {}, query: {}, routes: [] };


  routes.some((route) => {
    const match = matchPath(location.pathname, route);
    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);

      if (__CLIENT__)        
        Object.assign(state.query, parse(location.search.substr(1)));

      if (__SERVER__)
        state.query = location.query;
    }

    return match;
  });

  prepareData(store, state);
}
