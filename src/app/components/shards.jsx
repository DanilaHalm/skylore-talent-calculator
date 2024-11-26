"use client"
import { useState } from "react";

const Shards = (selectedShard) => {
  const [checked, setChecked] = useState(selectedShard)
  
  const changeState = () => {
    setChecked(checked === 1? 2 : 1)
  }
  
  return (
    <div classname="flex flex-col h-16">
      <input type="radio" checked={checked === 1} onclick={changeState}></input>
      <input type="radio" checked={checked === 2} onclick={changeState}></input>
    </div>
  )
}

export default Shards
