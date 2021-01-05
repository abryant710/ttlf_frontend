import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  const { showMenu, showPlayer, playerMinimised } = state;
  switch (type) {
    case 'HIDE_BACK_BUTTON':
      return { ...state, backButtonShown: false };
    case 'SHOW_BACK_BUTTON':
      return { ...state, backButtonShown: true };
    case 'TOGGLE_MENU':
      return { ...state, showMenu: !showMenu };
    case 'HIDE_MENU':
      return { ...state, showMenu: false };
    case 'TOGGLE_PLAYER':
      if (showPlayer) {
        return { ...state, showPlayer: !showPlayer, playerMinimised: false };
      }
      return { ...state, showPlayer: !showPlayer };
    case 'PLAYER_OFF':
      return { ...state, showPlayer: false, playerMinimised: false };
    case 'PLAYER_ON':
      return { ...state, showPlayer: true, playerMinimised: false };
    case 'TOGGLE_MINIMISE_PLAYER':
      return { ...state, playerMinimised: !playerMinimised };
    case 'MINIMISE_PLAYER':
      return { ...state, playerMinimised: true };
    default:
      return state;
  }
};

const toggleMinimisePlayer = (dispatch) => () => {
  dispatch({
    type: 'TOGGLE_MINIMISE_PLAYER',
  });
};

const togglePlayer = (dispatch) => () => {
  dispatch({
    type: 'TOGGLE_PLAYER',
  });
};

const hideBackButton = (dispatch) => () => {
  dispatch({
    type: 'HIDE_BACK_BUTTON',
  });
};

const showBackButton = (dispatch) => () => {
  dispatch({
    type: 'SHOW_BACK_BUTTON',
    payload: true,
  });
};

const toggleMenu = (dispatch) => () => {
  dispatch({
    type: 'TOGGLE_MENU',
  });
};

const hideMenu = (dispatch) => () => {
  dispatch({
    type: 'HIDE_MENU',
    payload: false,
  });
};

const turnPlayerOff = (dispatch) => (onOff) => {
  dispatch({
    type: onOff ? 'PLAYER_OFF' : 'PLAYER_ON',
  });
};

const minimisePlayer = (dispatch) => () => {
  dispatch({
    type: 'MINIMISE_PLAYER',
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
  { showMenu: false, showPlayer: false, playerMinimised: false, backButtonShown: false },
);
