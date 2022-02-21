import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerAddBooks from './reducers/reducerAddBooks';
import reducerFetchedBooks from './reducers/reducerFetchBooks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    library: reducerAddBooks,
    search: reducerFetchedBooks
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
