import './App.css';
import Characters from './component/Characters';
import Header from './component/Header';

import { useState } from 'react';

function App() {

  const [text, setText] = useState('')


  return (
    <div className="App">
      <Header setText={setText} />
      <Characters text={text} />
    </div>
  );
}

export default App;
