import { createStore, combineReducers } from 'redux';

import locationsReducer from './reducers/locations';

const rootReducer = combineReducers({
    locationsList: locationsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
