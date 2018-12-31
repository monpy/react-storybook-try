import { User } from '../../domain/user/';

interface DefaultState {
  user: User | null;
}

const defaultState: DefaultState = {
  user: null
};

const auth = (state = defaultState, { type, ...payload }) => {
  switch (type) {
    case 'AUTH_ACTION_SET':
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export default auth;
