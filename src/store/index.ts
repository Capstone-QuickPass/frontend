import { combineReducers, createStore } from 'redux';
import { pageReducer } from './page/reducer';
import { personReducer } from './personList/reducers';

const rootReducer = combineReducers({
  person: personReducer,
  page: pageReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
