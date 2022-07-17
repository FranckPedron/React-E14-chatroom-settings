function getNextMessageID(state) {
  let id = 1;
  if (state.messages.length > 0) {
    id = Math.max(...state.messages.map(message => message.id)) + 1
  }
  return id;
}

export { getNextMessageID };

/**
 * Fonction qui compare l'auteur du message avec l'utilisateur courant
 * @param {string} author
 * @returns {function(*): boolean}
 */
export const getIsMine = (author) => (state) => state.pseudo === author;
