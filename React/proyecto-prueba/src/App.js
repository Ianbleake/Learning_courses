import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './welcome';
import Topic from './Topic';
import Micomponente from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { Eventos } from './Eventos';

function App() {
  return (
    <div id='home' className="App">
      <header className="App-header">
        <div className='izquierda'>
          
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Titulo">Curso de React</h1>
          <p>
            Vamos a Aprender React!!!
          </p>
          <Welcome nombre="Ian"/>
        </div>
        <div className="derecha">
          <h2 className='Titulo'>Temas</h2>
          <ul className="menu">
          <li><a href="#Component">Componentes</a></li>
          <li><a href='#vistas'>Vistas y JSX</a></li>
          <li><a href='#Comunication'>Comunicacion</a></li>
          <li><a href='#Events'>Eventos</a></li>
          <li><a href='#Hook'>Hooks</a></li>
          <li><a href='#HTTP'>HTTP y AJAX</a></li>
          <li><a href='#Formulario'>Formularios</a></li>
          <li><a href='#Router'>Router y Navegacion</a></li>
          </ul>
        </div>
      </header>

      <Topic name="Component" titulo="Componentes" content={<Micomponente/>} back="#home" next="#vistas"/>
      <Topic name="vistas" titulo="JSX" content={<SegundoComponente/>} back="#Component" next="#Comunication"/>
      <Topic name="Comunication" titulo="Comunicacion de Componentes" content={<TercerComponente nombre="Ivan" Apellido="Rangel" correo={5512182737}  />} back="#vistas" next="#Events"/>
      <Topic name="Events" titulo="Eventos" content={<Eventos/>} back="#Comunication" next="#Hook"/>
      <Topic name="Hook" titulo="Hooks" content="..." back="#Events" next="#HTTP"/>
      <Topic name="HTTP" titulo="HTTP y AJAX" content="..." back="#Hook" next="#Formulario"/>
      <Topic name="Formulario" titulo="Formularios" content="..." back="#HTTP" next="#Router"/>
      <Topic name="Router" titulo="Router y Navegacion" content="..." back="#Formulario" next="#home"/>
    
    </div>
  );
}

export default App;