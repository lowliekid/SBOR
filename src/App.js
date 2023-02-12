import s from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React, { useState } from 'react';
import Poster from './components/Poster/Poster';


function App() {
  const [state, setState] = React.useState(false)
  return (
    <div className={s.AppWrapper}>
      <Header />
      <div className={s.AppWrapperContrent}>
        {/* <Main /> */}
        <Poster/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
