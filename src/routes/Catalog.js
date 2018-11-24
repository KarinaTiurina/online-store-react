import CatalogPage from '~/src/components/views/Catalog';
import { catalogPath }  from '~/src/helpers/routes';

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true
};
