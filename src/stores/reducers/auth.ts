import { Action } from 'redux';
import { LOGIN } from '../constants/auth';

const auth = (state = [], action: Action) => {
  switch (action.type) {
    case LOGIN:
      console.log(state);

      return [
        ...state
      ];
    default:
      return state;
  }
};

export default auth;
