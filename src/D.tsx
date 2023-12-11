import { memo, useContext } from 'react';
import { AppContext } from './App';

function D() {
  // const [, setVal] = useContext(AppContext);
  const [val] = useContext(AppContext);
  console.log('D is rendered');
  // return <div onClick={() => setVal('b')}>I am D</div>;
  return <div>I am D</div>;
}

export default memo(D);
