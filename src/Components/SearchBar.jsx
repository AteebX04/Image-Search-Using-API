import React from 'react'
import { useState } from 'react'


function Searchbar({onSubmit}) {
  const handleFormSubmit =(event)=>{
    event.preventDefault()
    onSubmit(term)
  }
  const [term,setTerm] =useState("")
  const handleChange =(event)=>{
   setTerm(event.target.value)
  }
  return (
    <div className = "search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="input">Enter Search Term</label>
        <input onChange={handleChange} value={term}/> 
      </form>
    </div>
  )
}

export default Searchbar
