import react from 'react'
import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import searchImages from './Components/api'
import ImageList from './Components/ImageList'


function App() {
  const [images,setImages] = useState([])

  const handleSubmit = async(term) =>{
    const result = await searchImages(term)
    setImages(result)
  }

  return (
    <>
    <SearchBar onSubmit  ={handleSubmit} />
    <ImageList images ={images} />
    </>
  )
}

export default App
