// on écrit une triple fléchée (on fait du currying)
// une fonction qui retourne une fonction qui retourne une fonction parce que Redux va l'utiliser ainsi,
// au final ce qui m'intéresse c'est que je vais pouvoir décrire quoi faire en fonction de l'action

const debug = (store) => (next) => (action) => {
  // je peux réagir au cas par cas suivant l'action,
  // un switch fonctionne bien
  switch (action.type) {
    case 'DO_SOMETHING':
      // ici je fais quelque chose,
      // par exemple ici du debug
      console.log(action);
      // j'ai accès au state
      console.log(store.getState());
      // je peux déclencher d'autres actions
      store.dispatch(doSomethingElse());
      // je laisse passer l'action qui continue sa course
      // au middleware/reducer suivant
      next(action)
      break;
    // par défaut si l'action ne m'intéresse pas
    default:
      // je laisse passer l'action au middleware/reducer suivant
      // sans ça mon middleware court-circuite l'action
      next(action);
  }
};

export default debug;
