import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

function Inputform() {
const [inputValue, setInputValue]= useState("");
const [submittedValue, setSubmittedValue] = useState("");

function handleChange(e){
    setInputValue(e.target.value);
}
function handleSubmit(e){
    e.preventDefault();
    setSubmittedValue(inputValue)
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='form-label'>Name</label>
        <input type="text" className='form-control' name="name" id="name" onChange={handleChange} /> 
      </form>
      {submittedValue && <p>You Submitted {submittedValue}</p>}
      
    </div>
  )
}

export default Inputform
