import React from 'react';
import './styles/SideBar.css'
import SideBar from './components/SideBar';
import Recoleccion from './containers/Recoleccion';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
  <> 
  <SideBar/>
  <Recoleccion/>
  
  </>
  </AppContext.Provider>
  );
}

export default App;
