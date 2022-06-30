import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import DetailsPage from './pages/detailspage/DetailsPage'
import ListPage from './pages/listpage/ListPage'
import NewRecord from './pages/newrecord/NewRecord'
import mainContext from './context/mainContext'
import Toolbar from './components/Toolbar'

function App() {
  const [getItems, setItems] = useState()

  useEffect(()=>{
      (async () => {
      const itemsRes = await fetch('https://fakestoreapi.com/products')
      const itemsData = await itemsRes.json()
      setItems(itemsData)
    })()
  }, [])  

  
  return (
    <div className="App">  
      <mainContext.Provider value={{getItems, setItems}}>
        <Toolbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListPage />}/>
            <Route path='/details/:itemId' element={<DetailsPage/>} />
            <Route path='/new_record' element={<NewRecord/>} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </div>
  );
}

export default App;
