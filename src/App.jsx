import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Searchresults from './components/Searchresults'
import Layout from './components/Layout'
import Home from './components/Home'


function App() {
  
  /*async function fetchData(){
    const respons = await fetch('https://openlibrary.org/search.json?q=james+bond&mode=everything.json')
    const data = await respons.json()
    console.log(data)
  }
  fetchData()*/


  /*const getData = async() => {
    try{
      fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .then(response => response.json())
      .then(data => console.log(data))
    } catch{
      console.error("Det har skjedd en feil")
    }
  }
  getData()*/

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='resulte' element={<Searchresults />}></Route>
      </Routes>
    </Layout>
    </Router>
  )
}

export default App
