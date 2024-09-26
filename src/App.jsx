import { useState, useEffect } from 'react'
import './App.css'

import ContactList from './components/ContactList'

//i think we need a head for top title 
//need the <thead>.<tr>.<th> this is the top row
//acording to instuction we need a head, row, and column componets

function App() {
  
  return (
    <>
      <ContactList />
    </>
  )
}

export default App
