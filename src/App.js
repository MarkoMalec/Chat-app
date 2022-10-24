import './App.css';
import { Component, useEffect } from 'react';
import Header from './components/elements/header/Header';
import Sidebar from './components/elements/sidebar/Sidebar';
import ChatApp from './components/ChatApp/ChatApp';
import Input from './components/Chat/Input/Input';
import Chat from './components/Chat/Chat';


function App() {

  return (
    <div className="App">
      <ChatApp />
    </div>
  );
}

export default App;
