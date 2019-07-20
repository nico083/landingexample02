import development from './dev';
import production from './prod';

const env = process.env.REACT_APP_ENV || development.env;
const settings = {
  development,
  production
}[env];

if (env !== production.env) {
  console.log('***', settings, '***');
}

export default settings;
