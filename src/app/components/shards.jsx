"use client"
import { useState } from "react";

const Shards = (selectedShard) => {
  const [checked, setChecked] = useState(selectedShard)
  
  const changeState = (e) => {
    setChecked(Number(e.target.dataset.id))
  }
  
  return (
    <div className="flex flex-col justify-around h-20 w-7">
      <input type="radio" data-id={1} checked={checked === 1} onChange={(e)=>changeState(e)}></input>
      <input type="radio" data-id={2} checked={checked === 2} onChange={(e)=>changeState(e)}></input>
    </div>
  )
}

export default Shards
