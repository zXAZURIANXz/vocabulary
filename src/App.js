//import logo from './logo.svg';
import './App.css';

//import { Button } from 'primereact/button';
//import NotificationComponent from './Components/NotificationComponent';
import MenuComponent from './Components/MenuComponent';
import FieldSetComponent from './Components/FieldSetComponent';
import TableComponent from './Components/TableComponent'
import { getWords } from "./Services/api";
import { showNotification } from './Services/ShowNotification';
import React, { useEffect, useState } from "react";


        
function App() {

  const [words, setWords] = useState([]);
  useEffect(() => {
    getWords()
      .then((result) => {
        setWords(result);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  /**
   *  TODO guardar las palabas con REDUX
   */
  console.log(words);

  return (
    <>
      <MenuComponent />
      <FieldSetComponent 
        title = {'Agrega nuevas palabras'}
      />

      <br />
      <TableComponent
        data={words}
      />
    </>
  );
}

export default App;
