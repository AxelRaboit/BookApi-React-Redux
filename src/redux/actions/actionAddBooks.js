import { ADD_BOOKS, DELETE_BOOKS } from "../constants";

export const addBooks = (data) => {
    return {
        type: ADD_BOOKS,
        payload: data /* This is an object */
    }
}

export const deleteBooks = (id) => {
    return {
        type: DELETE_BOOKS,
        payload: id
    }
}