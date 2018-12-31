import React, { Component, SFC } from 'react';
import { User } from '../../domain/user';

type Props = {
  user?: User;
};

export const Avatar: SFC<Props> = props => {
  const { user } = props;
  if (!user) return <p>no user object</p>;
  const { role, name } = user;
  return (
    <p>
      {name} / {role || 'guest'}
    </p>
  );
};

// export default Avatar;
