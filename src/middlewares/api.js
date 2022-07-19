import axios from "axios";
import {LOGIN, saveUser, showError} from "../actions";

const apiMW = (store) => (next) => (action) => {

  switch (action.type) {
    case LOGIN:
      const {email, password} = store.getState();
      const postUser = async () => {
        try {
          const result = await axios.post('http://localhost:3001/login', {
            email: email,
            password: password,
          })
          const {pseudo} = result.data;
          store.dispatch(saveUser(pseudo));
        } catch
          (err) {
          store.dispatch(showError(`Mauvais email ou password`));
        }
      }
      
      postUser();

      next(action)
      break;
    // par défaut si l'action ne m'intéresse pas
    default:
      // je laisse passer l'action au middleware/reducer suivant
      // sans ça mon middleware court-circuite l'action
      next(action);
  }
};

export default apiMW;
