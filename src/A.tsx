import { memo } from 'react';

export function A() {
  console.log('A is rendered');
  return <div>I am A</div>;
}

export default memo(A);
