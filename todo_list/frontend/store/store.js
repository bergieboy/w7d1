import { createStore } from 'redux';
import Logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';


const configureStore = createStore(rootReducer);

export default configureStore;
