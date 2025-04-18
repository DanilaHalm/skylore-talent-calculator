"use client"
import AllSkills from "./allskills";
import AllPassives from "./allPassives";
import ChosedSkills from "./chosedSkills";
import ChosedPassives from "./chosedPassives";
import {useState} from "react";
//import mageSkills from "../lib/mageSkills";
import { usePathname, useSearchParams } from "next/navigation";
 

const SkillBar = () => {
  const pathname = usePathname();
  const charClass = pathname.slice(1);
  const ultimates = [{
    index: 0,
    name: "name0",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 9,
    name: "name9",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },]

  const libSkills = {
 mage: [
  {
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
],
hunter: [
{
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
],
shadow: [
  {
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
],
warrior: [
  {
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
],
alchemist: [
  {
    index: 1,
    name: "name1",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 2,
    name: "name2",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 3,
    name: "name3",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 4,
    name: "name4",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 5,
    name: "name5",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 6,
    name: "name6",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 7,
    name: "name7",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  {
    index: 8,
    name: "name8",
    description:"description",
    requiredLvl:"reqLvl",
    icon:"icon.jpg",
    shards: [],
    checked: false,
  },
  
],

}
  
  const [skills, setSkills] = useState(libSkills[charClass])
  
  return (
    <div className="flex flex-col justify-center content-center items-center bg-red-200">
      <AllSkills skills={skills} setSkills={setSkills} ultimates={ultimates}/>
      <AllPassives />
      <ChosedSkills skills={[...skills,...ultimates]}/>
      <ChosedPassives/>
    </div>
    )
}

export default SkillBar
