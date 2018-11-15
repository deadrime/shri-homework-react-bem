import React from 'react';
import Header from './components/header/'
import Footer from './components/footer/'
import Events from './components/events/'
import './App.styl'
import './index.css'

function WelcomeShri(props: any) {
  const { isFull } = props
  return (
    <div className="app">
      <Header/>
      <main className="page-content">
        <Events/>
      </main>
      <Footer/>
    </div>
  );
}

const App = WelcomeShri

export default App
