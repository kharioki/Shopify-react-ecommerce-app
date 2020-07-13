import React from 'react';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider
      value={engine}
      debug={debug}
      debugAfterHydration
    ></StyletronProvider>
  );
}

export default App;
