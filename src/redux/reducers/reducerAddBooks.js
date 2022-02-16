import { ADD_BOOKS, DELETE_BOOKS } from "../constants";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    books: []
}

const helperAddData = (action) => {
    return {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author
    }
}

const helperDeleteDataById = (state, id) => {
    const books = state.filter((book) => book.id !== id)
    return books;
}

//Reducer
const reducerAddBooks = (state = initialState.books, action) => {

    if(localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'))
    }

    switch (action.type) {
        case ADD_BOOKS:
            state = [...state, helperAddData(action)]
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_BOOKS:
            state = helperDeleteDataById(state, action.payload);
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;
            
        default:
            return state;
    }
}

export default reducerAddBooks;