
import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  switch(type) {
    case 'toggle_menu':
      const {showMenu} = state;
      return { ...state, showMenu: !showMenu };
    case 'toggle_player':
      const {showPlayer} = state;
      return { ...state, showPlayer: !showPlayer };
    default:
      return state;
  }
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
  { toggleMenu, togglePlayer },
  { showMenu: false, showPlayer: true }
);