import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";
import { v4 as uuid } from 'uuid';

const initialState = {
    books: []
}

const addData = (action) => {
    return {
        id: uuid(),
        title: action.payload.title,
        author: action.payload.author
    }
}

const deleteDataById = (state, id) => {
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
            state = [...state, addData(action)]
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_BOOK:
            state = deleteDataById(state, action.payload);
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;

        case DELETE_ALL_BOOKS:
            state = [];
            localStorage.setItem('booksData', JSON.stringify(state));
            return state;
            
        default:
            return state;
    }
}

export default reducerAddBooks;