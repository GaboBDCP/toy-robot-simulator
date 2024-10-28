import './App.css';
import TableTop from './components/TableTop';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);

  return (
    <>
      <Header
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
      <TableTop width={width} height={height} />
    </>
  );
}

export default App;
