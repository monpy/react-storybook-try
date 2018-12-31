import React from 'react';
import { storiesOf } from '@storybook/react';
import { redux } from '../redux';
import { decorate } from '../decorators';
import AuthorizedAvatar from '../../components/authorized_avatar/';
import { User } from '../../domain/user';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Header', module);
decorate(stories);

let user: User = {
  id: 1,
  role: 'role-example',
  name: 'name-example'
};

const store = redux(stories, { auth: user });

stories.add('Layout', () => {
  return (
    <div
      style={{
        height: 60,
        background: '#f0f0f0',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: '20px'
        }}
      >
        <AuthorizedAvatar />
      </div>
    </div>
  );
});
