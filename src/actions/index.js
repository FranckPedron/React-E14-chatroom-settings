export const WRITE_MESSAGE = 'UPDATE_MESSAGE';
export const writeMessage = (message) => ({
  type: WRITE_MESSAGE,
  message,
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = () => ({
  type: SEND_MESSAGE
});

export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (error) => ({
  type: SHOW_ERROR,
  error
});

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const toggleOpen = () => ({
  type: TOGGLE_OPEN
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value ) => ({
  type: CHANGE_VALUE,
  key,
  value
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (pseudo) => ({
  type: SAVE_USER,
  pseudo
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const WS_CONNECT = 'WS_CONNECT';
export const wsConnect = () => ({
  type: WS_CONNECT
});
