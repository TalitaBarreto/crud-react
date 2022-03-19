import React from 'react';
import './App.css';
import Cadastro from './components/Cadastro';
import "./style/style.css"


function App() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Cadastro/>
          </div>
        </div>
      </div>     
    </div>
  );
}

export default App;
