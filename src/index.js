import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function App(props) {
  return (
    <h1>{props.saludo}, {props.nombre}!</h1>
  )
}

// function withWhatever(WrappedComponent) {
//   return function ComponenteDeVerdad(props) {
//     return (
//       <React.Fragment>
//         <WrappedComponent {...props}/>
//         <p>Estamos acompañando al WrappedComponent</p>
//       </React.Fragment>
//     );
//   }
// }

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment>
      );
    }
  }
}

// const AppWithWhatever = withWhatever(App);
const AppWithSaludo = withSaludo(App)('Holis');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppWithSaludo saludo="Hey" nombre="Marc" />
  // <App 
  //   saludo="Buenas"
  //   nombre="Juanito"
  // />
);
