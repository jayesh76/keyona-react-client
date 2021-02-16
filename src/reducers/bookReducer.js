import { GET_BOOKS, GET_BOOK, GET_BOOK_CONTENT, DELETE_BOOK } from "../actions/types";

const initialState = {
  books: [],
  book: {},
  bookContent: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };

    case GET_BOOK:
      return {
        ...state,
        book: action.payload
      };
      case GET_BOOK_CONTENT:
      return {
        ...state,
        bookContent: action.payload
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(
          book => book.id !== action.payload
        )
      };
    default:
      return state;
  }
}
