import React from 'react';
export default ({ name, role }) => {
  return (
    <p>
      {name} / {role || 'guest'}
    </p>
  );
};
