import { create } from 'domain';
import { combineReducers, createStore } from 'redux';
import { personReducer } from './personList/reducers';

const rootReducer = combineReducers({
  person: personReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
