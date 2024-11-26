"use client"
import { useState } from "react";

const Shards = (selectedShard) => {
  const [checked, setChecked] = useState(selectedShard)
  
  const changeState = () => {
    setChecked(checked === 1? 2 : 1)
  }
  
  return (
    <>
      <input type="radio" checked={checked === 1} onclick={changeState}></input>
      <input type="radio" checked={checked === 2} onclick={changeState}></input>
    </>
  )
}

export default Shards
