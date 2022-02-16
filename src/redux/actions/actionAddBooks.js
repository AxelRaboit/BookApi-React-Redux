import { ADD_BOOKS } from "../constants";

export const addBooks = (data) => {
    return {
        type: ADD_BOOKS,
        payload: data /* This is an object */
    }
}