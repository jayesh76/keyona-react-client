import axios from "axios";
import { GET_ERRORS, GET_BOOKS, GET_BOOK, GET_BOOK_CONTENT, DELETE_BOOK } from "./types";

export const createBook = (book, button, history) => async dispatch => {
  try {
    if(button === 'back'){
      history.push("/library");
      console.log("API not Called: "+button);
    }else{
      console.log("API Called: "+JSON.stringify(book));
      const res = await axios.post("/api/book", book);
      if(button === 'close'){
        history.push("/library");
      }
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    }
    
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMyBooks = () => async dispatch => {
  const res = await axios.get("/api/book/allBooks");
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
};

export const getBooks = () => async dispatch => {
  const res = await axios.get("/api/book/all");
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
};

export const getBook = (id, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/book/${id}`);
    dispatch({
      type: GET_BOOK,
      payload: res.data
    });
  } catch (error) {
    history.push("/library");
  }
};

export const getBookContent = (id, history) => async dispatch => {
  try {
    console.log("API Called: ");
    const res = await axios.get(`/api/book/content/${id}`);
    dispatch({
      type: GET_BOOK_CONTENT,
      payload: res.data
    });
  } catch (error) {
    history.push("/library");
  }
};

export const deleteBook = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the book and all the data related to it"
    )
  ) {
    await axios.delete(`/api/book/${id}`);
    dispatch({
      type: DELETE_BOOK,
      payload: id
    });
  }
};
