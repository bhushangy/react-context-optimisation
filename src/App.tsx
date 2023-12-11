import { createContext, FC, useMemo, useState } from 'react';
import A from './A';
import B from './B';
import C from './C';
import D from './D';

export const AppContext = createContext(undefined);

const AppProvider = ({ children }) => {
  const [val, setVal] = useState('a');
  return (
    <AppContext.Provider value={useMemo(() => [val], [val])}>
      <div>
        <button onClick={() => setVal('b')}>Re render provider</button>
      </div>
      {children}
    </AppContext.Provider>
  );
};

export const App: FC<{ name: string }> = ({ name }) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState((c) => c + 1)}>Force Rerender</button>
      <AppProvider>
        <A />
        <B />
        <C />
        <D />
      </AppProvider>
    </div>
  );
};
