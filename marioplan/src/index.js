import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import serviceWorker from './serviceWorker';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    //reactReduxFirebase(fbConfig) // redux binding for firebase // redux bindings for firestore
    //reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
    reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
  )
);




store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
    serviceWorker.unregister();  
});

