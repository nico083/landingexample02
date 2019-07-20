import React from 'react';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import Modal from './components/modal/Modal';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Loading from './components/loading/Loading';
import store from './core/config/store';
import './App.scss';

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading
});
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <Modal />
          <div className="container is-fluid App">
            <Home />
          </div>
        </ErrorBoundary>
      </Provider>
    );
  }
}
