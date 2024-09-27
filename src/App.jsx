import { useState, useEffect } from 'react'
import './App.css'

import ContactList from './components/ContactList'
import SelectedContact from "./components/SelectedContact";

const URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {
        selectedContactId ? (
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} URL={URL} />
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} URL={URL} />
        )
      }      
    </>
  )
}

export default App