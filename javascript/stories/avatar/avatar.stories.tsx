import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorate } from '../decorators';
import SimpleAvatar from '../../components/avatar/simple';
import { Avatar as SmartAvatar } from '../../components/avatar/';
import { User } from '../../domain/user';
import { text } from '@storybook/addon-knobs';

const stories = storiesOf('Avatar', module);
decorate(stories);

stories.add('Simple', () => (
  <SimpleAvatar role={null} name={text('name', 'name-example')} />
));

stories.add('Smart', () => {
  const user: User = {
    id: 1,
    role: text('role', 'role-example'),
    name: text('name', 'name-example')
  };
  return <SmartAvatar user={user} />;
});
