
import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  switch(type) {
    case 'toggle_menu':
      const {showMenu} = state;
      return { ...state, showMenu: !showMenu };
    case 'toggle_player':
      const {showPlayer} = state;
      if (showPlayer) {
        return { ...state, showPlayer: !showPlayer, playerMinimised: false };
      }
      return { ...state, showPlayer: !showPlayer };
    case 'minimise_player':
      const {playerMinimised} = state;
      return { ...state, playerMinimised: !playerMinimised };
    default:
      return state;
  }
};

const minimisePlayer = dispatch => () => {
  dispatch({
    type: 'minimise_player',
  });
};

const togglePlayer = dispatch => () => {
  dispatch({
    type: 'toggle_player',
  });
};

const toggleMenu = dispatch => () => {
  dispatch({
    type: 'toggle_menu',
  });
};

export const { Context, Provider } = createDataContext(
  appReducer,
  { toggleMenu, togglePlayer, minimisePlayer },
  { showMenu: false, showPlayer: true, playerMinimised: false }
);