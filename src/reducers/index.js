import {ADD_MESSAGE, CHANGE_VALUE, LOGOUT, SHOW_ERROR, TOGGLE_OPEN, WRITE_MESSAGE, SAVE_USER} from "../actions";
import {getNextMessageID} from "../selectors";

const initialState = {
  messages: [
    {id:0, content:'Petit essai',author:'Testeur 1'},
    {id:1, content:'Deuxième essai',author:'Testeur 2'}
  ],
  currentMessage: '',
  displayError: false,
  errorMessage: '',
  open: true,
  email: '',
  password: '',
  pseudo: 'Anonyme',
  logged: false,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case WRITE_MESSAGE:
      return {
        ...state,
        currentMessage: action.message,
      };

    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
            id: getNextMessageID(state),
            author: state.pseudo,
            content: state.currentMessage
        }],
        currentMessage: '',
        displayError: false,
      };

    case SHOW_ERROR:
      return {
        ...state,
        displayError: true,
        errorMessage: action.error,
        currentMessage: '',
      };

    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };

    case SAVE_USER:
      return {
        ...state,
        pseudo: action.pseudo,
        displayError: false,
        logged: true,
        email: '',
        password: '',
      };

    case LOGOUT:
      return {
      ...state,
      logged: false,
      pseudo: 'Anonyme'
    };

    default:
      return state;
  }
}

export default reducer;
