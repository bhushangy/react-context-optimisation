import { useContext } from 'react';
import { AppContext } from './App';

export default function C() {
  // const [val] = useContext(AppContext);
  console.log('C is rendered');
  return <div>I am C</div>;
}
