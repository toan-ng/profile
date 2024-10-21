import React, { memo } from 'react';
import techstack from '../../assets/jsons/techstack.json';
import Stack from './Stack';

const TechStack = memo(() => {
  const stacks = techstack;

  return (
    <div>
      {stacks && stacks.map((stack, index) => (
        <div key={`stackKey_${stack.category}`}>
          <Stack stack={stack} id={stack.id} />
        </div>
      ))}
    </div>
  );
});

export default TechStack;