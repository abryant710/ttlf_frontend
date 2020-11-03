import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  const { showMenu, showPlayer, playerMinimised } = state;
  switch (type) {
    case 'hide_back_button':
      return { ...state, backButtonShown: false };
    case 'show_back_button':
      return { ...state, backButtonShown: true };
    case 'toggle_menu':
      return { ...state, showMenu: !showMenu };
    case 'hide_menu':
      return { ...state, showMenu: false };
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

const hideBackButton = (dispatch) => () => {
  dispatch({
    type: 'hide_back_button',
  });
};

const showBackButton = (dispatch) => () => {
  dispatch({
    type: 'show_back_button',
    payload: true,
  });
};

const toggleMenu = (dispatch) => () => {
  dispatch({
    type: 'toggle_menu',
  });
};

const hideMenu = (dispatch) => () => {
  dispatch({
    type: 'hide_menu',
    payload: false,
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
  {
    toggleMenu,
    hideMenu,
    togglePlayer,
    toggleMinimisePlayer,
    turnPlayerOff,
    minimisePlayer,
    showBackButton,
    hideBackButton,
  },
  { showMenu: false, showPlayer: true, playerMinimised: false, backButtonShown: false },
);
