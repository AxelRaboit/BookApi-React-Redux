import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants";

export const addBooks = (data) => {
    return {
        type: ADD_BOOKS,
        payload: data /* This is an object */
    }
}

export const deleteBooks = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const deleteAllBooks = () => {
    return {
        type: DELETE_ALL_BOOKS,
    }
}