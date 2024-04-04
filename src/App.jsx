import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searchresults from './components/Searchresults'
import Layout from './components/Layout'
import { useState } from 'react'
import { useEffect } from 'react'
import Bookcard from './components/Bookcard'
import Searchform from './components/Searchform'



function App() {
  //Kilde: Forelesnings Category_blogg
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("james bond")

  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setBooks(data.docs);
      console.log(data.docs);
    } catch(error){
      console.error('Det har skjedd en feil!')
    }
  }
     
    useEffect(()=>{
      getData() 
    },[query])

  return (  
    <>
    <Router>
      <Layout>
        <Searchform setQuery={setQuery}/>
      <Routes>
        <Route path='/' element={<Bookcard books={books} />}></Route>
        {/*<Route path='resulte' element={<Searchresults books={books} setQuery={setQuery}/>}></Route>*/}
      </Routes>
    </Layout>
  </Router>
    </>
  )
}

export default App

