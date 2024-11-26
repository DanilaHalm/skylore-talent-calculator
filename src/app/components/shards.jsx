"use client"
import { useState } from "react";

const Shards = () => {
  const [checked, setChecked] = useState(false)

  const changeState = () => {
    setChecked(!checked)
  }
  
  return (
    <>
      <input type="radio" checked={checked} onclick={()=> changeState}></input>
      <input type="radio" checked={checked} onclick={()=> changeState}></input>
    </>
  )
}

export Shards
