import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Aside } from '../components/aside/Aside';
import { Content } from '../components/content/Content';
import '../styles/index.scss'

function App() {
  return (
    <>
    <Header/>
    <div className="container main-container">
      <Aside/>
      <Content/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
