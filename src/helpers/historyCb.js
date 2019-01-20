import { matchPath } from 'react-router';
import { parse } from 'qs';
import prepareData from 'helpers/prepareData';
import routes from 'routes';
import store from 'store';

export default function (location, action = 'PUSH') {
  const state = { params: {}, query: {}, routes: [] };


  routes.some((route) => {
    const match = matchPath(location.pathname, route);
    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
}
