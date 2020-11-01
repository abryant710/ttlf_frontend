import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  const { showMenu, showPlayer, playerMinimised } = state;
  switch (type) {
    case 'toggle_menu':
      return { ...state, showMenu: !showMenu };
    case 'toggle_player':
      if (showPlayer) {
        return { ...state, showPlayer: !showPlayer, playerMinimised: false };
      }
      return { ...state, showPlayer: !showPlayer };
    case 'player_off':
      return { ...state, showPlayer: false, playerMinimised: false };
    case 'toggle_minimise_player':
      return { ...state, playerMinimised: !playerMinimised };
    case 'minimise_player':
      return { ...state, playerMinimised: true };
    default:
      return state;
  }
};

const toggleMinimisePlayer = (dispatch) => () => {
  dispatch({
    type: 'toggle_minimise_player',
  });
};

const togglePlayer = (dispatch) => () => {
  dispatch({
    type: 'toggle_player',
  });
};

const toggleMenu = (dispatch) => () => {
  dispatch({
    type: 'toggle_menu',
  });
};

const turnPlayerOff = (dispatch) => () => {
  dispatch({
    type: 'player_off',
  });
};

const minimisePlayer = (dispatch) => () => {
  dispatch({
    type: 'minimise_player',
  });
};

export const { Context, Provider } = createDataContext(
  appReducer,
  { toggleMenu, togglePlayer, toggleMinimisePlayer, turnPlayerOff, minimisePlayer },
  { showMenu: false, showPlayer: true, playerMinimised: false },
);
