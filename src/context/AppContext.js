
import createDataContext from './createDataContext';

const appReducer = (state, { type, payload }) => {
  switch(type) {
    case 'toggle_menu':
      const {showMenu} = state;
      return { ...state, showMenu: !showMenu };
    default:
      return state;
  }
};

const toggleMenu = dispatch => () => {
  dispatch({
    type: 'toggle_menu',
  });
};

export const { Context, Provider } = createDataContext(
  appReducer,
  { toggleMenu },
  { showMenu: false }
);