import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/config/redux';
import AppNavigation from './src/config/navigation';

const App = () => (
    <AppNavigation/>
);

const ProviderApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default ProviderApp;