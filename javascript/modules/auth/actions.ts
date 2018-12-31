import { User } from '../../domain/user';

const setUser = (user: User) => {
  return {
    type: 'AUTH_ACTION_SET',
    user: user
  };
};

export default { setUser };
