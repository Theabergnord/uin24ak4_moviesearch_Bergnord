import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searchresults from './components/Searchresults'
import Layout from './components/Layout'
import { useState } from 'react'
import { useEffect } from 'react'
import Searchform from './components/Searchform'



function App() {
  //Kilde: Forelesnings Category_blogg
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("james bond")
  //Kilde: https://www.youtube.com/watch?v=00lxm_doFYw
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs);
      console.log(data.docs);
    } catch(error){
      console.error('Det har skjedd en feil!')
    }
    setLoading(false)
  }
     
    useEffect(()=>{
      getData() 
    },[query])

  return (  
    <>
    <Router>
      <Layout>
        <Searchform setQuery={setQuery} loading={loading}/>
      <Routes>
        <Route path='/' element={<Searchresults books={books} setQuery={setQuery}/>}></Route>
      </Routes>
    </Layout>
  </Router>
    </>
  )
}

export default App

