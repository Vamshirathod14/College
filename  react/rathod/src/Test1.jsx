import React from 'react'

function Test1() {
    function display(){
    alert("This is a Simple Event in React js")
    }
  return (
    <div>
      <button onClick={display}>click here</button>
    </div>
  )
}

export default Test1
