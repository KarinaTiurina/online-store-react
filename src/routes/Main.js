import MainPage from 'components/views/Main';
import { mainPath}  from 'helpers/routes';

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
};
