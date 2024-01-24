import React from 'react'

function toggle() {
    const [isOn, setOn]=("false");
    
  function handletoggle(){
    setOn((on)=>(!on))
  }
  return (
    <div>
      <p>The light is {isOn? "on":"off"}</p>
      <button onClick={handletoggle}>Toggle</button>
    </div>
  )
}

export default toggle
